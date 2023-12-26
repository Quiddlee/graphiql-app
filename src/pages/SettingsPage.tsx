import { useState } from 'react';

import { ToastContainer } from 'react-toastify';

import ClearStorageComp from '@/components/SettingsPageComp/ClearStorageComp';
import DarkModeComp from '@/components/SettingsPageComp/DarkModeComp';
import EndpointComp from '@/components/SettingsPageComp/EndpointComp';
import LangSelectorComp from '@/components/SettingsPageComp/LangSelectorComp';
import PersistHeaderComp from '@components/SettingsPageComp/PersistHeadersComp';

const SettignsPage = () => {
  const [settingsState, setSettingsState] = useState({
    headers: true,
    endpoint: 'goods',
  });

  return (
    <section className="rounded-3xl bg-surface-container p-7">
      <div className="w-[663px] font-[500] text-on-surface">
        <PersistHeaderComp
          checked={settingsState.headers}
          switcher={() => setSettingsState((prev) => ({ ...prev, headers: !prev.headers }))}
        />
        <DarkModeComp />
        <EndpointComp
          endpoint={settingsState.endpoint}
          saveEndpoint={(value: string) => setSettingsState((prev) => ({ ...prev, endpoint: value }))}
        />
        <LangSelectorComp />
        <ClearStorageComp />
      </div>
      <ToastContainer
        closeOnClick={false}
        closeButton={false}
        autoClose={2000}
        hideProgressBar
        pauseOnHover={false}
        position="bottom-center"
      />
    </section>
  );
};

export default SettignsPage;
