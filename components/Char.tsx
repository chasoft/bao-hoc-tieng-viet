"user client"

import { TChar } from "@/data"
import clsx from "clsx"

function StandaloneChar({ char }: { char: string }) {
	return (
		<div className="font-bold text-blue-900 text-[60vw] sm:text[50vw] md:text-[18rem] lg:text-[24rem] leading-none grid place-content-center">
			{char.toUpperCase()}
		</div>
	)
}

function GridItemChar({ char }: { char: string }) {
	return (
		<div className={clsx(
			{ "text-[45vw]": char.length === 1 },
			{ "text-[45vw]": char.length === 2 },
			{ "text-[40vw]": char.length === 3 },
			"sm:text-[28vw] md:text-[6.5rem] lg:text-[6rem] font-bold text-blue-900 w-full text-center overflow-hidden leading-none",
			"grid place-content-center pb-6",
			{ "col-span-2": char.length > 2 }
		)}>
			{char.toUpperCase()}
		</div>
	)
}

type CharProps = {
	value: TChar,
	hasCompoundChar?: boolean,
	standaloneChar?: boolean,
}

export default function Char({
	value: { char, reading },
	hasCompoundChar,
	standaloneChar = true
}: CharProps) {
	const hasReading = char !== reading

	const CharContent = (
		<div className={clsx(
			"relative grid p-1 text-center transition-all border-4 border-black cursor-pointer hover:border-orange-800 rounded-3xl hover:bg-orange-300 bg-slate-300 aspect-square"
		)}>
			{standaloneChar
				? <StandaloneChar char={char} />
				: <GridItemChar char={char} />}
			<div className="absolute bottom-0 left-0 right-0 flex items-end px-3 pb-3 text-2xl leading-normal md:px-6 lg:px-2 md:text-3xl">
				<div className="font-semibold text-orange-900">
					{char}
				</div>
				<div className={clsx(
					"ml-auto",
					{ "lg:text-2xl": reading.length > 5 }
				)}>
					{hasReading ? reading : ""}
				</div>
			</div>
		</div >
	)

	if (standaloneChar) {
		return (
			<div>
				{CharContent}
			</div>
		)
	}

	return <>{CharContent}</>
}