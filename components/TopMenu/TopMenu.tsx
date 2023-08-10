"use client"

import React from "react"
import { DrawerButton } from "./DrawerButton"
import { TopMenuLeft } from "./TopMenuLeft"
import { TopMenuRight } from "./TopMenuRight"

export function TopMenu() {
	return (
		<nav className="fixed top-0 left-0 right-0 z-30 flex items-center h-[50px] bg-white border-b-2 border-black sm:h-[66px]">
			<DrawerButton />
			<div className="flex items-center pr-2 sm:pr-4">
				<TopMenuLeft />
			</div>
			<div className="ml-auto">
				<TopMenuRight />
			</div>
		</nav>
	)
}