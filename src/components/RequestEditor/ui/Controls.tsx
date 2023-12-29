import { FC, HTMLAttributes } from 'react';

import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import useLanguage from '@/shared/Context/hooks';
import ROUTES from '@shared/constants/routes';
import urlParams from '@shared/constants/urlParams';
import cn from '@shared/lib/helpers/cn';
import useScreen from '@shared/lib/hooks/useScreen';
import useUrl from '@shared/lib/hooks/useUrl';
import { HandleExpand } from '@shared/types';
import Fab from '@shared/ui/Fab';
import FilledIconButton from '@shared/ui/FilledIconButton';
import Icon from '@shared/ui/Icon';

type ControlsProps = HTMLAttributes<HTMLUListElement> & {
  onResponseOpen?: HandleExpand;
  isHidden?: boolean;
};

const Controls: FC<ControlsProps> = ({ onResponseOpen, isHidden, className }) => {
  const { readUrl } = useUrl();
  const screenType = useScreen();
  const { translation } = useLanguage();
  const { copy, play, prettify, openResp } = translation.mainPage.requestEditor.controlsTooltips;
  const isAnimationsDisabled = screenType === 'tablet' || screenType === 'mobile';

  const { pathname } = useLocation();

  if (pathname.slice(1) !== ROUTES.MAIN) return null;

  const handleCopyText = async () => {
    const query = readUrl(urlParams.QUERY);
    await navigator.clipboard.writeText(query);

    toast(<p className="text-center">Request copied!</p>);
  };

  return (
    <ul
      data-testid="controls"
      className={cn('grid origin-top-left content-start justify-items-center [animation-delay:450]', className)}
    >
      <li
        className={cn('row-start-3 mb-3 origin-bottom items-center justify-center sm:row-start-1 sm:hidden lg:flex', {
          'animate-fade-in-standard [animation-delay:400ms]': !isHidden && !isAnimationsDisabled,
          'animate-fade-out-screen': isHidden,
        })}
      >
        <Fab data-testid="fab" variant="primary" data-tooltip={play} className="tooltipElem">
          <Icon slot="icon">play_arrow</Icon>
        </Fab>
      </li>
      <li
        className={cn('flex h-12 w-12 origin-bottom items-center justify-center', {
          'animate-fade-in-standard [animation-delay:450ms]': !isHidden && !isAnimationsDisabled,
          'animate-fade-out-screen': isHidden,
        })}
      >
        <FilledIconButton data-testid="copy-text" onClick={handleCopyText} data-tooltip={copy} className="tooltipElem">
          <Icon>content_copy</Icon>
        </FilledIconButton>
      </li>
      <li
        className={cn('flex h-12 w-12 origin-bottom items-center justify-center', {
          'animate-fade-in-screen [animation-delay:500ms]': !isHidden && !isAnimationsDisabled,
          'animate-fade-out-screen': isHidden,
        })}
      >
        <FilledIconButton data-testid="prettify" data-tooltip={prettify} className="tooltipElem">
          <Icon>mop</Icon>
        </FilledIconButton>
      </li>
      <li
        className={cn('hidden h-12 w-12 origin-bottom items-center justify-center lg:flex', {
          'animation-delay-600 animate-fade-in-screen': !isHidden && !isAnimationsDisabled,
          'animate-fade-out-screen': isHidden,
        })}
      >
        <FilledIconButton
          data-testid="open-response"
          onClick={() => onResponseOpen?.((prevState) => !prevState)}
          data-tooltip={openResp}
          className="tooltipElem"
        >
          <Icon>info</Icon>
        </FilledIconButton>
      </li>
    </ul>
  );
};

export default Controls;
