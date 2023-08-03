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

export function IconSkipNext(props: SVGProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			height="1em"
			width="1em"
			{...props}
		>
			<path d="M16 18h2V6h-2M6 18l8.5-6L6 6v12z" />
		</svg>
	);
}

export function IconBxsFaceMask(props: SVGProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			height="1em"
			width="1em"
			{...props}
		>
			<path d="M12 2C6.486 2 2 6.486 2 12c0 2.521.945 4.82 2.49 6.582 1.24 1.52 3.266 3.066 6.439 3.358a9.731 9.731 0 002.141 0c3.174-.292 5.199-1.839 6.439-3.358A9.948 9.948 0 0022 12c0-5.514-4.486-10-10-10zM4.709 8.724c.154.09.308.182.456.276.396.25.791.5 1.286.688.494.187 1.088.312 1.879.312.792 0 1.386-.125 1.881-.313s.891-.437 1.287-.687.792-.5 1.287-.688c.494-.187 1.088-.312 1.88-.312s1.386.125 1.88.313c.495.187.891.437 1.287.687s.792.5 1.287.688c.178.067.374.122.581.171.191.682.3 1.398.3 2.141 0 .843-.133 1.654-.375 2.417-.261.195-.733.474-1.577.756-.769.256-1.672.458-2.685.602a25.337 25.337 0 01-6.727 0c-1.013-.144-1.916-.346-2.685-.602-.844-.282-1.316-.561-1.577-.756a7.953 7.953 0 01.335-5.693z" />
			<path d="M10 12.5 A1.5 1.5 0 0 1 8.5 14 A1.5 1.5 0 0 1 7 12.5 A1.5 1.5 0 0 1 10 12.5 z" />
			<path d="M17 12.5 A1.5 1.5 0 0 1 15.5 14 A1.5 1.5 0 0 1 14 12.5 A1.5 1.5 0 0 1 17 12.5 z" />
		</svg>
	);
}

export function IconBxDonateHeart(props: SVGProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			height="1em"
			width="1em"
			{...props}
		>
			<path d="M4 21h9.62a3.995 3.995 0 003.037-1.397l5.102-5.952a1 1 0 00-.442-1.6l-1.968-.656a3.043 3.043 0 00-2.823.503l-3.185 2.547-.617-1.235A3.98 3.98 0 009.146 11H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h5.146c.763 0 1.448.423 1.789 1.105l.447.895H7v2h6.014a.996.996 0 00.442-.11l.003-.001.004-.002h.003l.002-.001h.004l.001-.001c.009.003.003-.001.003-.001.01 0 .002-.001.002-.001h.001l.002-.001.003-.001.002-.001.002-.001.003-.001.002-.001c.003 0 .001-.001.002-.001l.003-.002.002-.001.002-.001.003-.001.002-.001h.001l.002-.001h.001l.002-.001.002-.001c.009-.001.003-.001.003-.001l.002-.001a.915.915 0 00.11-.078l4.146-3.317c.262-.208.623-.273.94-.167l.557.186-4.133 4.823a2.029 2.029 0 01-1.52.688H4v-6zM16 2h-.017c-.163.002-1.006.039-1.983.705-.951-.648-1.774-.7-1.968-.704L12.002 2h-.004c-.801 0-1.555.313-2.119.878C9.313 3.445 9 4.198 9 5s.313 1.555.861 2.104l3.414 3.586a1.006 1.006 0 001.45-.001l3.396-3.568C18.688 6.555 19 5.802 19 5s-.313-1.555-.878-2.121A2.978 2.978 0 0016.002 2H16zm1 3c0 .267-.104.518-.311.725L14 8.55l-2.707-2.843C11.104 5.518 11 5.267 11 5s.104-.518.294-.708A.977.977 0 0111.979 4c.025.001.502.032 1.067.485.081.065.163.139.247.222l.707.707.707-.707c.084-.083.166-.157.247-.222.529-.425.976-.478 1.052-.484a.987.987 0 01.701.292c.189.189.293.44.293.707z" />
		</svg>
	);
}

export function IconCheck(props: SVGProps) {
	return (
		<svg
			fill="currentColor"
			viewBox="0 0 16 16"
			height="1em"
			width="1em"
			{...props}
		>
			<path d="M10.97 4.97a.75.75 0 011.07 1.05l-3.99 4.99a.75.75 0 01-1.08.02L4.324 8.384a.75.75 0 111.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 01.02-.022z" />
		</svg>
	);
}


export function IconHandPointUp(props: SVGProps) {
	return (
		<svg
			viewBox="0 0 448 512"
			fill="currentColor"
			height="1em"
			width="1em"
			{...props}
		>
			<path d="M376 192c-6.428 0-12.66.846-18.6 2.434C344.7 173.8 321.9 160 296 160c-6.428 0-12.66.846-18.6 2.434C264.7 141.8 241.9 128 216 128c-2.7 0-5.4.1-8 .4V72c0-39.7-32.3-72-72-72S64 32.3 64 72v196.3c-19.49 16.2-32 40.5-32 67.7v49.88c0 32.1 17.1 61.65 44.63 77.12l55.83 31.35C153.1 505.9 176.4 512 199.8 512h107.9c77.4 0 140.3-64.6 140.3-144V264c0-39.7-32.3-72-72-72zm-104 40c0-13.23 10.78-24 24-24s24 10.8 24 24v47.91c0 13.19-10.8 24.09-24 24.09s-24-10.8-24-24v-48zm-80-32c0-13.2 10.8-24 24-24s24 10.77 24 24v48c0 3.029-.701 5.875-1.73 8.545C227.9 251.3 216.4 248 204 248h-12v-48zM112 72c0-13.23 10.78-24 24-24s24 10.77 24 24v176h-40c-2.686 0-5.217.557-7.84.793.04-.293-.16-.493-.16-.793V72zm195.7 392H199.8c-15.25 0-30.41-3.984-43.88-11.52l-55.78-31.34C87.72 414.2 80 400.6 80 385.9V336c0-22.06 17.94-40 40-40h84c15.44 0 28 12.56 28 28s-12.6 28-28 28h-52c-13.2 0-24 10.8-24 24s10.75 24 24 24h52c33.23 0 61.25-21.58 71.54-51.36C282 350.7 288.9 352 296 352c5.041 0 9.836-1.166 14.66-2.178C322 374.6 346.1 392 376 392c7.684 0 14.94-1.557 21.87-3.836C388.9 431.4 351.9 464 307.7 464zM400 320c0 13.23-10.78 24-24 24s-24-10.8-24-24v-56c0-13.23 10.78-24 24-24s24 10.77 24 24v56z" />
		</svg>
	);
}

export function IconSplitCellsHorizontal(props: SVGProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			height="1em"
			width="1em"
			{...props}
		>
			<path fill="none" d="M0 0h24v24H0z" />
			<path d="M20 3a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h16zm-9 2H5v14h6v-4h2v4h6V5h-6v4h-2V5zm4 4l3 3-3 3v-2H9v2l-3-3 3-3v2h6V9z" />
		</svg>
	);
}