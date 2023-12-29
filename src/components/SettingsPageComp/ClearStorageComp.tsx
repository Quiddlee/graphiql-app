import { useState } from 'react';

import useLanguage from '@/shared/Context/hooks';
import FilledTonalButton from '@/shared/ui/FilledTonalButton';

import ConfirmModal from './ConfirmModal';

const ClearStorageComp = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const { translation } = useLanguage();

  return (
    <>
      <div className="mt-6 flex items-center justify-between pb-6">
        <div className="flex flex-col justify-between">
          <h4 className="text-[22px]">{translation.settingsPage.clear.title}</h4>
          <p className="mt-4">{translation.settingsPage.clear.subtitle}</p>
        </div>
        <FilledTonalButton data-clear-btn className="text-primary" onClick={() => setIsModalShown((prev) => !prev)}>
          {translation.settingsPage.clear.btn}
        </FilledTonalButton>
      </div>
      <ConfirmModal
        open={isModalShown}
        setIsShown={setIsModalShown}
        locales={{ ...translation.settingsPage.clear.modal, ...translation.settingsPage.clear.undo }}
      />
    </>
  );
};

export default ClearStorageComp;
