import { urls } from "@/data/settings"
import { usePathname } from "next/navigation"
import { WordCaseButtons } from "./WordCaseButtons"
import { WordStyleButtons } from "./WordStyleButtons"

export function TopMenuLeft() {
	const pathname = usePathname()

	// Not show the Toolbar at [homepage, settings] 
	if (pathname == urls.home.url || pathname == urls.settings.url) return null

	return (
		<>
			<WordCaseButtons />
			<WordStyleButtons />
		</>
	)
}