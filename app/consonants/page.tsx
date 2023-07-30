import CharList from "@/components/CharList";
import { COMPOUND_CONSONANTS } from "@/data";

export default function ConsonantsPage() {
	return (
		<main className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			<CharList list={COMPOUND_CONSONANTS.map(char => ({ char: char, reading: char }))} />
		</main>
	)
}