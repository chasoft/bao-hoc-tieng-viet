"use client"

import React from "react"
import { useCountdown } from "usehooks-ts"

type CountDownTimerProps = {
	value: number,
}

export default function CountDownTimer({ value }: CountDownTimerProps) {
	const [count, { startCountdown, stopCountdown, resetCountdown }] =
		useCountdown({
			countStart: 60,
			intervalMs: 1000,
		})

	React.useEffect(() => {
		startCountdown()
		return () => {
			stopCountdown()
		}
	}, [startCountdown, stopCountdown])

	return (
		<div className="fixed right-2 top-16">
			<h1>{count}</h1>
		</div>
	)
}