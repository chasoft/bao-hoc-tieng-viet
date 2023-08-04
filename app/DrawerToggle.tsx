"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { urls } from "@/data/settings"

export default function DrawerToggle() {
	const pathname = usePathname()
	const ref = React.useRef(null)

	React.useEffect(() => {
		const drawerToggleRef = ref.current
		const drawerToggle = drawerToggleRef ? drawerToggleRef as HTMLInputElement : null

		if (
			drawerToggle &&
			drawerToggle.checked &&
			!(
				pathname.startsWith(urls.settings.url) || pathname.startsWith(urls.char.url)
			)
		) {
			drawerToggle.click()
		}
	}, [pathname])

	return (
		<input ref={ref} id="my-drawer" type="checkbox" className="drawer-toggle" />
	)
}