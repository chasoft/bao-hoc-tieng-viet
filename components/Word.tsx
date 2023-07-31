"use client"

import { COMPOUND_CONSONANTS, COMPOUND_VOWELS, CONSONANTS, VOWELS } from "@/data"
import Link from "next/link"
import React from "react"

type WordProps = {
	word: string
}

/**
 * mode 1: no highlighting
 * mode 2: highlighting compound vowels and consonants
 * mode 3: highlighting each character in the word
 */

const random256 = () => Math.floor(Math.random() * 256)
const randomRgbColor = () => `rgb(${random256()}, ${random256()}, ${random256()})`
const getSumLength = (arr: Array<string>): number =>
	arr.reduce((acc, cur) => acc + cur.length, 0)

export default function Word({ word }: WordProps) {
	const [mod, setMod] = React.useState(Math.floor(Math.random() * 2))
	switch (mod) {
		case 0:
			const elements: Array<string> = []

			COMPOUND_VOWELS.map(({ char }) => char).every(i => {
				if (word.startsWith(i)) {
					elements.push(i)
					return false
				}
				return true
			})

			getSumLength(elements) < word.length &&
				VOWELS.every(i => {
					if (word.slice(getSumLength(elements)).startsWith(i)) {
						elements.push(i)
						return false
					}
					return true
				})

			getSumLength(elements) < word.length &&
				CONSONANTS.every(i => {
					if (word.slice(getSumLength(elements)).startsWith(i)) {
						elements.push(i)
						return false
					}
					return true
				})

			getSumLength(elements) < word.length &&
				COMPOUND_CONSONANTS.every(i => {
					if (word.slice(getSumLength(elements)).startsWith(i)) {
						elements.push(i)
						return false
					}
					return true
				})

			getSumLength(elements) < word.length &&
				CONSONANTS.every(i => {
					if (word.slice(getSumLength(elements)).startsWith(i)) {
						elements.push(i)
						return false
					}
					return true
				})

			getSumLength(elements) < word.length &&
				COMPOUND_VOWELS.map(({ char }) => char).every(i => {
					if (word.slice(getSumLength(elements)).startsWith(i)) {
						elements.push(i)
						return false
					}
					return true
				})

			getSumLength(elements) < word.length &&
				VOWELS.every(i => {
					if (word.slice(getSumLength(elements)).startsWith(i)) {
						elements.push(i)
						return false
					}
					return true
				})

			return (
				<div className="flex justify-center">
					{elements.map((el, idx) =>
						<Link
							prefetch
							key={idx}
							href={`/char/${el}`}
							style={{ color: randomRgbColor() }}
							className="leading-none hover:underline"
						>
							{el}
						</Link>
					)}
				</div>
			)
		case 1:
			return (
				<div className="flex justify-center">
					{word.split("").map((char, idx) =>
						<Link
							prefetch
							key={idx}
							href={`/char/${char}`}
							style={{ color: randomRgbColor() }}
							className="leading-none hover:underline"
						>
							{char}
						</Link>
					)}
				</div>
			)
		default:
			return <div><span>{word}</span></div>
	}
}