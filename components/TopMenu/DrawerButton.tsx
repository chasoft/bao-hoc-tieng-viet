import { IconMenu } from "../Icons";

/**
 * Drawers is site-wide scope.
 * To know about the structure, take a look at RootLayout.
 */
export function DrawerButton() {
	return (
		<label
			htmlFor="my-drawer"
			className="grid h-12 text-black bg-transparent border-0 border-r-2 border-black cursor-pointer place-content-center sm:h-16 hover:text-blue-800 hover:bg-blue-200 focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 aspect-square active:bg-blue-100"
		>
			<IconMenu className="w-7 h-7" />
		</label>
	)
}