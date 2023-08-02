"use client"

import Link from "next/link"
import React from "react"
import clsx from "clsx"
import { caseFunctions, getStringArrayCharLength, randomRgbColor } from "@/utils"
import { COMPOUND_VOWELS, WORD_COMPOSITION } from "@/data"
import { DEFAULT_SETTINGS, displaySettings } from "@/data/settings"
import { TSupportFont, fonts } from "@/app/fonts"
import { TWordCase } from "@/types"
import { useReadLocalStorage } from "usehooks-ts"

function Text({ value, caseIndex }: { value: string, caseIndex?: TWordCase }) {
	const wordBold = useReadLocalStorage("wordBold") ?? displaySettings.wordBold
	const wordItalic = useReadLocalStorage("wordItalic") ?? displaySettings.wordItalic
	const selectedFont = useReadLocalStorage<TSupportFont>("selectedFont") ?? DEFAULT_SETTINGS.fontFamily

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

/**
 * mode 0: highlighting compound vowels and consonants
 * mode 1: highlighting each character in the word
 * mode 2: no highlighting
*/
export const WORD_HIGHLIGHT = {
	COMPOUND: 0,
	CHAR: 1,
	NONE: 2,
}

function extractCompoundChars(str: string): string[] {
	const extractedCompoundChars: Array<string> = []

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

	return extractedCompoundChars
}

type WordProps = {
	word: string
	updateElementCounts: (n: number) => void
	currentIndex: number,
}

export default function Word({ word, updateElementCounts, currentIndex }: WordProps) {
	const [mode, setMode] = React.useState(Math.floor(Math.random() * 2))
	const caseIndex = useReadLocalStorage<TWordCase>("wordCaseToolbarIcons") ?? "capitalize"

	if (mode === WORD_HIGHLIGHT.COMPOUND) {
		const els = extractCompoundChars(word)
		updateElementCounts(els.length)
		return (
			<div className="flex justify-center">
				{extractCompoundChars(word).map((el, idx) =>
					<Link
						prefetch
						key={idx}
						href={`/char/${el}`}
						style={{ color: randomRgbColor() }}
						className={clsx(
							"hover:underline",
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

	if (mode === WORD_HIGHLIGHT.CHAR) {
		return (
			<div className="flex justify-center">
				{word.split("").map((letter, idx) =>
					<Link
						prefetch
						key={idx}
						href={`/char/${letter}`}
						style={{ color: randomRgbColor() }}
						className="hover:underline"
					>
						<Text value={letter} />
					</Link>
				)}
			</div>
		)
	}

	if (mode === WORD_HIGHLIGHT.NONE) {
		return (
			<div>
				<span style={{ color: randomRgbColor() }}>
					<Text value={word} />
				</span>
			</div>
		)
	}
}