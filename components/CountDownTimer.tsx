"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { useCountdown } from "usehooks-ts"

type CountDownTimerProps = {
	value: number,
	callback?: Function,
}

export default function CountDownTimer({ value, callback }: CountDownTimerProps) {
	const router = useRouter()

	const [count, { startCountdown, stopCountdown, resetCountdown }] =
		useCountdown({
			countStart: value,
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
	}, [callback, count, resetCountdown, router, startCountdown])

	return (
		<div className="fixed right-2 top-14 sm:top-[74px]">
			<span className="font-bold text-white aspect-square badge badge-primary badge-lg">
				{count}</span>
		</div>
	)
}