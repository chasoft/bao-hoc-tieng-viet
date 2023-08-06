"use client"

import React from "react"
import clsx from "clsx"
import Link from "next/link"
import { useLocalStorage } from "usehooks-ts"
import { usePathname } from "next/navigation"
import { DEFAULT_SETTINGS, splitModeDescription, fontsList, urls } from "@/data/settings"
import { fonts } from "@/app/fonts"
import { IconBold, IconFontFamily, IconItalic, IconLetterCaseCapitalize, IconLetterCaseLowercase, IconLetterCaseUppercase, IconMenu, IconSettings, IconSplitCellsHorizontal } from "./Icons"
import { TWordCase } from "@/types"
import { useInit } from "@/hooks/useInit"

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
	const init = useInit()
	const [caseIndex, setCaseIndex] = useLocalStorage<TWordCase>(
		DEFAULT_SETTINGS.wordCase.name,
		DEFAULT_SETTINGS.wordCase.value
	);
	const pathname = usePathname();

	if (!init) return null //TODO: compose default template for SEO purpose

	return (
		<div className="flex items-center border-r-[1px] border-gray-200">
			{Object.entries(wordCaseToolbarIcons).map(([key, icon]) => (
				<div
					key={key}
					className={clsx(
						"grid place-content-center cursor-pointer h-12 sm:h-16 aspect-square hover:text-blue-700 hover:bg-blue-200 active:bg-blue-300 active:text-blue-800 transition-all active:scale-90",
						{ "bg-blue-100": caseIndex == key },
						{ "hidden": key === "capitalize" && !pathname.startsWith(urls.random.url) }
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
	"B": { icon: <IconBold className="w-5 h-5" />, tooltip: "In đậm" },
	"I": { icon: <IconItalic className="w-5 h-5" />, tooltip: "In nghiêng" },
}

/**
 * Checked or Unchecked
 * Like Check components
 */
function WordStyleButtons() {
	const init = useInit()
	const [wordBold, setWordBold] = useLocalStorage<boolean>(
		DEFAULT_SETTINGS.wordBold.name,
		DEFAULT_SETTINGS.wordBold.value
	);
	const [wordItalic, setWordItalic] = useLocalStorage<boolean>(
		DEFAULT_SETTINGS.wordItalic.name,
		DEFAULT_SETTINGS.wordItalic.value
	);

	const wordStyleState: Record<string, { value: boolean, action: Function }> = {
		"B": { value: wordBold, action: () => setWordBold(v => !v) },
		"I": { value: wordItalic, action: () => setWordItalic(v => !v) },
	}

	const wordStyleIcons = Object.entries(wordStyleToolbarIcons)


	if (!init) return null

	return (
		<div className="flex items-center border-r-[1px] border-gray-200">
			{wordStyleIcons.map(([key, btnData], idx) => (
				<div
					title={wordStyleToolbarIcons[key].tooltip}
					key={key}
					className={clsx(
						"grid place-content-center cursor-pointer h-12 sm:h-16 aspect-square hover:text-blue-700 hover:bg-blue-300 active:bg-blue-400 active:text-blue-800 transition-all active:scale-90",
						{ "bg-blue-200": wordStyleState[key].value }
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
	const init = useInit()
	const [selectedFont, setSelectedFontsetOpen] = useLocalStorage(
		DEFAULT_SETTINGS.fontFamily.name,
		DEFAULT_SETTINGS.fontFamily.value
	);

	if (!init) return null //TODO: compose default template for SEO purpose

	return (
		<div className="dropdown dropdown-end">
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

function SplitterModeButton() {
	const init = useInit()
	const [splitterMode, setSplitterMode] = useLocalStorage<number>(
		DEFAULT_SETTINGS.characterSplitterMode.name,
		DEFAULT_SETTINGS.characterSplitterMode.value
	);

	if (!init) return null //TODO: compose default template for SEO purpose

	return (
		<div className="dropdown dropdown-end">
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
								{ "bg-blue-200": Number(mode) === splitterMode }
							)}
							onClick={() => setSplitterMode(Number(mode))}
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

/**
 * Drawers is site-wide scope.
 * To know about the structure, take a look at RootLayout.
 */
function MenuButton() {
	return (
		<label
			htmlFor="my-drawer"
			className="grid h-12 text-black bg-transparent border-0 border-r-2 border-black cursor-pointer place-content-center sm:h-16 hover:text-blue-800 hover:bg-blue-200 focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 aspect-square active:bg-blue-100"
		>
			<IconMenu className="w-7 h-7" />
		</label>
	)
}

function SettingsButton() {
	return (
		<Link href={urls.settings.url}>
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

export default function TopMenu() {
	return (
		<nav className="fixed top-0 left-0 right-0 z-30 flex items-center h-[50px] bg-white border-b-2 border-black sm:h-[66px]">
			<MenuButton />
			<Toolbar />
			<div className="ml-auto">
				<div className="flex items-center">
					<FontButton />
					<SplitterModeButton />
					<SettingsButton />
				</div>
			</div>
		</nav>
	)
}