import { TSupportFont } from "@/app/fonts"
import { CAT_SEPARATOR, DEFAULT_SETTINGS } from "@/data/settings"
import { TWordCase } from "@/types"
import { validCategoryFilter } from "@/utils"
import clsx from "clsx"
import { useParams } from "next/navigation"
import { useReadLocalStorage } from "usehooks-ts"

type AppliedSettingsInformationPanelProps = {
	className?: string
}

export default function AppliedSettingsInformationPanel({ className }: AppliedSettingsInformationPanelProps) {
	const { categories } = useParams();
	const validCategories = validCategoryFilter(
		typeof categories === "string"
			? decodeURIComponent(categories).split(CAT_SEPARATOR)
			: []
	)

	const wordBold = useReadLocalStorage(DEFAULT_SETTINGS.wordBold.name)
		?? DEFAULT_SETTINGS.wordBold.value
	const wordItalic = useReadLocalStorage(DEFAULT_SETTINGS.wordItalic.name)
		?? DEFAULT_SETTINGS.wordItalic.value
	const selectedFont = useReadLocalStorage<TSupportFont>(DEFAULT_SETTINGS.fontFamily.name)
		?? DEFAULT_SETTINGS.fontFamily.value
	const caseIndex = useReadLocalStorage<TWordCase>(DEFAULT_SETTINGS.wordCase.name)
		?? DEFAULT_SETTINGS.wordCase.value
	const splitterMode = useReadLocalStorage<number>(
		DEFAULT_SETTINGS.characterSplitterMode.name
	) ?? DEFAULT_SETTINGS.characterSplitterMode.value

	/**
	 * TODO: Tổng hợp tất cả các thông tin đang được áp dụng
	 * Có thể làm thành 1 popup... và trigger bằng 1 icon (i) góc trên bên trái
	 */

	// TODO: Thêm breadcrumbs góc trên bên trái
	// https://daisyui.com/components/breadcrumbs/

	return (
		<div className={clsx("text-slate-400", className)}>
			<span>Cấu hình đang áp dụng</span>
			<ul className="hidden">
				<li>dd</li>
				<li>dd</li>
				<li>dd</li>
			</ul>
		</div>
	)
}