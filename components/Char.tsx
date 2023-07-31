"use client"

import React from "react"
import clsx from "clsx"
import { TChar } from "@/data"
import { TWordCase } from "@/types"
import { caseFunctions, swapCaseFunctions } from "@/utils"
import { useReadLocalStorage } from "usehooks-ts"

function StandaloneChar({ char }: { char: string }) {
	return (
		<div className="font-bold text-blue-900 text-[35vw] sm:text[50vw] md:text-[18rem] lg:text-[24rem] leading-none grid place-content-center">
			{char}
		</div>
	)
}

function GridItemChar({ char }: { char: string }) {
	return (
		<div className={clsx(
			{ "text-[25vw] sm:text-[28vw] ": char.length === 1 },
			{ "text-[25vw] sm:text-[28vw] ": char.length === 2 },
			{ "text-[20vw] sm:text-[20vw] ": char.length === 3 },
			"md:text-[6.5rem] lg:text-[6rem] font-bold text-blue-900 w-full text-center overflow-hidden leading-none",
			"grid place-content-center pb-6",
			{ "col-span-2": char.length > 2 }
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
	hasCompoundChar,
	standaloneChar = true
}: CharProps) {
	const caseIndex = useReadLocalStorage<TWordCase>("wordCaseToolbarIcons") ?? "capitalize"
	const formattedChar = caseFunctions[caseIndex](char)
	const swapFormattedSChar = swapCaseFunctions[caseIndex](char)
	const hasReading = char !== reading

	// TODO: làm hiệu ứng cho chữ cái, on-hover
	const CharContent = (
		<div className={clsx(
			"relative grid p-1 text-center transition-all border-2 border-black cursor-pointer hover:border-orange-800 rounded-lg sm:rounded-3xl hover:bg-orange-300 bg-slate-300 aspect-square"
		)}>
			{standaloneChar
				? <StandaloneChar char={formattedChar} />
				: <GridItemChar char={formattedChar} />}
			<div className={clsx(
				"absolute bottom-0 left-0 right-0 flex items-end px-2 pb-1 leading-none sm:pb-3 md:px-6 lg:px-3",
				{ "text-4xl sm:text-5xl md:text-6xl lg:text-8xl": standaloneChar },
				{ "text-2xl md:text-3xl": !standaloneChar }
			)}>
				<div className="font-semibold text-orange-900">
					{swapFormattedSChar}
				</div>
				<div className={clsx(
					"ml-auto",
					{ "md:text-4xl": reading.length > 5 }
				)}>
					{hasReading ? reading : ""}
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