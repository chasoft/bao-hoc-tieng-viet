"use client"

import React from "react"
import clsx from "clsx"
import { generateRandomWord } from "@/utils"
import { IconSkipNext } from "./Icons"
import { TWord, TWordCategory, WORD_CATEGORY } from "@/data"
import CountDownTimer from "./CountDownTimer"
import Word from "./Word"
import { CAT_SEPARATOR, COUNT_DOWN_NUMBER, urls } from "@/data/settings"
import { useParams } from "next/navigation"

function CategoryListContent() {
	const { categories } = useParams();
	const selectedCategories = categories && typeof categories === "string"
		? categories.split(CAT_SEPARATOR)
		: []

	return (
		<ul tabIndex={0} className="-translate-x-1 dropdown-content z-20 border-2 border-black p-0 menu bg-base-100 w-[100vw] sm:max-w-sm max-h-[82vh] overflow-y-auto flex-nowrap">
			{Object.entries(WORD_CATEGORY).map(([key, { title, desc }]) => {
				const isSelected = selectedCategories.includes(key)
				return (
					<li
						key={key}
						className={clsx(
							"relative border-gray-200 border-b-[1px]",
							{ "bg-gray-100": isSelected }
						)}
					>
						<a
							className="flex flex-col items-start rounded-none sm:py-3"
							href={urls.random.details([key])}
						>
							<span className="text-xl">
								{title}
							</span>
							{!!desc &&
								<span className="text-base italic leading-none text-slate-600">
									{desc}
								</span>}
						</a>
						<div className={clsx(
							"absolute right-0",
							{ "top-3": !!desc }
						)}>
							<div className="form-control">
								<label className="cursor-pointer label">
									<input type="checkbox" checked={isSelected} className="checkbox checkbox-sm" />
								</label>
							</div>
						</div>
					</li>
				)
			})}
		</ul>
	)
}

type RandomWordProps = {
	initWord: TWord,
	categories: TWordCategory[]
	className?: string
}

export default function RandomWord({ initWord, className, categories }: RandomWordProps) {
	const [randomWord, setRandomWord] = React.useState(initWord)

	const newRandomWord = () => setRandomWord(generateRandomWord(categories))
	const numberOfWords = randomWord.text.split(" ").length

	return (
		<div className="grid place-content-center mt-14">
			<CountDownTimer value={COUNT_DOWN_NUMBER} callback={newRandomWord} />
			<div className={clsx(
				className,
				{ "text-[28vw] lg:text-[25vw]": numberOfWords === 1 },
				{ "text-[18vw] xl:text-[16vw]": numberOfWords === 2 },
			)}>
				<Word word={randomWord.text} />
			</div>
			<div className="fixed bottom-0 left-0 right-0 flex justify-between bg-white border-2 border-t-black">
				<div className="dropdown dropdown-top">
					<label tabIndex={0}>
						<div
							className="flex items-center gap-2 px-6 py-4 text-lg border-0 border-r-2 border-black cursor-pointer hover:bg-slate-300 bg-slate-100 active:bg-slate-200"
						>
							Chủ đề
						</div>
					</label>
					<CategoryListContent />
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