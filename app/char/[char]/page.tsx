import Char from "@/components/Char"
import CharNavigation from "@/components/CharNavigation"
import { findCharData } from "@/utils"

export default function CharPage({ params: { char } }: { params: { char: string } }) {
	const charData = findCharData(char)

	if (!charData) {
		throw new Error(`Char ${decodeURIComponent(char)} does not exist`)
	}

	return (
		<div className="flex flex-col gap-6 w-full max-w-[70vw] sm:max-w-[50vw] md:max-w-[45vw] lg:max-w-[40vw] xl:max-w-[35vw] pt-28">
			<Char value={charData} />
			<CharNavigation />
		</div>
	)
}