import { useState } from 'react';

import DarkModeComp from '@/components/SettingsPageComp/DarkModeComp';
import EndpointComp from '@/components/SettingsPageComp/EndpointComp';
import LangSelectorComp from '@/components/SettingsPageComp/LangSelectorComp';
import useLanguage from '@/shared/Context/hooks';
import PersistHeaderComp from '@components/SettingsPageComp/PersistHeadersComp';

const SettignsPage = () => {
  const [settingsState, setSettingsState] = useState({
    headers: true,
    darkmode: true,
    endpoint: 'goods',
  });
  const { language, changeLanguage } = useLanguage();
  return (
    <section className="rounded-3xl bg-surface-container p-7">
      <div className="w-[663px] font-[500] text-on-surface">
        <PersistHeaderComp
          checked={settingsState.headers}
          switcher={() => setSettingsState((prev) => ({ ...prev, headers: !prev.headers }))}
        />
        <DarkModeComp
          checked={settingsState.darkmode}
          switcher={() => setSettingsState((prev) => ({ ...prev, darkmode: !prev.darkmode }))}
        />
        <EndpointComp
          endpoint={settingsState.endpoint}
          saveEndpoint={(value: string) => setSettingsState((prev) => ({ ...prev, endpoint: value }))}
        />
        <LangSelectorComp language={language} changeLanguage={changeLanguage} />
      </div>
    </section>
  );
};

export default SettignsPage;
// setSettingsState((prev) => ({ ...prev, headers: !prev.headers }))
