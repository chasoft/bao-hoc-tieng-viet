"use client"

import { TWord, WORDS } from "@/data"
import React from "react"
import Word from "./Word"
import clsx from "clsx"

const generateRandomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)]

type RandomWordProps = {
	init: TWord,
	className?: string
}

export default function RandomWord({ init, className }: RandomWordProps) {
	const [randomWord, setRandomWord] = React.useState(init)

	const newRandomWord = () => {
		setRandomWord(generateRandomWord())
	}

	// TODO: Count down to auto generate word.

	return (
		<div className="mx-auto">
			<div className={clsx(className)}>
				<Word word={randomWord.text} />
			</div>
			<button onClick={newRandomWord} className="px-4 py-2 mt-8 border rounded-lg hover:bg-slate-300 bg-slate-100 border-slate-700">
				{"New Word >"}
			</button>
		</div>
	)
}