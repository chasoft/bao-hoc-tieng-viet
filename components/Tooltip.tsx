"use client"

import clsx from "clsx"

type TooltipProps = {
	tooltip?: string
	open?: boolean
	direction?: "top" | "bottom" | "left" | "right"
	children: React.ReactNode
}

export default function Tooltip({ tooltip, direction, open, children }: TooltipProps) {
	if (tooltip)
		return (
			<div
				className={clsx(
					"tooltip",
					{ "tooltip-open": open },
					{ "tooltip-top": direction === "top" },
					{ "tooltip-bottom": direction === "bottom" },
					{ "tooltip-left": direction === "left" },
					{ "tooltip-right": direction === "right" },
				)}
				data-tip={tooltip}
			>
				{children}
			</div>
		)

	return children
}