import RandomWord from "@/components/RandomWord";
import { WORDS } from "@/data";
import React from "react";

const generateRandomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)]

export default function RandomPage() {
	return (
		<RandomWord
			init={generateRandomWord()}
			className="text-[50vw] md:text-[45vw] lg:text-[40vw] xl:text-[30vw]"
		/>
	)
}