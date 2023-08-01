import Char from "@/components/Char"
import Modal from "@/components/Modal"
import { findCharData } from "@/utils"

export default function CharModal({ params: { char } }: { params: { char: string } }) {
	const charData = findCharData(char)

	if (!charData) {
		throw new Error(`Char ${decodeURIComponent(char)} does not exist`)
	}

	return (
		<Modal>
			<Char value={charData} />
		</Modal>
	)
}