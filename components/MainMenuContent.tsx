"use client"

import Link from "next/link";
import { IconBxsFaceMask } from "./Icons";
import { STRING_EMPTY, mainMenuItems, urls } from "@/data/settings";
import { usePathname } from "next/navigation";

export default function MainMenuContent() {
	const pathname = usePathname()
	return (
		<div className="flex flex-col h-full bg-base-200">
			<ul className="h-full p-0 overflow-hidden text-xl menu w-80">
				{mainMenuItems.map(({ title, url }) => (
					<li
						key={url}
						className={pathname === url ? "bg-slate-300" : STRING_EMPTY}
					>
						<Link
							href={url}
							prefetch={url !== urls.home.url}
							className="py-4 transition-all rounded-none"
						>
							{title}
						</Link>
					</li>
				))}
			</ul>
			<div className="flex justify-end p-4">
				<div className="tooltip" data-tip="Giới thiệu">
					<IconBxsFaceMask
						className="w-8 h-8 transition-all cursor-pointer hover:text-blue-500 hover:scale-125"
					/>
				</div>
			</div>
		</div>
	)
}