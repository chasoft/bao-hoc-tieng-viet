"use client"

import Link from "next/link"
import React from "react"
import clsx from "clsx"
import { useReadLocalStorage } from "usehooks-ts"
import { caseFunctions, getStringArrayCharLength, randomRgbColor } from "@/utils"
import { COMPOUND_VOWELS, WORD_COMPOSITION } from "@/data"
import { DEFAULT_SETTINGS, WORD_HIGHLIGHT } from "@/data/settings"
import { TSupportFont, fonts } from "@/app/fonts"
import { TWordCase } from "@/types"

function Text({ value, caseIndex }: { value: string, caseIndex?: TWordCase }) {
	const wordBold = useReadLocalStorage(DEFAULT_SETTINGS.wordBold.name)
		?? DEFAULT_SETTINGS.wordBold.value
	const wordItalic = useReadLocalStorage(DEFAULT_SETTINGS.wordItalic.name)
		?? DEFAULT_SETTINGS.wordItalic.value
	const selectedFont = useReadLocalStorage<TSupportFont>(DEFAULT_SETTINGS.fontFamily.name)
		?? DEFAULT_SETTINGS.fontFamily.value

	return (
		<span className={clsx(
			"whitespace-break-spaces",
			{ "font-bold": wordBold },
			{ "italic": wordItalic },
			fonts[selectedFont].className,
			"drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]",
			"lg:drop-shadow-[0_2.5px_2.5px_rgba(0,0,0,1)]",
		)}>
			{caseIndex
				? caseFunctions[caseIndex](value)
				: value}
		</span>
	)
}

function extractCompoundChars(rawStr: string): string[] {
	const strArr = rawStr.split(" ")
	const extractedCompoundChars: Array<string> = []

	strArr.forEach((str, idx) => {
		COMPOUND_VOWELS.map(({ char }) => char).every(i => {
			if (str.startsWith(i)) {
				extractedCompoundChars.push(i)
				return false
			}
			return true
		})

		WORD_COMPOSITION.forEach((COMPOUND) => {
			if (getStringArrayCharLength(extractedCompoundChars) >= str.length) return

			COMPOUND.every(i => {
				if (str.slice(getStringArrayCharLength(extractedCompoundChars)).startsWith(i)) {
					extractedCompoundChars.push(i)
					return false
				}
				return true
			})
		})

		if (idx < strArr.length - 1) {
			extractedCompoundChars.push(" ")
		}
	})

	return extractedCompoundChars
}

type WordProps = {
	word: string
	splitterMode: number
	updateElementCounts: (n: number) => void
	currentIndex: number,
}

export default function Word({ word, splitterMode, updateElementCounts, currentIndex }: WordProps) {
	const caseIndex = useReadLocalStorage<TWordCase>("wordCaseToolbarIcons") ?? "capitalize"

	const colorPalete = React.useMemo<string[]>(() =>
		Array.from(Array(6), () => randomRgbColor()
			// only rebuild the color palette only if the word has changed
			// eslint-disable-next-line react-hooks/exhaustive-deps
		), [word])

	if (splitterMode === WORD_HIGHLIGHT.COMPOUND) {
		const els = extractCompoundChars(word)
		updateElementCounts(els.length)
		return (
			<div className="flex justify-center">
				{extractCompoundChars(word).map((el, idx) =>
					<Link
						prefetch
						key={idx}
						href={`/char/${el}`}
						style={{ color: colorPalete[idx] }}
						className={clsx(
							{ "hover:underline": els[idx] !== " " },
							{ "underline": currentIndex === idx },
						)}
					>
						{caseIndex === "lowercase" && <Text value={el} caseIndex="lowercase" />}
						{caseIndex === "uppercase" && <Text value={el} caseIndex="uppercase" />}
						{caseIndex === "capitalize" && idx === 0 && <Text value={el} caseIndex="capitalize" />}
						{caseIndex === "capitalize" && idx > 0 && <Text value={el} caseIndex="lowercase" />}
					</Link>
				)}
			</div>
		)
	}

	if (splitterMode === WORD_HIGHLIGHT.CHAR) {
		const els = word.split("")
		updateElementCounts(els.length)
		return (
			<div className="flex justify-center">
				{els.map((letter, idx) =>
					<Link
						prefetch
						key={idx}
						href={`/char/${letter}`}
						style={{ color: colorPalete[idx] }}
						className={clsx(
							{ "hover:underline": els[idx] !== " " },
							{ "underline": currentIndex === idx && els[idx] !== " " },
						)}
					>
						<Text value={letter} />
					</Link>
				)}
			</div>
		)
	}

	if (splitterMode === WORD_HIGHLIGHT.NONE) {
		const els = word.split(" ")
		updateElementCounts(els.length)
		return (
			<div className="flex justify-center">
				{els.map((letter, idx) =>
					<Link
						prefetch
						key={idx}
						href={`/char/${letter}`}
						style={{ color: colorPalete[idx] }}
						className={clsx(
							{ "hover:underline": els[idx] !== " " },
							{ "underline": currentIndex === idx && els[idx] !== " " },
						)}
					>
						<Text value={letter} />
					</Link>
				)}
			</div>
		)
	}
}