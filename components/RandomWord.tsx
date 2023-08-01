"use client"

import React from "react"
import clsx from "clsx"
import Word from "./Word"
import { TWord, WORDS } from "@/data"
import { IconSkipNext } from "./Icons"
import CountDownTimer from "./CountDownTimer"

const generateRandomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)]

type RandomWordProps = {
	init: TWord,
	className?: string
}

export default function RandomWord({ init, className }: RandomWordProps) {
	const [randomWord, setRandomWord] = React.useState(init)

	const newRandomWord = () => setRandomWord(generateRandomWord())
	const numberOfWords = randomWord.text.split(" ").length

	return (
		<div className="grid place-content-center mt-14">
			<CountDownTimer value={10} callback={newRandomWord} />
			<div className={clsx(
				className,
				{ "text-[28vw] lg:text-[25vw]": numberOfWords === 1 },
				{ "text-[18vw] xl:text-[16vw]": numberOfWords === 2 },
			)}>
				<Word word={randomWord.text} />
			</div>
			<div className="fixed bottom-0 left-0 right-0 flex justify-between bg-white border-2 border-t-black">
				<div
					className="flex items-center gap-2 px-6 py-4 text-lg border-0 border-r-2 border-black cursor-pointer hover:bg-slate-300 bg-slate-100 active:bg-slate-200"
				>
					Chủ đề
				</div>
				<div
					onClick={newRandomWord}
					className="flex items-center gap-2 px-4 py-4 text-lg border-0 border-l-2 border-black cursor-pointer hover:bg-slate-300 bg-slate-100 active:bg-slate-200"
				>
					Từ khác <IconSkipNext className="w-6 h-6" />
				</div>
			</div>
		</div>
	)
}