import React from "react"
import RandomWord from "@/components/RandomWord"
import { generateRandomWord } from "@/utils"
import CountDownTimer from "@/components/CountDownTimer"

export default function RandomPage() {
	return (
		<>
			<CountDownTimer value={10} />
			<RandomWord
				init={generateRandomWord()}
				className="text-[50vw] md:text-[45vw] lg:text-[40vw] xl:text-[30vw]"
			/>
		</>
	)
}