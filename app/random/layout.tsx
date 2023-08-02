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
		<div className="w-full px-3 overflow-hidden py-28 md:px-6">
			{children}
			{details}
			{settings}
		</div>
	)
}
