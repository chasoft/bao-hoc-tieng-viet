import { useInit } from "@/hooks/useInit";
import { IconBold, IconItalic } from "../Icons";
import { DEFAULT_SETTINGS } from "@/data/settings";
import { useLocalStorage } from "usehooks-ts";
import clsx from "clsx";

const wordStyleToolbarIcons: Record<string, { icon: any, tooltip: string }> = {
	"B": { icon: <IconBold className="w-5 h-5" />, tooltip: "In đậm" },
	"I": { icon: <IconItalic className="w-5 h-5" />, tooltip: "In nghiêng" },
}

/**
 * Checked or Unchecked
 * Like Check components
 */
export function WordStyleButtons() {
	const init = useInit()
	const [wordBold, setWordBold] = useLocalStorage<boolean>(
		DEFAULT_SETTINGS.wordBold.name,
		DEFAULT_SETTINGS.wordBold.value
	);
	const [wordItalic, setWordItalic] = useLocalStorage<boolean>(
		DEFAULT_SETTINGS.wordItalic.name,
		DEFAULT_SETTINGS.wordItalic.value
	);

	const wordStyleState: Record<string, { value: boolean, action: Function }> = {
		"B": { value: wordBold, action: () => setWordBold(v => !v) },
		"I": { value: wordItalic, action: () => setWordItalic(v => !v) },
	}

	const wordStyleIcons = Object.entries(wordStyleToolbarIcons)


	// TODO: Create template to replace `null`
	if (!init) return null

	return (
		<div className="flex items-center border-r-[1px] border-gray-200">
			{wordStyleIcons.map(([key, btnData], idx) => (
				<div
					title={wordStyleToolbarIcons[key].tooltip}
					key={key}
					className={clsx(
						"grid place-content-center cursor-pointer h-12 sm:h-16 aspect-square hover:text-blue-700 hover:bg-blue-300 active:bg-blue-400 active:text-blue-800 transition-all active:scale-90",
						{ "bg-blue-200": wordStyleState[key].value }
					)}
					onClick={() => { wordStyleState[key].action() }}
				>
					{btnData.icon}
				</div>
			))}
		</div>
	)
}