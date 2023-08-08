import { useInit } from "@/hooks/useInit"
import React from "react"

type TextResizeProps = {
	updateKey: string
	children: React.ReactNode
}
export default function TextResize({ children, updateKey }: TextResizeProps) {
	const resizeLayer = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		if (resizeLayer.current) {
			resizeLayer.current.style.setProperty("--random-word-font-size", "1em");
			const { width: max_width, height: max_height } =
				resizeLayer.current.parentElement?.getBoundingClientRect()
				?? { width: 0, height: 0 };
			const { width, height } = resizeLayer.current.children[0].getBoundingClientRect();
			resizeLayer.current.style.setProperty("--random-word-font-size", Math.min(max_width / width, max_height / height) + "em");
			console.log({ width, height, max_height, max_width });
		}
	}, [updateKey])

	return (
		<div className="flex justify-center w-full h-full">
			<div id="resizeLayer" ref={resizeLayer} className="text-[length:var(--random-word-font-size)]">
				{children}
			</div >
		</div>
	)
}