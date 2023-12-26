import { useState } from 'react';

import FilledTonalButton from '@/shared/ui/FilledTonalButton';

import ConfirmModal from './ConfirmModal';
import ConfirmOverlay from './ConfirmOverlay';

const ClearStorageComp = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <>
      <div className="mt-6 flex items-center justify-between pb-6">
        <div className="flex flex-col justify-between">
          <h4 className="text-[22px]">Clear storage</h4>
          <p className="mt-4">Remove all locally stored data.</p>
        </div>
        <FilledTonalButton data-clear-btn className="text-primary" onClick={() => setIsModalShown((prev) => !prev)}>
          Clear data
        </FilledTonalButton>
      </div>
      <ConfirmOverlay isShown={isModalShown} setIsShown={setIsModalShown}>
        <ConfirmModal setIsShown={setIsModalShown} />
      </ConfirmOverlay>
    </>
  );
};

export default ClearStorageComp;
