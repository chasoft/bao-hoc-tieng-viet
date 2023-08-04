"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconBxsFaceMask, IconSettings } from "./Icons";
import { STRING_EMPTY, mainMenuItems, urls } from "@/data/settings";

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
							className="py-4 rounded-none"
						>
							{title}
						</Link>
					</li>
				))}
			</ul>
			<div className="flex justify-between p-2">
				<Link
					href={urls.settings.url}
					className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:text-blue-700"
				>
					<IconSettings className="w-7 h-7" /><span>Settings</span>
				</Link>
				<div className="tooltip" data-tip="Giới thiệu">
					<IconBxsFaceMask
						className="w-8 h-8 transition-all cursor-pointer hover:text-blue-700"
					/>
				</div>
			</div>
		</div>
	)
}