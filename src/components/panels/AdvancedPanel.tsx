import type { Settings } from "../../store";
import AdvancedPanelLayout from "./AdvancedPanelLayout";
import { useTranslation } from "../../i18n";

interface Props {
  settings: Settings;
  update: (patch: Partial<Settings>) => void;
  onPickPosition: () => Promise<void>;
}

export default function AdvancedPanel({
  settings,
  update,
  onPickPosition,
}: Props) {
  const t = useTranslation(settings.language);

  return (
    <AdvancedPanelLayout
      settings={settings}
      update={update}
      onPickPosition={onPickPosition}
      compact={false}
      showExplanations
      title={t("advancedSettings")}
    />
  );
}
