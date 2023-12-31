import CharList from "@/components/CharList"
import { COMPOUND_VOWELS } from "@/data"

export default function VowelsPage() {
	return (
		<main className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			<CharList hasCompoundChar={true} list={COMPOUND_VOWELS} />
		</main>
	)
}