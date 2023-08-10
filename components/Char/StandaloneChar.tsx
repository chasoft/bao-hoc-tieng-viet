
export function StandaloneChar({ char }: { char: string }) {
	return (
		<div className="font-bold text-blue-900 text-[35vw] sm:text[50vw] md:text-[18rem] lg:text-[24rem]   leading-none grid place-content-center xl:text-[22rem] drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]">
			{char}
		</div>
	)
}