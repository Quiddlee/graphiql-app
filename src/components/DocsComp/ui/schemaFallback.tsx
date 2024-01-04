import { FC, SetStateAction } from 'react';

import DocsModalLayout from '@/layouts/DocsModalLayout';

import CloseDocsBtn from './CloseDocsBtn';

type PropsType = {
  closeModal: (value: SetStateAction<boolean>) => void;
};

const SchemaFallback: FC<PropsType> = ({ closeModal }) => {
  return (
    <DocsModalLayout>
      <CloseDocsBtn
        onClick={() => {
          closeModal((prev) => !prev);
        }}
        className="absolute right-[20px] top-[20px] z-20"
      />
      <div className="flex h-full w-full items-center p-6">
        <p className="w-full text-center text-on-surface">There is no schema at provided endpoint :(</p>
      </div>
    </DocsModalLayout>
  );
};

export default SchemaFallback;
