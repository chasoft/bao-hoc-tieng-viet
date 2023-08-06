import { TSupportFont } from "@/app/fonts"
import { TWord, TWordCategory } from "@/data"
import { CAT_SEPARATOR, DEFAULT_SETTINGS } from "@/data/settings"
import { useInit } from "@/hooks/useInit"
import { TWordCase } from "@/types"
import { validCategoryFilter } from "@/utils"
import clsx from "clsx"
import { useParams } from "next/navigation"
import { useReadLocalStorage } from "usehooks-ts"
import { IconInfo } from "./Icons"

type AppliedSettingsInformationPanelProps = {
	word?: TWord
}

export default function AppliedSettingsInformationPanel({ word }: AppliedSettingsInformationPanelProps) {
	const init = useInit()
	const { categories } = useParams();
	const validCategories = validCategoryFilter(
		typeof categories === "string"
			? decodeURIComponent(categories).split(CAT_SEPARATOR)
			: []
	)

	const wordBold = useReadLocalStorage<boolean>(DEFAULT_SETTINGS.wordBold.name)
		?? DEFAULT_SETTINGS.wordBold.value
	const wordItalic = useReadLocalStorage<boolean>(DEFAULT_SETTINGS.wordItalic.name)
		?? DEFAULT_SETTINGS.wordItalic.value
	const selectedFont = useReadLocalStorage<TSupportFont>(DEFAULT_SETTINGS.fontFamily.name)
		?? DEFAULT_SETTINGS.fontFamily.value
	const caseIndex = useReadLocalStorage<TWordCase>(DEFAULT_SETTINGS.wordCase.name)
		?? DEFAULT_SETTINGS.wordCase.value
	const splitterMode = useReadLocalStorage<number>(
		DEFAULT_SETTINGS.characterSplitterMode.name
	) ?? DEFAULT_SETTINGS.characterSplitterMode.value

	if (!init) return (
		<Template data={{
			validCategories: [],
			wordBold: DEFAULT_SETTINGS.wordBold.value,
			wordItalic: DEFAULT_SETTINGS.wordItalic.value,
			selectedFont: DEFAULT_SETTINGS.fontFamily.value,
			caseIndex: DEFAULT_SETTINGS.wordCase.value,
			splitterMode: DEFAULT_SETTINGS.characterSplitterMode.value,
			word
		}} />
	)

	return (
		<Template data={{
			validCategories,
			wordBold,
			wordItalic,
			selectedFont,
			caseIndex,
			splitterMode,
			word
		}} />
	)
}

type TemplateProps = {
	data: {
		validCategories: TWordCategory[]
		wordBold: boolean
		wordItalic: boolean
		selectedFont: TSupportFont
		caseIndex: TWordCase
		splitterMode: number
		word?: TWord
	}
}

function Template({ data }: TemplateProps) {
	return (
		<div className="absolute dropdown dropdown-bottom top-14 sm:top-[74px] left-2 sm:left-4">
			<label tabIndex={0}>
				<IconInfo className="w-8 h-8 text-blue-700" />
			</label>
			<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-60">
				<li>{`Chủ đề đang xem: ${data.validCategories.join(", ")}`}</li>
				<li>{`WordBold: ${data.wordBold}`}</li>
				<li>{`WordItalic: ${data.wordItalic}`}</li>
				<li>{`Kiểu chữ đang hiển thị: ${data.selectedFont}`}</li>
				<li>{`${data.caseIndex}`}</li>
				<li>{`Kiểu tách chữ cái: ${data.splitterMode}`}</li>
				<li>{`Chữ đang hiển thị: ${data.word ? data.word.text : ""}`}</li>
			</ul>
		</div>
	)
}