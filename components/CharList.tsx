"use client"

import { TChar } from "@/data"
import Link from "next/link"
import Char from "./Char"

type CharListProps = {
	list: Array<TChar>,
	hasCompoundChar?: boolean,
}

export default function CharList({ list, hasCompoundChar }: CharListProps) {
	return (
		<>
			{list.map((letter, index) => (
				<Link prefetch key={letter.char} href={`/char/${letter.char}`}>
					<Char
						value={letter}
						standaloneChar={false}
						hasCompoundChar={hasCompoundChar}
					/>
				</Link >
			))
			}
		</>
	)
}