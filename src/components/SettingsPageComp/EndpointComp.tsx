import { FC } from 'react';

import FilledTextField from '@/shared/ui/FilledTextField';
import Icon from '@/shared/ui/Icon';
import IconButton from '@/shared/ui/IconButton';

type PropsType = {
  endpoint: string;
  saveEndpoint: (value: string) => void;
};

const EndpointComp: FC<PropsType> = ({ endpoint, saveEndpoint }) => {
  return (
    <div className="mt-6 flex items-center justify-between border-b-[1px] border-outline-variant pb-6">
      <div className="flex flex-col justify-between">
        <h4 className="text-[22px]">Dark mode</h4>
        <p className="mt-4">Adjust how the interface looks like.</p>
      </div>
      <FilledTextField
        className="relative"
        label="API endpoint"
        value={endpoint}
        name="endpoint"
        onChange={(e) => saveEndpoint((e?.target as HTMLInputElement).value)}
      >
        <IconButton slot="trailing-icon" onClick={() => saveEndpoint('')}>
          <Icon>cancel</Icon>
        </IconButton>
      </FilledTextField>
    </div>
  );
};

export default EndpointComp;
