import React from "react"
import RandomWord from "@/components/RandomWord"
import { generateRandomWord } from "@/utils"

export default function RandomPage() {
	return (
		<RandomWord init={generateRandomWord()} />
	)
}