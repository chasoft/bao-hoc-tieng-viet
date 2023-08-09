"use client"

import Link from "next/link"
import React from "react"
import clsx from "clsx"
import { useReadLocalStorage } from "usehooks-ts"
import { convertWordCase, extractByCompoundChars, extractByWords, randomRgbColor } from "@/utils"
import { DEFAULT_SETTINGS, STRING_EMPTY, STRING_SPACE, urls, TSplitMode } from "@/data/settings"
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
			"whitespace-break-spaces leading-none",
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
	splitMode: TSplitMode
	separatedElements: string[]
	setSeparatedElements: (els: string[]) => void
	currentIndex: number,
}

export default function Word({
	wordText,
	defaultWordCase,
	splitMode,
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
		if (defaultWordCase === "default") {
			// splitMode, when wordCase is default, is `CHAR` 
			setSeparatedElements(convertWordCase(wordText.split(STRING_EMPTY), "default"))
			return
		}
		switch (splitMode) {
			case "COMPOUND":
				setSeparatedElements(convertWordCase(extractByCompoundChars(wordText), defaultWordCase ?? wordCase))
				break;
			case "CHAR":
				setSeparatedElements(convertWordCase(wordText.split(STRING_EMPTY), defaultWordCase ?? wordCase))
				break;
			case "NONE":
				setSeparatedElements(convertWordCase(extractByWords(wordText), defaultWordCase ?? wordCase))
				break;
			default:
				break;
		}
	}, [wordCase, setSeparatedElements, splitMode, wordText, defaultWordCase])

	if (splitMode === "COMPOUND") {
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

	if (splitMode === "CHAR") {
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

	if (splitMode === "NONE") {
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

	return (
		<div className="flex justify-center">
			{separatedElements.map((el, idx) =>
				<div
					key={idx}
					style={{ color: colorPalete[idx] }}
					className={clsx(
						{ "hover:underline": separatedElements[idx] !== STRING_SPACE },
						{ "underline": currentIndex === idx && separatedElements[idx] !== STRING_SPACE },
					)}
				>
					<Text value={el} />
				</div>
			)}
		</div>
	)
}