import Char from "@/components/Char";
import CharNavigation from "@/components/CharNavigation";
import { ALPHABETS_EXTENDED } from "@/data";

export default function CharPage({ params: { char } }: { params: { char: string } }) {
	const requestedChar = decodeURIComponent(char)
	const charData = ALPHABETS_EXTENDED.find(letter => letter.char === requestedChar)

	if (!charData) {
		throw new Error(`Char ${char} does not exist`)
	}

	return (
		<>
			<Char value={charData} />
			<CharNavigation />
		</>
	)
}