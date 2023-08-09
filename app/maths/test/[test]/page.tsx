import RandomWord from "@/components/RandomWord";
import { CAT_SEPARATOR } from "@/data/settings";
import { generateRandomWord, getWordsFromCategories, validCategoryFilter } from "@/utils";

/**
 * [categories] supports multiple categories by separating them with + (plus)
 * eg:
 * 	- /animal
 * 	- /animal+country
 * 	- /country+capital+machine
 */

export default function MathsTestPage({ params: { categories } }: { params: { categories: string } }) {
	const requestCategories = decodeURIComponent(categories).split(CAT_SEPARATOR)
	const validCategories = validCategoryFilter(requestCategories)

	if (validCategories.length === 0) {
		throw new Error(`Tất cả chủ đề "${requestCategories.toString()}" đều không tồn tại.`)
	}

	const wordList = getWordsFromCategories(validCategories)

	if (wordList.length === 0) {
		throw new Error(`Chưa có dữ liệu cho chủ đề "${requestCategories.toString()}".`)
	}

	return (
		<RandomWord
			initWord={generateRandomWord(wordList)}
		/>
	)
}