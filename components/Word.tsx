"use client"

import Link from "next/link"
import React from "react"
import clsx from "clsx"
import { useReadLocalStorage } from "usehooks-ts"
import { convertWordCase, extractByCompoundChars, extractByWords, randomRgbColor } from "@/utils"
import { DEFAULT_SETTINGS, STRING_EMPTY, STRING_SPACE, SPLIT_MODE, urls } from "@/data/settings"
import { TSupportFont, fonts } from "@/app/fonts"
import { TWordCase } from "@/types"

function Text({ value }: { value: string }) {
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
			{value}
		</span>
	)
}

type WordProps = {
	wordText: string
	defaultWordCase?: TWordCase
	splitterMode: number
	separatedElements: string[]
	setSeparatedElements: (els: string[]) => void
	currentIndex: number,
}

export default function Word({
	wordText,
	defaultWordCase,
	splitterMode,
	separatedElements,
	setSeparatedElements,
	currentIndex
}: WordProps) {
	const wordCase = useReadLocalStorage<TWordCase>(DEFAULT_SETTINGS.wordCase.name)
		?? DEFAULT_SETTINGS.wordCase.value

	const colorPalete = React.useMemo<string[]>(() =>
		Array.from(Array(6), () => randomRgbColor()
			// only rebuild the color palette only if the word has changed
			// eslint-disable-next-line react-hooks/exhaustive-deps
		), [wordText])

	React.useEffect(() => {
		switch (splitterMode) {
			case SPLIT_MODE.COMPOUND:
				setSeparatedElements(convertWordCase(extractByCompoundChars(wordText), defaultWordCase ?? wordCase))
				break;
			case SPLIT_MODE.CHAR:
				setSeparatedElements(wordText.split(STRING_EMPTY))
				break;
			case SPLIT_MODE.NONE:
				setSeparatedElements(extractByWords(wordText))
				break;
			default:
				break;
		}
	}, [wordCase, setSeparatedElements, splitterMode, wordText])

	if (splitterMode === SPLIT_MODE.COMPOUND) {
		return (
			<div className="flex justify-center">
				{separatedElements.map((el, idx) =>
					<Link
						key={idx}
						href={urls.char.details(el)}
						style={{ color: colorPalete[idx] }}
						className={clsx(
							{ "hover:underline": separatedElements[idx] !== STRING_SPACE },
							{ "underline underline-offset-8": currentIndex === idx && separatedElements[idx] !== STRING_SPACE },
						)}
					>
						<Text value={el} />
					</Link>
				)}
			</div>
		)
	}

	if (splitterMode === SPLIT_MODE.CHAR) {
		return (
			<div className="flex justify-center">
				{separatedElements.map((el, idx) =>
					<Link
						key={idx}
						href={urls.char.details(el)}
						style={{ color: colorPalete[idx] }}
						className={clsx(
							{ "hover:underline hover:underline-offset-[0.25em]": separatedElements[idx] !== STRING_SPACE },
							{ "underline underline-offset-[0.25em]": currentIndex === idx && separatedElements[idx] !== STRING_SPACE },
						)}
					>
						<Text value={el} />
					</Link>
				)}
			</div>
		)
	}

	if (splitterMode === SPLIT_MODE.NONE) {
		return (
			<div className="flex justify-center">
				{separatedElements.map((el, idx) =>
					<Link
						key={idx}
						href={urls.char.details(el)}
						style={{ color: colorPalete[idx] }}
						className={clsx(
							{ "hover:underline": separatedElements[idx] !== STRING_SPACE },
							{ "underline": currentIndex === idx && separatedElements[idx] !== STRING_SPACE },
						)}
					>
						<Text value={el} />
					</Link>
				)}
			</div>
		)
	}
}