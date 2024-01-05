import { useAppContext, useLanguage } from '@/shared/Context/hooks';
import FilledTextField from '@/shared/ui/FilledTextField';
import Icon from '@/shared/ui/Icon';
import IconButton from '@/shared/ui/IconButton';

const EndpointComp = () => {
  const { translation } = useLanguage();
  const { currEndpoint, setCurrEndpoint } = useAppContext();
  return (
    <div className="mt-6 flex flex-col items-center justify-between border-b-[1px] border-outline-variant pb-6 sm:flex-row">
      <div className="flex w-full flex-col items-start justify-between">
        <h4 className="text-sm sm:text-[22px]">{translation.settingsPage.endpoint.title}</h4>
        <p className="mt-4">{translation.settingsPage.endpoint.subtitle}</p>
      </div>
      <FilledTextField
        className="relative ml-auto mt-4 h-[68px] w-full max-w-[360px] text-base sm:mt-0"
        label="API endpoint"
        value={currEndpoint}
        name="endpoint"
        onChange={(e) => setCurrEndpoint((e?.target as HTMLInputElement).value)}
      >
        <IconButton className="absolute right-0 top-[10px]" slot="trailing-icon" onClick={() => setCurrEndpoint('')}>
          <Icon>cancel</Icon>
        </IconButton>
      </FilledTextField>
    </div>
  );
};

export default EndpointComp;
