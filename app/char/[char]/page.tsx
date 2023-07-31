import Char from "@/components/Char"
import CharNavigation from "@/components/CharNavigation"
import { findCharData } from "@/utils"

export default function CharPage({ params: { char } }: { params: { char: string } }) {
	const charData = findCharData(char)

	if (!charData) {
		throw new Error(`Char ${decodeURIComponent(char)} does not exist`)
	}

	return (
		<>
			<Char value={charData} />
			<CharNavigation />
		</>
	)
}