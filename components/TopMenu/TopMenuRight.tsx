import { FontButton } from "./FontButton";
import { SettingsButton } from "./SettingsButton";
import { SplitterModeButton } from "./SplitterModeButton";
import { TopMenuRightPopup } from "./TopMenuRightPopup";

export function TopMenuRight() {
	return (
		<div className="flex items-center">
			<FontButton className="hidden sm:block" />
			<SplitterModeButton className="hidden sm:block" />
			<SettingsButton className="hidden sm:block" />
			<TopMenuRightPopup className="sm:hidden" />
		</div>
	)
}