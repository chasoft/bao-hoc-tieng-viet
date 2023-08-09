import { WORDS_ALL, COMPOUND_VOWELS, WORD_CATEGORY, WORD_COMPOSITION } from './../data/index';
/**
 * Utils functions
 */

import { ALPHABETS_EXTENDED, TWordCategory, TWord } from "@/data"
import { STRING_SPACE } from '@/data/settings';
import { TWordCase } from "@/types"

export const cloneObj = <T>(obj: T): T => JSON.parse(JSON.stringify(obj)) as T;

export const uppercaseFirstLetter = (str: string): string =>
	str.charAt(0).toUpperCase() + str.slice(1)

export const uppercaseFirstLetterEachWord = (str: string): string => {
	return str.split(STRING_SPACE).map(uppercaseFirstLetter).join(STRING_SPACE)
}

export const getWordsFromCategories = (categories: TWordCategory[]): TWord[] =>
	WORDS_ALL.filter(
		word => categories.some(requestedCat => word.cat.includes(requestedCat))
	)

export const generateRandomWord = (words: TWord[]): TWord =>
	words[Math.floor(Math.random() * words.length)]

export const findCharData = (char: string,) =>
	ALPHABETS_EXTENDED.find(letter => letter.char === decodeURIComponent(char).toLowerCase())

export const caseFunctions: Record<TWordCase, Function> = {
	"lowercase": (str: string) => str.toLowerCase(),
	"uppercase": (str: string) => str.toUpperCase(),
	"capitalize": uppercaseFirstLetterEachWord,
	"default": (str: string) => str,
}

export const swapCaseFunctions: Record<TWordCase, Function> = {
	"uppercase": (str: string) => str.toLowerCase(),
	"lowercase": (str: string) => str.toUpperCase(),
	"capitalize": (str: string) => str.toLowerCase(),
	"default": (str: string) => str,
}

export const randomInt = (max: number) => Math.floor(Math.random() * max)
export const randomRgbColor = () => `rgb(${randomInt(256)},${randomInt(256)},${randomInt(256)})`
export const getStringArrayCharLength = (arr: Array<string>): number =>
	arr.reduce((acc, cur) => acc + cur.length, 0)

export const getWordCategoryList = (data: TWord[]): TWordCategory[] => {
	// TODO: implement this function to get all word's categories
	return []
}

export const validCategoryFilter = (rawCategories: string[]): TWordCategory[] =>
	(rawCategories as TWordCategory[]).reduce<TWordCategory[]>((validCats, cat) => {
		if (WORD_CATEGORY[cat as TWordCategory]) {
			validCats.push(cat)
		}
		return validCats
	}, [])

export function extractByCompoundChars(rawStr: string): string[] {
	const strArr = rawStr.split(STRING_SPACE)
	const extractedElements: string[] = []

	strArr.forEach((str, idx) => {
		const itemElements: string[] = []

		COMPOUND_VOWELS.map(({ char }) => char).every(i => {
			if (str.startsWith(i)) {
				itemElements.push(i)
				return false
			}
			return true
		})

		WORD_COMPOSITION.forEach((COMPOUND) => {
			if (getStringArrayCharLength(itemElements) >= str.length) return

			COMPOUND.every(i => {
				if (str.slice(getStringArrayCharLength(itemElements)).startsWith(i)) {
					itemElements.push(i)
					return false
				}
				return true
			})
		})

		if (idx < strArr.length - 1) {
			itemElements.push(STRING_SPACE)
		}

		for (const element of itemElements) {
			extractedElements.push(element);
		}
	})
	return extractedElements
}

export function extractByWords(rawStr: string): string[] {
	const strArr = rawStr.split(STRING_SPACE)
	const extractedElements: string[] = []

	strArr.forEach((element, idx) => {
		extractedElements.push(element)
		if (idx < strArr.length - 1) {
			extractedElements.push(STRING_SPACE)
		}
	})

	return extractedElements
}

export function convertWordCase(extractedElements: string[], wordCase: TWordCase): string[] {
	switch (wordCase) {
		case "capitalize":
			extractedElements[0] = extractedElements[0][0].toUpperCase() + extractedElements[0].slice(1)

			for (let idx = 1; idx < extractedElements.length - 1; idx++) {
				if (extractedElements[idx] === STRING_SPACE && idx + 1 <= extractedElements.length - 1) {
					extractedElements[idx + 1] =
						extractedElements[idx + 1][0].toUpperCase() + extractedElements[idx + 1].slice(1)
				}
			}

			return extractedElements
			break;
		case "uppercase":
			return extractedElements.map(el => el.toUpperCase());
		case "lowercase":
			return extractedElements.map(el => el.toLowerCase());
		default:
			return extractedElements
	}
}