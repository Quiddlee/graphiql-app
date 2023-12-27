import { FC, useEffect, useRef } from 'react';

import Footer from '@components/Footer/Footer';
import cn from '@shared/lib/helpers/cn';
import useScrollbar from '@shared/lib/hooks/useScrollbar';
import { HandleExpand } from '@shared/types';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';

const PLACEHOLDER_TEXT = `{
  "errors": [
    {
      "message": "Syntax Error: te",
      "locations": [
        {
          "line": 33,
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
          "column": 1
        }
      ]
    }
  ]
}`;

type ResponseViewerProps = {
  onResponseClose: HandleExpand;
  isHidden: boolean;
};

const ResponseViewer: FC<ResponseViewerProps> = ({ onResponseClose, isHidden }) => {
  const rootRef = useScrollbar<HTMLDivElement>();
  const closeBtnRef = useRef(null);

  useEffect(() => {
    // initial render close btn animation
    const closeBtn = closeBtnRef.current as HTMLElement | null;

    if (!closeBtn) return undefined;
    closeBtn.classList.add('[animation-delay:900ms_!important]');

    return () => {
      closeBtn.classList.remove('[animation-delay:900ms_!important]');
    };
  }, []);

  return (
    <>
      <IconButton
        ref={closeBtnRef}
        data-testid="close-response"
        className={cn('invisible absolute right-4 top-4 z-10 animate-fade-out-standard lg:visible', {
          'animate-fade-in-standard [animation-delay:250ms]': !isHidden,
        })}
        onClick={() => onResponseClose(false)}
      >
        <Icon>close</Icon>
      </IconButton>
      <div className="grid h-full w-full overflow-hidden rounded-4xl bg-surface-container lg:max-h-none">
        <div
          data-testid="response-viewer"
          ref={rootRef}
          className="h-full w-full justify-between overflow-hidden overflow-y-scroll py-7 pl-4 pr-4 sm:pl-7"
        >
          <article className="h-fit w-fit pr-10">
            <pre className="h-full w-full whitespace-break-spaces">{PLACEHOLDER_TEXT}</pre>
          </article>
        </div>
        <div className="mb-7 mt-4 flex w-full justify-center lg:hidden">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ResponseViewer;
