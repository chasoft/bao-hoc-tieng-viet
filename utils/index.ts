import { WORD_CATEGORY } from './../data/index';
/**
 * Utils functions
 */

import { ALPHABETS_EXTENDED, TWordCategory, TWordDataItem, WORDS } from "@/data"
import { TWordCase } from "@/types"

export const cloneObj = <T>(obj:T): T => JSON.parse(JSON.stringify(obj)) as T;

export const uppercaseFirstLetter = (str: string): string =>
	str.charAt(0).toUpperCase() + str.slice(1)

export const uppercaseFirstLetterEachWord = (str: string): string =>
	str.split(" ").map(uppercaseFirstLetter).join(" ")

export const generateRandomWord = (categories: TWordCategory[]) => {
	// TODO: return random word based on "categories"
	return WORDS[Math.floor(Math.random() * WORDS.length)]
}

export const findCharData = (char: string,) =>
	ALPHABETS_EXTENDED.find(letter => letter.char === decodeURIComponent(char))

export const caseFunctions: Record<TWordCase, Function> = {
	"lowercase": (str: string) => str.toLowerCase(),
	"uppercase": (str: string) => str.toUpperCase(),
	"capitalize": uppercaseFirstLetter,
}

export const swapCaseFunctions: Record<TWordCase, Function> = {
	"uppercase": (str: string) => str.toLowerCase(),
	"lowercase": (str: string) => str.toUpperCase(),
	"capitalize": (str: string) => str.toLowerCase(),
}

export const randomInt = (max: number) => Math.floor(Math.random() * max)
export const randomRgbColor = () => `rgb(${randomInt(256)},${randomInt(256)},${randomInt(256)})`
export const getStringArrayCharLength = (arr: Array<string>): number =>
	arr.reduce((acc, cur) => acc + cur.length, 0)

export const getWordCategoryList = (data: TWordDataItem[]): TWordCategory[] => {
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


