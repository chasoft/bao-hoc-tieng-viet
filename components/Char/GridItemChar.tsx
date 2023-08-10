
"use client"

import React from "react"
import clsx from "clsx"
import { DEFAULT_SETTINGS } from "@/data/settings"
import { useReadLocalStorage } from "usehooks-ts"

export function GridItemChar({ char, init }: { char: string, init: boolean }) {
	const wordBold = useReadLocalStorage(DEFAULT_SETTINGS.wordBold.name)
		?? DEFAULT_SETTINGS.wordBold.value
	const wordItalic = useReadLocalStorage(DEFAULT_SETTINGS.wordItalic.name)
		?? DEFAULT_SETTINGS.wordItalic.value

	// TODO: Create template to replace `null`
	if (!init) return null

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