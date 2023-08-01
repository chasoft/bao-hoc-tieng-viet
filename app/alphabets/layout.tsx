export default function AlphabetsLayout({
	children,
	details,
	settings,
}: {
	children: React.ReactNode
	details: React.ReactNode
	settings: React.ReactNode
}) {
	return (
		<div className="w-full py-28 max-w-7xl">
			{children}
			{details}
			{settings}
		</div>
	)
}
