"use client"

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
	return (
		<div className="p-12 bg-red-300 rounded-xl">
			<h2>{error.message}</h2>
			<div className="">
				{/* TODO: Tag List... create tag component... list all 
				
				categories which the app is now having
				
				*/}
			</div>
			<button
				onClick={() => reset()}
				className="px-2 py-1 mt-6 bg-red-100 border-red-500 hover:bg-red-200"
			>
				Thử lại
			</button>
		</div>
	)
}