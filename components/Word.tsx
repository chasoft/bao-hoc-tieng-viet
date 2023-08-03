"use client"

import Link from "next/link"
import React from "react"
import clsx from "clsx"
import { useReadLocalStorage } from "usehooks-ts"
import { caseFunctions, extractCompoundChars, randomRgbColor } from "@/utils"
import { DEFAULT_SETTINGS, STRING_EMPTY, STRING_SPACE, WORD_HIGHLIGHT, urls } from "@/data/settings"
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

type WordProps = {
	word: string
	splitterMode: number
	separatedElements: string[]
	setSeparatedElements: (els: string[]) => void
	currentIndex: number,
}

export default function Word({
	word,
	splitterMode,
	separatedElements,
	setSeparatedElements,
	currentIndex
}: WordProps) {
	const caseIndex = useReadLocalStorage<TWordCase>(DEFAULT_SETTINGS.wordCase.name)
		?? DEFAULT_SETTINGS.wordCase.value

	const colorPalete = React.useMemo<string[]>(() =>
		Array.from(Array(6), () => randomRgbColor()
			// only rebuild the color palette only if the word has changed
			// eslint-disable-next-line react-hooks/exhaustive-deps
		), [word])

	React.useEffect(() => {
		switch (splitterMode) {
			case WORD_HIGHLIGHT.COMPOUND:
				setSeparatedElements(extractCompoundChars(word))
				break;
			case WORD_HIGHLIGHT.CHAR:
				setSeparatedElements(word.split(STRING_EMPTY))
				break;
			case WORD_HIGHLIGHT.COMPOUND:
				setSeparatedElements(word.split(STRING_SPACE))
				break;
			default:
				break;
		}
	}, [setSeparatedElements, splitterMode, word])

	if (splitterMode === WORD_HIGHLIGHT.COMPOUND) {
		return (
			<div className="flex justify-center">
				{separatedElements.map((el, idx) =>
					<Link
						prefetch
						key={idx}
						href={urls.char.details(el)}
						style={{ color: colorPalete[idx] }}
						className={clsx(
							{ "hover:underline": separatedElements[idx] !== STRING_SPACE },
							{ "underline underline-offset-8": currentIndex === idx && separatedElements[idx] !== STRING_SPACE },
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
		return (
			<div className="flex justify-center">
				{separatedElements.map((letter, idx) =>
					<Link
						prefetch
						key={idx}
						href={urls.char.details(letter)}
						style={{ color: colorPalete[idx] }}
						className={clsx(
							{ "hover:underline": separatedElements[idx] !== STRING_SPACE },
							{ "underline": currentIndex === idx && separatedElements[idx] !== STRING_SPACE },
						)}
					>
						<Text value={letter} />
					</Link>
				)}
			</div>
		)
	}

	if (splitterMode === WORD_HIGHLIGHT.NONE) {
		return (
			<div className="flex justify-center">
				{separatedElements.map((letter, idx) =>
					<Link
						prefetch
						key={idx}
						href={urls.char.details(letter)}
						style={{ color: colorPalete[idx] }}
						className={clsx(
							{ "hover:underline": separatedElements[idx] !== STRING_SPACE },
							{ "underline": currentIndex === idx && separatedElements[idx] !== STRING_SPACE },
						)}
					>
						<Text value={letter} />
					</Link>
				)}
			</div>
		)
	}
}