export default function AlphabetsLayout({
	children,
	modal,
}: {
	children: React.ReactNode
	modal: React.ReactNode
}) {
	return (
		<div className="w-full">
			{children}
			{modal}
		</div>
	)
}
