import { mainMenuItems, urls } from "@/data/settings";
import Link from "next/link";

export default function MainMenuContent() {
	return (
		<ul className="h-full text-2xl menu w-80 bg-base-200">
			{mainMenuItems.map(({ title, url }) => (
				<li key={url}>
					<Link
						href={url}
						prefetch={url !== urls.home.url}
						className="py-4"
					>
						{title}
					</Link>
				</li>
			))}
		</ul>
	)
}