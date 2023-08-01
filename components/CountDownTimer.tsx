"use client"

import { useRouter } from "next/navigation"
import React from "react"
import { useCountdown } from "usehooks-ts"

type CountDownTimerProps = {
	value: number,
	callback?: Function,
}

export default function CountDownTimer({ value, callback }: CountDownTimerProps) {
	const router = useRouter()

	const [count, { startCountdown, stopCountdown, resetCountdown }] =
		useCountdown({
			countStart: 20,
			intervalMs: 1000,
		})

	React.useEffect(() => {
		startCountdown()
		return () => {
			stopCountdown()
		}
	}, [startCountdown, stopCountdown])

	React.useEffect(() => {
		if (count === 0) {
			resetCountdown()
			startCountdown()
			callback && callback()
		}
	}, [count, resetCountdown, router, startCountdown])

	return (
		<div className="fixed right-4 top-14 sm:top-[68px]">
			<span className="text-2xl font-bold text-blue-900">{count}</span>
		</div>
	)
}