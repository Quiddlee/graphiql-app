import { FC } from 'react';

import DocsModalLayout from '@/layouts/DocsModalLayout';

type PropsType = {
  text: {
    partOne: string;
    partTwo: string;
  };
};

const DocsFallback: FC<PropsType> = ({ text }) => {
  const { partOne, partTwo } = text;
  return (
    <DocsModalLayout>
      <div className="flex h-full w-full items-center justify-center">
        <p className="p-6 text-center">
          {partOne} <br />
          <br />
          {partTwo}
        </p>
      </div>
    </DocsModalLayout>
  );
};

export default DocsFallback;
