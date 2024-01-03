import { FC, HTMLAttributes } from 'react';

import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import submitRequest from '@/components/Editor/lib/submitRequest';
import { useAppContext, useLanguage } from '@/shared/Context/hooks';
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
  const { updateCurrentResponse, prettifyEditors } = useAppContext();
  const { readUrl } = useUrl();
  const screenType = useScreen();
  const { translation } = useLanguage();
  const {
    controlsTooltips: { copy, play, prettify, openResp },
    snackbar: { copy: copySnackbar },
  } = translation.mainPage.requestEditor;
  const { pathname } = useLocation();

  const isAnimationsDisabled = screenType === 'tablet' || screenType === 'mobile';
  if (pathname.slice(1) !== ROUTES.MAIN) return null;

  const handleCopyText = async () => {
    const query = readUrl(urlParams.QUERY);
    await navigator.clipboard.writeText(query);
    toast(copySnackbar);
  };

  const handleSubmitRequest = async () => {
    const query = readUrl(urlParams.QUERY);
    const variables = readUrl(urlParams.VARIABLES);
    const headers = readUrl(urlParams.HEADERS);
    const response = await submitRequest(query, variables, headers);
    updateCurrentResponse(JSON.stringify(response));
  };

  const handlePrettifier = () => {
    prettifyEditors(true);
  };

  return (
    <ul
      data-testid="controls"
      className={cn('grid origin-top-left content-start justify-items-center [animation-delay:450]', className)}
    >
      <li
        data-tooltip={play}
        className={cn(
          'tooltipElem row-start-3 mb-3 origin-bottom items-center justify-center sm:row-start-1 sm:hidden lg:flex',
        )}
      >
        <Fab
          data-testid="fab"
          variant="primary"
          className={cn({
            'animate-fade-in-standard [animation-delay:400ms]': !isHidden && !isAnimationsDisabled,
            'animate-fade-out-screen': isHidden,
          })}
          onClick={handleSubmitRequest}
        >
          <Icon slot="icon">play_arrow</Icon>
        </Fab>
      </li>
      <li data-tooltip={copy} className={cn('tooltipElem flex h-12 w-12 origin-bottom items-center justify-center')}>
        <FilledIconButton
          data-testid="copy-text"
          onClick={handleCopyText}
          className={cn({
            'animate-fade-in-standard [animation-delay:450ms]': !isHidden && !isAnimationsDisabled,
            'animate-fade-out-screen': isHidden,
          })}
        >
          <Icon>content_copy</Icon>
        </FilledIconButton>
      </li>
      <li
        data-testid="prettify"
        data-tooltip={prettify}
        className={cn('tooltipElem flex h-12 w-12 origin-bottom items-center justify-center')}
      >
        <FilledIconButton
          onClick={handlePrettifier}
          className={cn({
            'animate-fade-in-screen [animation-delay:500ms]': !isHidden && !isAnimationsDisabled,
            'animate-fade-out-screen': isHidden,
          })}
        >
          <Icon>mop</Icon>
        </FilledIconButton>
      </li>
      <li
        data-testid="open-response"
        data-tooltip={openResp}
        className={cn('tooltipElem hidden h-12 w-12 origin-bottom items-center justify-center lg:flex')}
      >
        <FilledIconButton
          onClick={() => onResponseOpen?.((prevState) => !prevState)}
          className={cn({
            'animation-delay-600 animate-fade-in-screen': !isHidden && !isAnimationsDisabled,
            'animate-fade-out-screen': isHidden,
          })}
        >
          <Icon>info</Icon>
        </FilledIconButton>
      </li>
    </ul>
  );
};

export default Controls;
