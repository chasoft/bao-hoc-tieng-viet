import { DEFAULT_SETTINGS, TSplitMode, splitModeDescription } from "@/data/settings";
import { useInit } from "@/hooks/useInit";
import clsx from "clsx";
import { useLocalStorage } from "usehooks-ts";
import { IconSplitCellsHorizontal } from "../Icons";

export function SplitterModeButton({ className }: { className?: string }) {
	const init = useInit()
	const [splitterMode, setSplitterMode] = useLocalStorage<TSplitMode>(
		DEFAULT_SETTINGS.splitMode.name,
		DEFAULT_SETTINGS.splitMode.value
	);


	if (!init) return null

	return (
		<div className={clsx("dropdown dropdown-end", className)}>
			<label tabIndex={0}>
				<button
					title="Cách phân tách các chữ cái"
					type="button"
					className="grid h-12 text-black transition-all bg-transparent border-0 place-content-center sm:h-16 hover:text-blue-700 hover:bg-blue-200 focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 aspect-square active:bg-blue-300 active:text-blue-800 active:scale-90"
				>
					<IconSplitCellsHorizontal className="w-7 h-7" />
				</button>
			</label>
			<div tabIndex={0} className="p-0 z-20 border-2 border-black shadow w-72 sm:w-96 md:w-[30rem] lg:w-[35rem] dropdown-content menu bg-base-100">
				<ul>
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
