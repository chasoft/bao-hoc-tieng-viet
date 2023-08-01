import React from "react"

type SVGProps = React.SVGProps<SVGSVGElement>

export function IconSettings(props: SVGProps) {
	return (
		<svg
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			viewBox="0 0 24 24"
			height="1em"
			width="1em"
			{...props}
		>
			<path d="M15 12 A3 3 0 0 1 12 15 A3 3 0 0 1 9 12 A3 3 0 0 1 15 12 z" />
			<path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
		</svg>
	)
}

export function IconMenu(props: SVGProps) {
	return (
		<svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
			<path
				fill="currentColor"
				d="M2 6a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 12.032a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM3 17.064a1 1 0 100 2h18a1 1 0 000-2H3z"
			/>
		</svg>
	)
}

/**
 * Aa
 */
export function IconLetterCaseCapitalize(props: SVGProps) {
	return (
		<svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M3.69 2.75a.5.5 0 01.467.32l3.21 8.32a.5.5 0 01-.933.36L5.383 9.025H2.01L.967 11.75a.5.5 0 01-.934-.358l3.19-8.32a.5.5 0 01.467-.321zm.002 1.893l1.363 3.532H2.337l1.355-3.532zm7.207.564c-1.64 0-2.89 1.479-2.89 3.403 0 2.024 1.35 3.402 2.89 3.402a3.06 3.06 0 002.255-.99v.508a.45.45 0 10.9 0V5.72a.45.45 0 00-.9 0v.503A3.01 3.01 0 0010.9 5.207zm2.255 4.591V7.302c-.39-.721-1.213-1.244-2.067-1.244-.978 0-2.052.908-2.052 2.552 0 1.543.974 2.552 2.052 2.552.883 0 1.685-.667 2.067-1.364z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

/**
 * aa
 */
export function IconLetterCaseLowercase(props: SVGProps) {
	return (
		<svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M3.699 5.207c-1.64 0-2.89 1.479-2.89 3.403 0 2.024 1.35 3.402 2.89 3.402a3.06 3.06 0 002.255-.99v.508a.45.45 0 00.9 0V5.72a.45.45 0 00-.9 0v.503a3.01 3.01 0 00-2.255-1.016zm2.255 4.592V7.301c-.39-.72-1.213-1.243-2.067-1.243-.978 0-2.052.908-2.052 2.552 0 1.543.974 2.552 2.052 2.552.883 0 1.684-.666 2.067-1.363zm4.845-4.592c-1.64 0-2.89 1.479-2.89 3.403 0 2.024 1.35 3.402 2.89 3.402.822 0 1.675-.343 2.255-.99v.508a.45.45 0 00.9 0V5.72a.45.45 0 10-.9 0v.503A3.01 3.01 0 0010.8 5.207zm2.255 4.591V7.302c-.39-.721-1.213-1.244-2.067-1.244-.978 0-2.052.908-2.052 2.552 0 1.543.974 2.552 2.052 2.552.883 0 1.685-.667 2.067-1.364z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

/**
 * AA
 */
export function IconLetterCaseUppercase(props: SVGProps) {
	return (
		<svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M3.626 2.75a.5.5 0 01.468.327l3.076 8.32a.5.5 0 01-.938.346L5.224 9.016H2.027L1.02 11.743a.5.5 0 11-.938-.347l3.076-8.32a.5.5 0 01.469-.326zm0 1.942L4.91 8.166H2.34l1.284-3.474zm7.746-1.942a.5.5 0 01.469.327l3.075 8.32a.5.5 0 11-.938.346L12.97 9.016H9.773l-1.008 2.727a.5.5 0 11-.938-.347l3.076-8.32a.5.5 0 01.469-.326zm0 1.942l1.284 3.474h-2.568l1.284-3.474z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

export function IconFontFamily(props: SVGProps) {
	return (
		<svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
			<path
				fill="currentColor"
				d="M2.5 4.5C2.5 3.099 3.599 2 5 2h7.499a.5.5 0 01.001 1H8.692l-.287.855A1887.39 1887.39 0 017.343 7H8.5a.5.5 0 010 1H7.004c-.437 1.285-.84 2.461-1.046 3.039-.322.9-.75 1.447-1.29 1.739-.505.273-1.026.272-1.384.272H3.25a.55.55 0 010-1.1c.392 0 .654-.01.894-.14.22-.119.511-.395.778-1.142.185-.517.532-1.527.92-2.668H4.5a.5.5 0 010-1h1.682a1350.118 1350.118 0 001.18-3.496L7.533 3H5c-.849 0-1.5.651-1.5 1.5a.5.5 0 01-1 0z"
			/>
		</svg>
	);
}

/**
 * B
 */
export function IconBold(props: SVGProps) {
	return (
		<svg
			viewBox="0 0 384 512"
			fill="currentColor"
			height="1em"
			width="1em"
			{...props}
		>
			<path d="M0 64c0-17.7 14.3-32 32-32h192c70.7 0 128 57.3 128 128 0 31.3-11.3 60.1-30 82.3 37.1 22.4 62 63.1 62 109.7 0 70.7-57.3 128-128 128H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V96H32C14.3 96 0 81.7 0 64zm224 160c35.3 0 64-28.7 64-64s-28.7-64-64-64H112v128h112zm-112 64v128h144c35.3 0 64-28.7 64-64s-28.7-64-64-64H112z" />
		</svg>
	);
}

/**
 * I
 */
export function IconItalic(props: SVGProps) {
	return (
		<svg
			viewBox="0 0 384 512"
			fill="currentColor"
			height="1em"
			width="1em"
			{...props}
		>
			<path d="M128 64c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32h-58.7L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h58.7L224 96h-64c-17.7 0-32-14.3-32-32z" />
		</svg>
	);
}