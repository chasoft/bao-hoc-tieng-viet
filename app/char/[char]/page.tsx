import Char from "@/components/Char";
import CharNavigation from "@/components/CharNavigation";
import { ALPHABETS } from "@/data";

export default function CharPage({ params: { char } }: { params: { char: string } }) {
	const requestedChar = decodeURIComponent(char).toUpperCase()
	const charData = ALPHABETS.find(letter => letter.char.toUpperCase() === requestedChar)

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