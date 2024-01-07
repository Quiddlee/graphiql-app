import { FC, SetStateAction } from 'react';

import DocsModalLayout from '@/layouts/DocsModalLayout';
import Icon from '@/shared/ui/Icon';
import IconButton from '@/shared/ui/IconButton';

type PropsType = {
  closeModal: (value: SetStateAction<boolean>) => void;
  text: string;
};

const SchemaFallbackUi: FC<PropsType> = ({ closeModal, text }) => {
  return (
    <DocsModalLayout>
      <IconButton
        onClick={() => {
          closeModal((prev) => !prev);
        }}
        className="absolute right-[20px] top-[20px] z-20"
        data-testid="closeDocs"
      >
        <Icon>close</Icon>
      </IconButton>
      <div className="flex h-full w-full items-center p-6">
        <p className="w-full text-center text-on-surface">{text}</p>
      </div>
    </DocsModalLayout>
  );
};

export default SchemaFallbackUi;
