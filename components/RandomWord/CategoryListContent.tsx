"use client"

import React from "react"
import clsx from "clsx"
import { urls } from "@/data/settings"
import { TWordCategory, WORD_CATEGORY } from "@/data"

export type selectedCategoriesType = Partial<Record<TWordCategory, boolean>>

type CategoryListContentProps = {
	selectedCategories: selectedCategoriesType
	onClickCheckbox: (cat: TWordCategory) => void,
}

export function CategoryListContent({ selectedCategories, onClickCheckbox }: CategoryListContentProps) {
	return (
		<ul tabIndex={0} className="dropdown-content z-20 border-2 border-black p-0 menu bg-base-100 w-[99vw] sm:max-w-sm max-h-[80svh] overflow-y-auto flex-nowrap">
			{(Object.entries(WORD_CATEGORY) as [TWordCategory, { title: string, desc: string }][])
				.map(([key, { title, desc }]) => {
					return (
						<li
							key={key}
							className={clsx(
								"relative border-gray-200 border-b-[1px]",
								{ "bg-gray-100": selectedCategories[key] }
							)}
						>
							<a
								className="flex flex-col items-start rounded-none sm:py-3"
								href={urls.random.details([key])}
							>
								<span className="text-xl">
									{title}
								</span>
								{!!desc &&
									<span className="text-base italic leading-none text-slate-600">
										{desc}
									</span>}
							</a>
							<div className={clsx(
								"absolute right-0",
								{ "top-3": !!desc }
							)}>
								<div className="form-control">
									<label className="cursor-pointer label">
										<input
											type="checkbox"
											checked={selectedCategories[key] ?? false}
											className="checkbox checkbox-sm"
											onChange={() => { onClickCheckbox(key) }}
										/>
									</label>
								</div>
							</div>
						</li>
					)
				})}
		</ul>
	)
}