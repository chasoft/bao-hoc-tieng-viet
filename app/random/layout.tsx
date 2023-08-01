export default function RandomLayout({
	children,
	details,
	settings,
}: {
	children: React.ReactNode
	details: React.ReactNode
	settings: React.ReactNode
}) {
	return (
		<div className="w-full">
			{children}
			{details}
			{settings}
		</div>
	)
}
