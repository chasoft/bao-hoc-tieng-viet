"use client"

import { ALPHABETS } from "@/data"
import Link from "next/link"

export default function CharNavigation() {
	return (
		<div className="flex flex-wrap justify-center gap-1">
			{ALPHABETS.map((letter) => (
				<div key={letter.char} className="aspect-square">
					<Link href={`/char/${letter.char}`} className="p-1 text-[2rem] rounded-full aspect-square hover:bg-gray-200">
						{letter.char.toUpperCase()}
					</Link>
				</div>
			))}
		</div>
	)
}