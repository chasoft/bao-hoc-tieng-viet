import Char from "@/components/Char";
import Modal from "@/components/Modal";
import { ALPHABETS_EXTENDED } from "@/data";

export default function CharModal({ params: { char } }: { params: { char: string } }) {
	const requestedChar = decodeURIComponent(char).toUpperCase()
	const charData = ALPHABETS_EXTENDED.find(letter => letter.char.toUpperCase() === requestedChar)

	if (!charData) {
		throw new Error(`Char ${char} does not exist`)
	}

	return (
		<Modal>
			<Char value={charData} />
		</Modal>
	)
}