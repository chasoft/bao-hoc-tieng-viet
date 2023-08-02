"use client"

import { IconBold, IconFontFamily, IconItalic, IconLetterCaseCapitalize, IconLetterCaseLowercase, IconLetterCaseUppercase, IconMenu, IconSettings } from "./Icons"
import { displaySettings, fontsList, urls } from "@/data/settings"
import { TWordCase } from "@/types"
import { useLocalStorage } from "usehooks-ts"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import Link from "next/link"
import React from "react"
import { fonts } from "@/app/fonts"

const wordCaseToolbarIcons: Record<TWordCase, { icon: any, tooltip: string }> = {
	"lowercase": { icon: <IconLetterCaseLowercase className="w-7 h-7" />, tooltip: "chữ thường" },
	"uppercase": { icon: <IconLetterCaseUppercase className="w-7 h-7" />, tooltip: "CHỮ HOA" },
	"capitalize": { icon: <IconLetterCaseCapitalize className="w-7 h-7" />, tooltip: "Viết Hoa Đầu Chữ" },
}

/**
 * ON or OFF
 * Like Radio Components
 */
function WordCaseButtons() {
	const [caseIndex, setCaseIndex] = useLocalStorage<TWordCase>("wordCaseToolbarIcons", "uppercase");
	const pathname = usePathname();
	return (
		<div className="flex items-center border-r-[1px] border-gray-200">
			{Object.entries(wordCaseToolbarIcons).map(([key, icon]) => (
				<div
					key={key}
					className={clsx(
						"cursor-pointer p-2 sm:p-4 aspect-square hover:text-blue-800 hover:bg-blue-200 active:bg-blue-100",
						{ "bg-blue-100": caseIndex == key },
						{ "hidden": key === "capitalize" && pathname !== urls.random.url }
					)}
					onClick={() => setCaseIndex(key as TWordCase)}
				>
					{icon.icon}
				</div>
			))}
		</div>
	)
}

const wordStyleToolbarIcons: Record<string, { icon: any, tooltip: string }> = {
	"B": { icon: <IconBold className="w-7 h-7" />, tooltip: "In đậm" },
	"I": { icon: <IconItalic className="w-7 h-7" />, tooltip: "In nghiêng" },
}

/**
 * Checked or Unchecked
 * Like Check components
 */
function WordStyleButtons() {
	const [wordBold, setWordBold] = useLocalStorage<boolean>("wordBold", displaySettings.wordBold);
	const [wordItalic, setWordItalic] = useLocalStorage<boolean>("wordItalic", displaySettings.wordItalic);

	const wordStyleState: Record<string, { value: boolean, action: Function }> = {
		"B": { value: wordBold, action: () => setWordBold(v => !v) },
		"I": { value: wordItalic, action: () => setWordItalic(v => !v) },
	}

	return (
		<div className="flex items-center border-r-[1px] border-gray-200">
			{Object.entries(wordStyleToolbarIcons).map(([key, btnData]) => (
				<div
					key={key}
					className={clsx(
						"cursor-pointer p-2 sm:p-4 aspect-square hover:text-blue-800 hover:bg-blue-200 active:bg-slate-400",
						{ "bg-slate-400": wordStyleState[key].value }
					)}
					onClick={() => { wordStyleState[key].action() }}
				>
					{btnData.icon}
				</div>
			))}
		</div>
	)
}

function Toolbar() {
	const pathname = usePathname()

	// Not show the Toolbar at [homepage, settings] 
	if (pathname == urls.home.url || pathname == urls.settings.url) return null

	return (
		<div className="flex items-center pr-2 sm:pr-4">
			<WordCaseButtons />
			<WordStyleButtons />
		</div>
	)
}

function FontButton() {
	const [selectedFont, setSelectedFontsetOpen] = useLocalStorage("selectedFont", "inter");
	return (
		<div className="dropdown dropdown-end">
			<label tabIndex={0}>
				<button
					title="Quick Font Family selector"
					type="button"
					className="block px-2 text-black bg-transparent border-0 sm:px-4 hover:text-blue-800 hover:bg-blue-200 focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 aspect-square active:bg-blue-100"
				>
					<IconFontFamily className="w-7 h-7" />
				</button>
			</label>
			<div tabIndex={0} className="p-0 z-20 border-2 border-black shadow w-72 sm:w-96 md:w-[30rem] lg:w-[35rem] dropdown-content menu bg-base-100">
				<div className="p-3 mb-0 text-xl bg-slate-200">
					Chọn phông chữ
				</div>
				<ul>
					{fontsList.map(font => (
						<li
							key={font.family}
							className={clsx(
								"w-full overflow-hidden text-xl sm:text-2xl md:text-3xl lg:text-4xl",
								{ "bg-blue-400": selectedFont == font.family }
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

/**
 * Drawers is site-wide scope.
 * To know about the structure, take a look at RootLayout.
 */
function MenuButton() {
	return (
		<label
			htmlFor="my-drawer"
			className="grid px-2 text-black bg-transparent border-0 border-r-2 border-black cursor-pointer place-content-center sm:px-4 hover:text-blue-800 hover:bg-blue-200 focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 aspect-square active:bg-blue-100"
		>
			<IconMenu className="w-7 h-7" />
		</label>
	)
}

function SettingsButton() {
	return (
		<Link href={urls.settings.url} prefetch>
			<button
				title="Settings"
				type="button"
				className="block px-2 text-black bg-transparent border-0 sm:px-4 hover:no-underline hover:text-blue-800 hover:bg-blue-200 focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 aspect-square active:bg-blue-100"
			>
				<IconSettings className="w-7 h-7" />
			</button>
		</Link>
	)
}

export default function TopMenu() {
	return (
		<nav className="fixed top-0 left-0 right-0 z-10 flex items-center bg-white border-b-2 border-black">
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