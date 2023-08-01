import SettingsContent from "@/components/SettingsContent";

export default function SettingsPage() {
	return (
		<main className="flex flex-col gap-3 sm:gap-6">
			<h1>Settings</h1>
			<SettingsContent />
		</main>
	)
}