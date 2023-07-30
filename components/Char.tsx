"user client"

import { TChar } from "@/data"

type CharProps = {
	value: TChar
}

export default function Char({ value: { char, reading } }: CharProps) {
	const hasReading = char !== reading
	return (
		<div className="aspect-square">
			<div className="grid p-8 text-center transition-all border-8 border-black cursor-pointer lg:p-12 aspect-square hover:border-orange-800 lg:border-4 rounded-3xl hover:bg-orange-300 bg-slate-300">
				<div className="font-bold text-blue-900 text-[16rem] md:text-[20rem] lg:text-[24rem] leading-none">
					{char.toUpperCase()}
				</div>
				<div className="flex items-end text-2xl leading-normal md:text-3xl lg:text-4xl">
					<div className="font-semibold text-orange-900">{char}</div>
					<div className="ml-auto">{hasReading ? reading : ""}</div>
				</div>
			</div>
		</div>
	)
}