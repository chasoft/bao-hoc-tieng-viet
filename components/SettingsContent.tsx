"use client"

import { DEFAULT_SETTINGS } from "@/data/settings"
import clsx from "clsx"
import { useLocalStorage } from "usehooks-ts"

const timerValues = [10, 20, 30, 40, 50, 60, 120, 200]

export default function SettingsContent() {
	const [timer, setTimer] = useLocalStorage(
		DEFAULT_SETTINGS.countdownTimer.name,
		DEFAULT_SETTINGS.countdownTimer.value
	)
	return (
		<div className="flex flex-col gap-4 p-10 bg-green-100 lg:gap-6 rounded-2xl">
			<div>Thời gian đếm ngược để đổi chữ</div>
			<div className="grid grid-cols-4 gap-2 md:grid-cols-8">
				{timerValues.map(t => (
					<div
						key={t}
						className={clsx(
							"grid place-content-center aspect-square rounded-lg border-[1px] border-black hover:bg-blue-200 active:bg-blue-300 cursor-pointer",
							{ "bg-blue-300": t === timer }
						)}
						onClick={() => setTimer(t)}
					>
						{`${t} giây`}
					</div>
				))}
			</div>
		</div>
	)
}