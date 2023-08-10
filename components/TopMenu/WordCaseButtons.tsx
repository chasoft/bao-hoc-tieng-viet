import { DEFAULT_SETTINGS, urls } from "@/data/settings";
import { useInit } from "@/hooks/useInit";
import { TWordCase } from "@/types";
import { usePathname } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { IconLetterCaseCapitalize, IconLetterCaseLowercase, IconLetterCaseUppercase } from "../Icons";
import clsx from "clsx";

const wordCaseToolbarIcons: Partial<Record<TWordCase, { icon: React.ReactElement, tooltip: string }>> = {
	"lowercase": { icon: <IconLetterCaseLowercase className="w-7 h-7" />, tooltip: "chữ thường" },
	"uppercase": { icon: <IconLetterCaseUppercase className="w-7 h-7" />, tooltip: "CHỮ HOA" },
	"capitalize": { icon: <IconLetterCaseCapitalize className="w-7 h-7" />, tooltip: "Viết Hoa Đầu Chữ" },
}

/**
 * ON or OFF
 * Like Radio Components
 */
export function WordCaseButtons() {
	const init = useInit()
	const [caseIndex, setCaseIndex] = useLocalStorage<TWordCase>(
		DEFAULT_SETTINGS.wordCase.name,
		DEFAULT_SETTINGS.wordCase.value
	);
	const pathname = usePathname();

	if (!init) return null //TODO: compose default template for SEO purpose

	return (
		<div className="flex items-center border-r-[1px] border-gray-200">
			{Object.entries(wordCaseToolbarIcons).map(([key, icon]) => (
				<div
					key={key}
					className={clsx(
						"grid place-content-center cursor-pointer h-12 sm:h-16 aspect-square hover:text-blue-700 hover:bg-blue-200 active:bg-blue-300 active:text-blue-800 transition-all active:scale-90",
						{ "bg-blue-100": caseIndex == key },
						{ "hidden": key === "capitalize" && !pathname.startsWith(urls.random.url) }
					)}
					onClick={() => setCaseIndex(key as TWordCase)}
				>
					{icon.icon}
				</div>
			))}
		</div>
	)
}