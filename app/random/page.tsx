import RandomWord from "@/components/RandomWord";
import { WORDS } from "@/data";
import React from "react";

const generateRandomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)]

export default function RandomPage() {
	return (
		<RandomWord init={generateRandomWord()} />
	)
}