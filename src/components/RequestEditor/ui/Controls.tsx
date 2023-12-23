import { FC } from 'react';

import urlParams from '@shared/constants/urlParams';
import toastifyNotation from '@shared/helpers/toastifyNotation';
import useUrl from '@shared/lib/hooks/useUrl';
import { HandleExpand } from '@shared/types';
import Fab from '@shared/ui/Fab';
import FilledIconButton from '@shared/ui/FilledIconButton';
import Icon from '@shared/ui/Icon';

type ControlsProps = {
  onResponseOpen: HandleExpand;
};

const Controls: FC<ControlsProps> = ({ onResponseOpen }) => {
  const { readUrl } = useUrl();

  const handleCopyText = async () => {
    const query = readUrl(urlParams.QUERY);
    await navigator.clipboard.writeText(query);

    toastifyNotation('Request copied!');
  };

  return (
    <ul data-testid="controls" className="absolute right-6 top-7 grid content-start justify-items-center">
      <li className="mb-3 flex items-center justify-center">
        <Fab data-testid="fab" variant="primary">
          <Icon slot="icon">play_arrow</Icon>
        </Fab>
      </li>
      <li className="flex h-12 w-12 items-center justify-center">
        <FilledIconButton data-testid="copy-text" onClick={handleCopyText}>
          <Icon>content_copy</Icon>
        </FilledIconButton>
      </li>
      <li className="flex h-12 w-12 items-center justify-center">
        <FilledIconButton data-testid="prettify">
          <Icon>mop</Icon>
        </FilledIconButton>
      </li>
      <li className="flex h-12 w-12 items-center justify-center">
        <FilledIconButton data-testid="open-response" onClick={() => onResponseOpen((prevState) => !prevState)}>
          <Icon>info</Icon>
        </FilledIconButton>
      </li>
    </ul>
  );
};

export default Controls;
