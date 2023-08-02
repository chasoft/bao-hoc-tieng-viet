export default function VowelsLayout({
	children,
	details,
	settings,
}: {
	children: React.ReactNode
	details: React.ReactNode
	settings: React.ReactNode
}) {
	return (
		<div className="w-full px-3 py-20 mx-auto md:py-28 max-w-7xl md:px-6">
			{children}
			{details}
			{settings}
		</div>
	)
}
