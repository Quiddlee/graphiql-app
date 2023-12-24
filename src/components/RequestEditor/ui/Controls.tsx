import { FC } from 'react';

import urlParams from '@shared/constants/urlParams';
import toastifyNotation from '@shared/helpers/toastifyNotation';
import cn from '@shared/lib/helpers/cn';
import useUrl from '@shared/lib/hooks/useUrl';
import { HandleExpand } from '@shared/types';
import Fab from '@shared/ui/Fab';
import FilledIconButton from '@shared/ui/FilledIconButton';
import Icon from '@shared/ui/Icon';

type ControlsProps = {
  onResponseOpen: HandleExpand;
  isHidden: boolean;
};

const Controls: FC<ControlsProps> = ({ onResponseOpen, isHidden }) => {
  const { readUrl } = useUrl();

  const handleCopyText = async () => {
    const query = readUrl(urlParams.QUERY);
    await navigator.clipboard.writeText(query);

    toastifyNotation('Request copied!');
  };

  return (
    <ul
      data-testid="controls"
      className={cn(
        'absolute right-6 top-7 grid origin-top-left content-start justify-items-center [animation-delay:450]',
      )}
    >
      <li
        className={cn('mb-3 hidden origin-bottom items-center justify-center lg:flex', {
          'animate-fade-in-standard [animation-delay:400ms]': !isHidden,
          'animate-fade-out-screen': isHidden,
        })}
      >
        <Fab data-testid="fab" variant="primary">
          <Icon slot="icon">play_arrow</Icon>
        </Fab>
      </li>
      <li
        className={cn('flex h-12 w-12 origin-bottom items-center justify-center', {
          'animate-fade-in-standard [animation-delay:450ms]': !isHidden,
          'animate-fade-out-screen': isHidden,
        })}
      >
        <FilledIconButton data-testid="copy-text" onClick={handleCopyText}>
          <Icon>content_copy</Icon>
        </FilledIconButton>
      </li>
      <li
        className={cn('flex h-12 w-12 origin-bottom items-center justify-center', {
          'animate-fade-in-screen [animation-delay:500ms]': !isHidden,
          'animate-fade-out-screen': isHidden,
        })}
      >
        <FilledIconButton data-testid="prettify">
          <Icon>mop</Icon>
        </FilledIconButton>
      </li>
      <li
        className={cn('hidden h-12 w-12 origin-bottom items-center justify-center lg:flex', {
          'animation-delay-600 animate-fade-in-screen': !isHidden,
          'animate-fade-out-screen': isHidden,
        })}
      >
        <FilledIconButton data-testid="open-response" onClick={() => onResponseOpen((prevState) => !prevState)}>
          <Icon>info</Icon>
        </FilledIconButton>
      </li>
    </ul>
  );
};

export default Controls;
