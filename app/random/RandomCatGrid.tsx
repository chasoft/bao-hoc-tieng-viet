"use client"

import { WORD_CATEGORY } from "@/data"
import { urls } from "@/data/settings"
import Link from "next/link"

export default function RandomCategoryGrid() {
	return (
		<div className="grid grid-cols-2 gap-3 md:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{Object.entries(WORD_CATEGORY).map(([key, { title, desc }]) => (
				<div
					key={key}
					className="relative shadow-xl aspect-square card bg-base-100 image-full group"
				>
					<figure>
						<div
							className="w-full h-full bg-fixed"
							style={{ backgroundImage: "url(https://images.unsplash.com/photo-1690860131818-6794aa1e0ff7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1871&q=80)" }}
						></div>
					</figure>
					<div className="card-body">
						<h2 className="card-title">{title}</h2>
						<p>{desc}</p>
					</div>
					<Link
						className="absolute inset-0 z-20 opacity-0 group-hover:outline-2"
						href={urls.random.details([key])}
					>
						overlayLink
					</Link>
				</div>
			))
			}
		</div >
	)
}