import { FC } from 'react';

import DocsModalLayout from '@/layouts/DocsModalLayout';
import Spinner from '@/shared/ui/Spinner';

type PropsType = { text: string };

const DocsLoader: FC<PropsType> = ({ text }) => {
  return (
    <DocsModalLayout>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Spinner indeterminate />
        <p className="mt-10 text-on-surface">{text}</p>
      </div>
    </DocsModalLayout>
  );
};

export default DocsLoader;
