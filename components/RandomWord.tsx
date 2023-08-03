"use client"

import React from "react"
import clsx from "clsx"
import { CAT_SEPARATOR, DEFAULT_SETTINGS, urls } from "@/data/settings"
import { generateRandomWord, validCategoryFilter } from "@/utils"
import { IconCheck, IconHandPointUp, IconSkipNext } from "./Icons"
import { TWord, TWordCategory, WORD_CATEGORY } from "@/data"
import { useParams, useRouter } from "next/navigation"
import CountDownTimer from "./CountDownTimer"
import Word from "./Word"
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts"

type CategoryListContentProps = {
	selectedCategories: selectedCategoriesType
	onClickCheckbox: (cat: TWordCategory) => void,
}

function CategoryListContent({ selectedCategories, onClickCheckbox }: CategoryListContentProps) {
	return (
		<ul tabIndex={0} className="dropdown-content z-20 border-2 border-black p-0 menu bg-base-100 w-[99vw] sm:max-w-sm max-h-[80vh] md:max-h-[82vh] overflow-y-auto flex-nowrap">
			{(Object.entries(WORD_CATEGORY) as [TWordCategory, { title: string, desc: string }][])
				.map(([key, { title, desc }]) => {
					return (
						<li
							key={key}
							className={clsx(
								"relative border-gray-200 border-b-[1px]",
								{ "bg-gray-100": selectedCategories[key] }
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
										<input
											type="checkbox"
											checked={selectedCategories[key]}
											className="checkbox checkbox-sm"
											onChange={() => { onClickCheckbox(key) }}
										/>
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
	className?: string
}

type selectedCategoriesType = Partial<Record<TWordCategory, boolean>>

export default function RandomWord({ initWord, className }: RandomWordProps) {
	const router = useRouter()
	const { categories } = useParams();
	const validCategories = validCategoryFilter(
		typeof categories === "string" ? decodeURIComponent(categories).split(CAT_SEPARATOR) : []
	)
	const [randomWord, setRandomWord] = React.useState(initWord)
	const [showApplyCategoryButton, setShowApplyCategoryButton] = React.useState(false)
	const [selectedCategories, setSelectedCategories] =
		React.useState<selectedCategoriesType>(() =>
			validCategories.reduce<selectedCategoriesType>((acc, category) => {
				acc[category] = true
				return acc
			}, {})
		)

	const splitterMode = useReadLocalStorage<number>(DEFAULT_SETTINGS.characterSplitterMode.name) ?? DEFAULT_SETTINGS.characterSplitterMode.value

	const [totalWordElements, setTotalWordElements] = React.useState(0)
	const [highlightElementIndex, setHighlightElementIndex] = React.useState(0)

	const nextHighlightElementIndex = React.useCallback(() => {
		if (highlightElementIndex >= totalWordElements - 1) {
			setHighlightElementIndex(-1)
		} else {
			setHighlightElementIndex(highlightElementIndex + 1)
		}
	}, [highlightElementIndex, totalWordElements])

	const newRandomWord = () => setRandomWord(generateRandomWord(validCategories))
	const numberOfWords = randomWord.text.split(" ").length

	const applyButtonClicked = () => {
		const cats = Object
			.entries(selectedCategories)
			.reduce<TWordCategory[]>((acc, [key, isChecked]) => {
				if (isChecked) { acc.push(key as TWordCategory) }
				return acc
			}, [])

		if (cats.length > 0) {
			router.push(urls.random.details(cats))
		}
	}

	const selectWordCategory = React.useCallback((category: TWordCategory) => {
		setSelectedCategories(selectedCategories => ({
			...selectedCategories,
			[category]: !selectedCategories[category]
		}))
		setShowApplyCategoryButton(true)
	}, [])

	return (
		<div className="grid place-content-center mt-14">
			<div
				className="fixed left-2 bottom-20 lg:hidden"
				onClick={nextHighlightElementIndex}
			>
				<span className="grid p-10 font-bold transition-all rounded-full cursor-pointer bg-slate-300 active:bg-slate-500 hover:bg-slate-400 active:rotate-12 aspect-square place-content-center">
					<IconHandPointUp className="w-10 h-10" />
				</span>
			</div>
			<CountDownTimer
				value={DEFAULT_SETTINGS.countDownNumber.value}
				callback={newRandomWord}
			/>
			<div className={clsx(
				className,
				{ "text-[28vw] lg:text-[25vw]": numberOfWords === 1 },
				{ "text-[18vw] xl:text-[16vw]": numberOfWords === 2 },
			)}>
				<Word
					word={randomWord.text}
					splitterMode={splitterMode}
					updateElementCounts={setTotalWordElements}
					currentIndex={highlightElementIndex}
				/>
			</div>
			<div className="fixed bottom-0 left-0 right-0 flex justify-between bg-white border-2 border-t-black">
				<div className="dropdown dropdown-top">
					<label tabIndex={0}>
						<div
							className="flex w-[135px] justify-center items-center gap-2 px-6 py-4 text-lg border-0 border-r-2 border-black cursor-pointer hover:bg-slate-300 bg-slate-100 active:bg-slate-200"
						>
							Chủ đề
						</div>
					</label>
					<CategoryListContent
						selectedCategories={selectedCategories}
						onClickCheckbox={selectWordCategory}
					/>
				</div>
				<div
					className={clsx(
						"flex w-[135px] bg-blue-500 text-white items-center justify-center flex-1 cursor-pointer sm:flex-none sm:px-6 hover:bg-blue-600 active:bg-blue-700 sm:border-r-2 border-r-black",
						{ "hidden": !showApplyCategoryButton }
					)}
					onClick={applyButtonClicked}
				>
					<IconCheck className="w-8 h-8" /><span>Apply</span>
				</div>
				<div className="flex-1 hidden opacity-0 sm:block"></div>
				<div
					onClick={newRandomWord}
					className="flex w-[135px] items-center gap-1 px-4 py-4 text-lg border-0 border-l-2 border-black cursor-pointer hover:bg-slate-300 bg-slate-100 active:bg-slate-200 active:pl-5 pl-4 transition-all"
				>
					Từ khác <IconSkipNext className="w-6 h-6" />
				</div>
			</div>
		</div>
	)
}