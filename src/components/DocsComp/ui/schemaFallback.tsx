import { FC, SetStateAction } from 'react';

import CloseDocsBtn from './CloseDocsBtn';

type PropsType = {
  closeModal: (value: SetStateAction<boolean>) => void;
};

const SchemaFallaback: FC<PropsType> = ({ closeModal }) => {
  return (
    <div className="relative z-20 flex h-[100dvh] w-[270px] cursor-auto items-center rounded-r-[28px] bg-surface p-3 sm:w-[420px]">
      <CloseDocsBtn
        onClick={() => {
          closeModal((prev) => !prev);
        }}
        className="absolute right-[20px] top-[20px] z-20"
      />
      <p className="w-full p-6 text-center text-on-surface">There is no schema at provided endpoint :(</p>
    </div>
  );
};

export default SchemaFallaback;
