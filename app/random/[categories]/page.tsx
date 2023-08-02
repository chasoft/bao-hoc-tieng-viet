import RandomWord from "@/components/RandomWord";
import { CAT_SEPARATOR } from "@/data/settings";
import { generateRandomWord, validCategoryFilter } from "@/utils";

/**
 * [categories] supports multiple categories by separating them with + (plus)
 * eg:
 * 	- /animal
 * 	- /animal+country
 * 	- /country+capital+machine
 */

export default function RandomCategoryPage({ params: { categories } }: { params: { categories: string } }) {
	const requestCategories = decodeURIComponent(categories).split(CAT_SEPARATOR)
	const validCategories = validCategoryFilter(requestCategories)

	if (validCategories.length === 0) {
		throw new Error(`Tất cả chủ đề "${requestCategories.toString()}" đều không tồn tại.`)
	}

	return (
		<RandomWord initWord={generateRandomWord(validCategories)} />
	)
}