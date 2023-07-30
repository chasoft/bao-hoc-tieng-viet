"use client"

import { TWord, WORDS } from "@/data";
import React from "react";
import Word from "./Word";

const generateRandomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)]

type RandomWordProps = {
	init: TWord
}

export default function RandomWord({ init }: RandomWordProps) {
	const [randomWord, setRandomWord] = React.useState(init);

	const newRandomWord = () => {
		setRandomWord(generateRandomWord());
	}

	return (
		<div className="">
			<div className="text-[20rem]">
				<Word word={randomWord.text} />
			</div>
			<button onClick={newRandomWord}>
				{"New Word >"}
			</button>
		</div>
	)
}