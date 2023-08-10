import { DEFAULT_SETTINGS, TSplitMode, fontsList, splitModeDescription } from "@/data/settings";
import { useInit } from "@/hooks/useInit";
import clsx from "clsx";
import React from "react";
import { useLocalStorage } from "usehooks-ts";
import { IconThreeDots } from "../Icons";
import { fonts } from "@/app/fonts";


export function TopMenuRightPopup({ className }: { className?: string }) {
	const init = useInit()
	const ref = React.useRef<HTMLLabelElement>(null)
	const [splitterMode, setSplitterMode] = useLocalStorage<TSplitMode>(
		DEFAULT_SETTINGS.splitMode.name,
		DEFAULT_SETTINGS.splitMode.value
	);
	const [selectedFont, setSelectedFontsetOpen] = useLocalStorage(
		DEFAULT_SETTINGS.fontFamily.name,
		DEFAULT_SETTINGS.fontFamily.value
	);

	const closePopup = () => {
		console.log("closePopup")
		ref.current && ref.current.blur()
	}

	if (!init) return null //TODO: compose default template for SEO purpose

	return (
		<div className={clsx("dropdown dropdown-end", className)}>
			<label ref={ref} tabIndex={0}>
				<button
					title="Hiện các thiết lập ẩn"
					type="button"
					className="grid h-12 text-black transition-all bg-transparent border-0 place-content-center sm:h-16 hover:text-blue-700 hover:bg-blue-200 focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 aspect-square active:bg-blue-300 active:text-blue-800 active:scale-90"
				>
					<IconThreeDots className="w-7 h-7" />
				</button>
			</label>
			<div tabIndex={0} className="p-0 z-20 border-2 border-black shadow w-72 sm:w-96 md:w-[30rem] lg:w-[35rem] dropdown-content menu bg-base-100">
				<ul className="flex flex-col overflow-y-auto flex-nowrap max-h-[80svh]">
					<li
						className="p-2 text-xl text-white bg-black cursor-default"
						onClick={closePopup}
					>
						Chọn kiểu chữ hiển thị
					</li>
					{fontsList.map(font => (
						<li
							key={font.family}
							className={clsx(
								"w-full overflow-hidden text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:text-blue-700 hover:bg-blue-300 active:bg-blue-400 active:text-blue-800",
								{ "bg-blue-200": selectedFont == font.family }
							)}
							onClick={() => setSelectedFontsetOpen(font.family)}
						>
							<a className={clsx(
								"rounded-none sm:py-3",
								fonts[font.family].className
							)}>
								Chọn Kiểu Chữ {font.name}
							</a>
						</li>
					))}
					<li className="p-2 text-xl text-white bg-black cursor-default">
						Phân tách chữ cái
					</li>
					{Object.entries(splitModeDescription).map(([mode, desc]) => (
						<li
							key={mode}
							className={clsx(
								"w-full overflow-hidden text-xl sm:text-2xl hover:text-blue-700 hover:bg-blue-300 active:bg-blue-400 active:text-blue-800 transition-all",
								{ "bg-blue-200": mode === splitterMode }
							)}
							onClick={() => setSplitterMode(mode as TSplitMode)}
						>
							<span>
								{`Chọn kiểu tách chữ "${desc}"`}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}