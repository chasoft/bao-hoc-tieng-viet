"use client"

import { TChar } from "@/data"
import Link from "next/link"
import Char from "./Char"
import { urls } from "@/data/settings"

type CharListProps = {
	list: Array<TChar>,
	hasCompoundChar?: boolean,
}

export default function CharList({ list, hasCompoundChar }: CharListProps) {
	return (
		<>
			{list.map((letter, index) => (
				<Link key={letter.char} href={urls.char.details(letter.char)}>
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