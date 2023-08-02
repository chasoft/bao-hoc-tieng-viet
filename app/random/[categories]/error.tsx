"use client"

import Tooltip from "@/components/Tooltip"
import { WORD_CATEGORY } from "@/data"
import { urls } from "@/data/settings"
import Link from "next/link"

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
	return (
		<div className="flex flex-col gap-8 p-12 text-xl bg-red-300 rounded-xl">
			<h1>{error.message}</h1>
			<div className="flex flex-col gap-4">
				<span>Các chủ đề đang có sẵn</span>
				<div className="flex flex-wrap gap-3 md:gap-6">
					{Object.entries(WORD_CATEGORY).map(([key, { title, desc }]) => (
						<div key={key} className="px-4 py-2 text-lg md:text-2xl rounded-full border-[1px] border-slate-800 hover:bg-slate-200 cursor-pointer transition-all">
							<Tooltip tooltip={desc}>
								<Link href={urls.random.details([key])}>
									{title}
								</Link>
							</Tooltip>
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-end gap-4">
				<button
					onClick={() => reset()}
					className="btn btn-outline"
				>
					Thử lại
				</button>
				<Link
					className="btn btn-neutral"
					href={urls.random.url}
				>
					Về lại trang Chữ Ngẫu Nhiên
				</Link>
			</div>
		</div >
	)
}