import { useState } from 'react';

import Footer from '@/components/Footer/Footer';
import ClearStorageComp from '@/components/SettingsPageComp/ClearStorageComp';
import DarkModeComp from '@/components/SettingsPageComp/DarkModeComp';
import EndpointComp from '@/components/SettingsPageComp/EndpointComp';
import LangSelectorComp from '@/components/SettingsPageComp/LangSelectorComp';
import PersistHeaderComp from '@components/SettingsPageComp/PersistHeadersComp';
import useScrollbar from '@shared/lib/hooks/useScrollbar';

const SettignsPage = () => {
  const [settingsState, setSettingsState] = useState({
    headers: true,
  });
  const root = useScrollbar();

  return (
    <section
      ref={root}
      className="col-start-1 col-end-2 row-start-2 row-end-3 mx-2 origin-bottom-right animate-fade-in-section overflow-scroll rounded-3xl bg-surface-container p-4 sm:col-start-2 sm:col-end-3 sm:row-end-4 sm:mx-0 sm:p-7"
    >
      <div className="max-w-[663px] font-[500] text-on-surface">
        <PersistHeaderComp
          checked={settingsState.headers}
          switcher={() => setSettingsState((prev) => ({ ...prev, headers: !prev.headers }))}
        />
        <DarkModeComp />
        <EndpointComp />
        <LangSelectorComp />
        <ClearStorageComp />
        <div className="mb-4 flex h-fit w-full justify-center border-t-[1px] border-outline-variant pt-6 lg:hidden">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default SettignsPage;
