import { DEFAULT_SETTINGS, fontsList } from "@/data/settings";
import { useInit } from "@/hooks/useInit";
import clsx from "clsx";
import { useLocalStorage } from "usehooks-ts";
import { IconFontFamily } from "../Icons";
import { fonts } from "@/app/fonts";

export function FontButton({ className }: { className?: string }) {
	const init = useInit()
	const [selectedFont, setSelectedFontsetOpen] = useLocalStorage(
		DEFAULT_SETTINGS.fontFamily.name,
		DEFAULT_SETTINGS.fontFamily.value
	);

	if (!init) return null

	return (
		<div className={clsx("dropdown dropdown-end", className)}>
			<label tabIndex={0}>
				<button
					title="Chọn kiểu chữ hiển thị"
					type="button"
					className="grid h-12 text-black transition-all bg-transparent border-0 place-content-center sm:h-16 hover:text-blue-700 hover:bg-blue-200 focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 aspect-square active:bg-blue-300 active:text-blue-800 active:scale-90"
				>
					<IconFontFamily className="w-7 h-7" />
				</button>
			</label>
			<div tabIndex={0} className="p-0 z-20 border-2 border-black shadow w-72 sm:w-96 md:w-[30rem] lg:w-[35rem] dropdown-content menu bg-base-100">
				<ul>
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
				</ul>
			</div>
		</div>
	)
}