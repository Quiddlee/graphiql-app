import { FC } from 'react';

import { useLanguage } from '@/shared/Context/hooks';
import FilledTextField from '@/shared/ui/FilledTextField';
import Icon from '@/shared/ui/Icon';
import IconButton from '@/shared/ui/IconButton';

type PropsType = {
  endpoint: string;
  saveEndpoint: (value: string) => void;
};

const EndpointComp: FC<PropsType> = ({ endpoint, saveEndpoint }) => {
  const { translation } = useLanguage();
  return (
    <div className="mt-6 flex items-center justify-between border-b-[1px] border-outline-variant pb-6">
      <div className="flex flex-col justify-between">
        <h4 className="text-[22px]">{translation.settingsPage.endpoint.title}</h4>
        <p className="mt-4">{translation.settingsPage.endpoint.subtitle}</p>
      </div>
      <FilledTextField
        className="relative h-[68px] w-[360px] text-base"
        label="API endpoint"
        value={endpoint}
        name="endpoint"
        onChange={(e) => saveEndpoint((e?.target as HTMLInputElement).value)}
      >
        <IconButton className="absolute right-0 top-[10px]" slot="trailing-icon" onClick={() => saveEndpoint('')}>
          <Icon>cancel</Icon>
        </IconButton>
      </FilledTextField>
    </div>
  );
};

export default EndpointComp;
