
"use client"

import React from "react"
import clsx from "clsx"
import { useReadLocalStorage } from "usehooks-ts"
import { DEFAULT_SETTINGS } from "@/data/settings"
import { TSupportFont, fonts } from "@/app/fonts"

export function Text({ value }: { value: string }) {
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