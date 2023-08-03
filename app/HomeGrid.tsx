"use client"

import { TSupportFont, fonts } from "@/app/fonts"
import { DEFAULT_SETTINGS, homeDestinations } from "@/data/settings"
import clsx from "clsx"
import Link from "next/link";
import { useReadLocalStorage } from "usehooks-ts";

//TODO: Fix design of HomeGrid
export default function HomeGrid() {
	const selectedFont = useReadLocalStorage<TSupportFont>(DEFAULT_SETTINGS.fontFamily.name)
		?? DEFAULT_SETTINGS.fontFamily.value
	return (
		<div className="grid max-w-3xl grid-cols-2 gap-4 mx-auto lg:gap-8">
			{
				homeDestinations.map(({ url, title }) => (
					<Link key={url} prefetch href={url} className="text-base font-bold text-center uppercase sm:text-lg md:text-2xl lg:text-4xl">
						<div className={clsx(
							"grid p-6 transition-all border-2 rounded-lg cursor-pointer md:border-4 place-content-center aspect-square hover:bg-indigo-200 hover:border-indigo-400 leading-loose bg-slate-100",
							fonts[selectedFont].className
						)}>
							{title}
						</div>
					</Link>
				))
			}
		</div>
	)
}