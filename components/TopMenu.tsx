"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function TopMenu() {
	const pathname = usePathname()
	return (
		<nav className="flex p-4">
			{pathname !== "/" && <div className="flex gap-6">
				<Link href="/" className="hover:text-blue-500">Home</Link>
				<Link href="/alphabets" className="hover:text-blue-500">Alphabets</Link>
				<Link href="/consonants" className="hover:text-blue-500">Consonants</Link>
				<Link href="/vowels" className="hover:text-blue-500">Vowels</Link>
				<Link href="/random" className="hover:text-blue-500">Random</Link>
			</div>}
			<div className="ml-auto">
				Font
			</div>
		</nav>
	)
}