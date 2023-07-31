"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { IconMenu, IconSettings } from "./Icons";

function PcMenu() {
	return (
		<div className="hidden gap-6 md:flex">
			<Link href="/" className="hover:text-blue-500">Home</Link>
			<Link href="/alphabets" className="hover:text-blue-500">Alphabets</Link>
			<Link href="/consonants" className="hover:text-blue-500">Consonants</Link>
			<Link href="/vowels" className="hover:text-blue-500">Vowels</Link>
			<Link href="/random" className="hover:text-blue-500">Random</Link>
		</div>
	)
}

function MobileMenu() {
	return (
		<div className="flex gap-6 border-2 md:hidden bg-slate-300">
			<button
				className="block px-2 text-black bg-transparent border-0 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 aspect-square"
			>
				<IconMenu className="w-7 h-7" />
			</button>
		</div>
	)
}

export default function TopMenu() {
	const pathname = usePathname()
	return (
		<nav className="fixed top-0 left-0 right-0 flex p-4">
			{pathname !== "/" && <><PcMenu /><MobileMenu /></>}
			<div className="ml-auto">
				<button
					className="block px-2 text-black bg-transparent border-0 hover:no-underline hover:text-orange-900 focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 aspect-square"
				>
					<IconSettings className="w-7 h-7" />
				</button>
			</div>
		</nav>
	)
}