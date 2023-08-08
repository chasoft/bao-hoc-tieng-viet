import React from "react"

type TextResizeProps = {
	children: React.ReactNode
}
export default function TextResize({ children }: TextResizeProps) {
	const resizeLayer = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		const targetEl = resizeLayer.current ?? document.body
		const elObserver = new ResizeObserver((entries) => {
			// Apply for the very first entry in the list only
			(entries[0].target as HTMLDivElement).style.setProperty("--random-word-font-size", "1em");

			const { width: max_width, height: max_height } =
				entries[0].target.parentElement?.getBoundingClientRect() ?? { width: 0, height: 0 };

			const { width, height } = entries[0].target.getBoundingClientRect();

			(entries[0].target as HTMLDivElement).style.setProperty(
				"--random-word-font-size",
				Math.min(max_width / width, max_height / height) + "em"
			);
		})
		elObserver.observe(targetEl)
		return () => {
			elObserver.unobserve(targetEl)
		}
	}, [])

	return (
		<div className="flex items-center justify-center w-full h-full max-w-7xl">
			<div id="resizeLayer" ref={resizeLayer} className="h-fit w-fit text-[length:var(--random-word-font-size)]">
				{children}
			</div >
		</div>
	)
}