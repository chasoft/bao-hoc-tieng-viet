export default function MathsLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className="w-full h-full px-3 py-20 overflow-hidden md:py-28 md:px-6">
			{children}
		</div>
	)
}
