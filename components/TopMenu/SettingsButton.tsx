import clsx from "clsx";
import Link from "next/link";
import { IconSettings } from "../Icons";
import { urls } from "@/data/settings";

export function SettingsButton({ className }: { className?: string }) {
	return (
		<Link href={urls.settings.url} className={clsx(className)}>
			<button
				title="Thiết lập cấu hình"
				type="button"
				className="block h-12 text-black transition-all bg-transparent border-0 sm:h-16 sm:px-4 hover:no-underline hover:text-blue-700 hover:bg-blue-200 focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 aspect-square active:bg-blue-300 active:scale-90"
			>
				<IconSettings className="w-7 h-7" />
			</button>
		</Link>
	)
}