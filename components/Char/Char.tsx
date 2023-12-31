"use client"

import React from "react"
import clsx from "clsx"
import { TChar } from "@/data"
import { TWordCase } from "@/types"
import { caseFunctions, swapCaseFunctions } from "@/utils"
import { DEFAULT_SETTINGS, STRING_EMPTY } from "@/data/settings"
import { TSupportFont, fonts } from "@/app/fonts"
import { useReadLocalStorage } from "usehooks-ts"
import { useInit } from "@/hooks/useInit"
import { StandaloneChar } from "./StandaloneChar"
import { GridItemChar } from "./GridItemChar"

type CharProps = {
	value: TChar,
	hasCompoundChar?: boolean,
	standaloneChar?: boolean,
}

export function Char({
	value: { char, reading },
	standaloneChar = true
}: CharProps) {
	const init = useInit()
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
				: <GridItemChar char={formattedChar} init={init} />}
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

	if (!init) return null

	if (standaloneChar) {
		return (
			<div>
				{CharContent}
			</div>
		)
	}

	return <>{CharContent}</>
}