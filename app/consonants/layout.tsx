export default function ConsonantsLayout({
	children,
	modal,
}: {
	children: React.ReactNode
	modal: React.ReactNode
}) {
	return (
		<div>
			{children}
			{modal}
		</div>
	)
}
