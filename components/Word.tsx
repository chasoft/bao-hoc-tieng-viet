"use client"

import Link from "next/link"
import React from "react"
import clsx from "clsx"
import { COMPOUND_VOWELS, WORD_COMPOSITION } from "@/data"
import { TWordCase } from "@/types"
import { caseFunctions, getStringArrayCharLength, randomRgbColor } from "@/utils"
import { displaySettings } from "@/data/settings"
import { useReadLocalStorage } from "usehooks-ts"
import { TSupportFont, fonts } from "@/app/fonts"

type WordProps = {
	word: string
}

function Text({ value, caseIndex }: { value: string, caseIndex?: TWordCase }) {
	const wordBold = useReadLocalStorage("wordBold") ?? displaySettings.wordBold
	const wordItalic = useReadLocalStorage("wordItalic") ?? displaySettings.wordItalic
	const selectedFont = useReadLocalStorage<TSupportFont>("selectedFont") ?? "inter";

	return (
		<span className={clsx(
			{ "font-bold": wordBold },
			{ "italic": wordItalic },
			fonts[selectedFont].className
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

export default function Word({ word }: WordProps) {
	const [mode, setMode] = React.useState(Math.floor(Math.random() * 2))
	const caseIndex = useReadLocalStorage<TWordCase>("wordCaseToolbarIcons") ?? "capitalize"

	if (mode === WORD_HIGHLIGHT.COMPOUND) {
		return (
			<div className="flex justify-center lg:pr-16">
				{extractCompoundChars(word).map((el, idx) =>
					<Link
						prefetch
						key={idx}
						href={`/char/${el}`}
						style={{ color: randomRgbColor() }}
						className="hover:underline"
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
			<div className="flex justify-center lg:pr-16">
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