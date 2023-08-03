"use client"

import React from "react"
import clsx from "clsx"
import { TChar } from "@/data"
import { TWordCase } from "@/types"
import { caseFunctions, swapCaseFunctions } from "@/utils"
import { DEFAULT_SETTINGS, STRING_EMPTY } from "@/data/settings"
import { TSupportFont, fonts } from "@/app/fonts"
import { useReadLocalStorage } from "usehooks-ts"

function StandaloneChar({ char }: { char: string }) {
	return (
		<div className="font-bold text-blue-900 text-[35vw] sm:text[50vw] md:text-[18rem] lg:text-[24rem]   leading-none grid place-content-center xl:text-[22rem] drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]">
			{char}
		</div>
	)
}

function GridItemChar({ char }: { char: string }) {
	const wordBold = useReadLocalStorage(DEFAULT_SETTINGS.wordBold.name)
		?? DEFAULT_SETTINGS.wordBold.value
	const wordItalic = useReadLocalStorage(DEFAULT_SETTINGS.wordItalic.name)
		?? DEFAULT_SETTINGS.wordItalic.value
	return (
		<div className={clsx(
			{ "text-[25vw] sm:text-[28vw] ": char.length === 1 },
			{ "text-[25vw] sm:text-[28vw] ": char.length === 2 },
			{ "text-[20vw] sm:text-[20vw] ": char.length === 3 },
			{ "text-[20vw] sm:text-[20vw] ": char.length === 3 },
			{ "font-bold": wordBold },
			{ "italic": wordItalic },
			"md:text-[6.5rem] lg:text-[6rem] text-blue-900 w-full text-center overflow-hidden leading-none",
			"grid place-content-center pb-6",
			{ "col-span-2": char.length > 2 },
			"drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]"
		)}>
			{char}
		</div>
	)
}

type CharProps = {
	value: TChar,
	hasCompoundChar?: boolean,
	standaloneChar?: boolean,
}

export default function Char({
	value: { char, reading },
	standaloneChar = true
}: CharProps) {
	const caseIndex = useReadLocalStorage<TWordCase>(DEFAULT_SETTINGS.wordCase.name)
		?? DEFAULT_SETTINGS.wordCase.value
	const selectedFont = useReadLocalStorage<TSupportFont>(DEFAULT_SETTINGS.fontFamily.name)
		?? DEFAULT_SETTINGS.fontFamily.value

	const formattedChar = caseFunctions[caseIndex](char)
	const swapFormattedSChar = swapCaseFunctions[caseIndex](char)
	const hasReading = char !== reading

	const CharContent = (
		<div className={clsx(
			"relative grid p-1 text-center transition-all border-2 border-black cursor-pointer hover:border-orange-800 rounded-lg sm:rounded-3xl hover:bg-orange-300 bg-slate-300 aspect-square",
			fonts[selectedFont].className
		)}>
			{standaloneChar
				? <StandaloneChar char={formattedChar} />
				: <GridItemChar char={formattedChar} />}
			<div className={clsx(
				"absolute bottom-0 left-0 right-0 flex items-end px-2 pb-1 leading-none sm:pb-3 md:px-6 lg:px-3",
				{ "text-4xl sm:text-5xl md:text-6xl lg:text-8xl": standaloneChar },
				{ "text-2xl md:text-3xl": !standaloneChar }
			)}>
				<div className="font-semibold text-orange-900 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
					{swapFormattedSChar}
				</div>
				<div className={clsx(
					"ml-auto",
					{ "md:text-3xl": reading.length > 5 }
				)}>
					{hasReading ? reading : STRING_EMPTY}
				</div>
			</div>
		</div >
	)

	if (standaloneChar) {
		return (
			<div>
				{CharContent}
			</div>
		)
	}

	return <>{CharContent}</>
}