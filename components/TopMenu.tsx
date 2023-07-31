"use client"

import { IconFontFamily, IconLetterCaseCapitalize, IconLetterCaseLowercase, IconLetterCaseUppercase, IconMenu, IconSettings } from "./Icons"
import { useLocalStorage } from "usehooks-ts"
import { TWordCase } from "@/types"
import clsx from "clsx"

const wordCaseToolbarIcons: Record<TWordCase, any> = {
	"lowercase": <IconLetterCaseLowercase className="w-7 h-7" />,
	"uppercase": <IconLetterCaseUppercase className="w-7 h-7" />,
	"capitalize": <IconLetterCaseCapitalize className="w-7 h-7" />,
}

function Toolbar() {
	//BUG: caseIndex not reflected the local storage value
	const [caseIndex, setCaseIndex] = useLocalStorage<TWordCase>("wordCaseToolbarIcons", "uppercase");
	return (
		<div className="flex items-center pr-2 sm:pr-4">
			{Object.entries(wordCaseToolbarIcons).map(([key, icon]) => (
				<div
					key={key}
					className={clsx(
						"cursor-pointer p-2 sm:p-4 aspect-square hover:text-blue-800 hover:bg-blue-200",
						{ "bg-blue-100": caseIndex == key }
					)}
					onClick={() => setCaseIndex(key as TWordCase)}
				>
					{icon}
				</div>
			))}
		</div>
	)
}

// TODO: Create dropdown menu
function FontButton() {
	return (
		<button
			title="Quick Font Family selector"
			type="button"
			className="block px-2 text-black bg-transparent border-0 sm:px-4 hover:text-blue-800 hover:bg-blue-200 focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 aspect-square"
		>
			<IconFontFamily className="w-7 h-7" />
		</button>
	)
}

// TODO: Create dropdown menu
function MenuButton() {
	return (
		<button
			title="Mobile Menu"
			type="button"
			className="block px-2 text-black bg-transparent border-0 sm:px-4 hover:text-blue-800 hover:bg-blue-200 focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 aspect-square"
		>
			<IconMenu className="w-7 h-7" />
		</button>
	)
}

// TODO: Create popup dialog
function SettingsButton() {
	return (
		<button
			title="Settings"
			type="button"
			className="block px-2 text-black bg-transparent border-0 sm:px-4 hover:no-underline hover:text-blue-800 hover:bg-blue-200 focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 aspect-square"
		>
			<IconSettings className="w-7 h-7" />
		</button>
	)
}

export default function TopMenu() {
	return (
		<nav className="fixed top-0 left-0 right-0 flex items-center bg-white border-b-2 border-black">
			<MenuButton />
			<Toolbar />

			<div className="ml-auto">
				<div className="flex items-center">
					<FontButton />
					<SettingsButton />
				</div>
			</div>
		</nav>
	)
}