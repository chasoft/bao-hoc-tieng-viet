"use client"

import { TChar } from "@/data"
import clsx from "clsx"
import Link from "next/link"

type CharListProps = {
	list: Array<TChar>,
	hasCompoundChar?: boolean,
}

export default function CharList({ list, hasCompoundChar }: CharListProps) {
	return (
		<>
			{list.map((letter, index) => (
				<div key={letter.char} className={clsx("grid p-6 overflow-hidden transition-all border-4 border-black cursor-pointer hover:border-orange-800 rounded-2xl hover:bg-orange-300 bg-slate-300", letter.char.length > 2 ? "col-span-2" : "aspect-square")}>
					<Link href={`/char/${letter.char}`} >
						<div className={clsx(hasCompoundChar ? "text-[6.5rem]" : "text-[8rem]", "leading-none font-bold text-blue-900 w-full text-center rounded-2xl")}>
							{letter.char.toUpperCase()}
						</div>
						<div className="flex items-end">
							<div className="text-2xl font-semibold text-orange-900 md:text-3xl lg:text-4xl">{letter.char}</div>
							<div className="ml-auto text-xl">{letter.reading}</div>
						</div>
					</Link>
				</div>
			))}
		</>
	)
}