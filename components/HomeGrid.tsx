"use client"

import { TSupportFont, fonts } from "@/app/fonts"
import { homeDestinations } from "@/data/settings"
import clsx from "clsx"
import Link from "next/link";
import { useReadLocalStorage } from "usehooks-ts";

export default function HomeGrid() {
	const selectedFont = useReadLocalStorage<TSupportFont>("selectedFont") ?? "inter";
	return (
		<div className="grid grid-cols-2 gap-3 md:gap-6">
			{
				homeDestinations.map(({ url, title }) => (
					<Link key={url} prefetch href={url} className="text-base font-bold text-center uppercase sm:text-lg md:text-2xl lg:text-4xl lg:px-8">
						<div className={clsx(
							"grid p-6 transition-all bg-white border-2 rounded-lg cursor-pointer md:border-4 place-content-center aspect-square hover:bg-indigo-100 hover:border-indigo-400 leading-loose",
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