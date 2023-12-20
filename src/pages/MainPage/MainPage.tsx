import { useEffect, useMemo, useRef, useState } from 'react';

import ResponseViewer from '@components/ResponseViewer/ResponseViewer';
import RequestEditorResized from '@pages/MainPage/ui/RequestEditorResized';
import urlParams from '@shared/constants/urlParams';
import cn from '@shared/lib/helpers/cn';
import useResize from '@shared/lib/hooks/useResize';
import useUrl from '@shared/lib/hooks/useUrl';
import ResizeBar from '@shared/ui/ResizeBar';

const HIDE_THRESHOLD = 200;
const SHOW_THRESHOLD = 0.5;
const INITIAL_WIDTH = 400;
const COLLAPSED_WIDTH = 0;
const START_VALUE = 1;
const END_VALUE = 0.9;

const MainPage = () => {
  const { readUrl } = useUrl();
  const [maxWidth, setMaxWidth] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.parentElement?.clientWidth ?? 0;
      setMaxWidth(width);
    }
  }, []);

  const isResponseOpen = readUrl(urlParams.RESPONSE_OPEN) === 'true';

  const {
    size: width,
    isResized,
    handleResize,
    interpolation,
    isHidden,
  } = useResize({
    initSize: INITIAL_WIDTH,
    minSize: COLLAPSED_WIDTH,
    maxSize: maxWidth,
    startThreshold: SHOW_THRESHOLD,
    hideThreshold: HIDE_THRESHOLD,
    interpolationStart: START_VALUE,
    interpolationEnd: END_VALUE,
    direction: 'horizontal',
  });

  const oneToZeroInterpolation = useMemo(() => {
    return (interpolation - END_VALUE) / (START_VALUE - END_VALUE);
  }, [interpolation]);

  return (
    <div
      className={cn(
        'col-start-2 col-end-3 row-start-2 row-end-4 grid h-auto w-auto grid-cols-[auto_max-content] grid-rows-1 justify-end gap-4',
        {
          'grid-cols-[0fr_max-content] gap-0': isHidden,
        },
      )}
    >
      <RequestEditorResized
        style={{
          transform: `scale3d(${interpolation}, ${interpolation}, 1)`,
          opacity: oneToZeroInterpolation,
          width: isHidden ? '0px' : 'auto',
        }}
      />
      <section
        ref={containerRef}
        className={cn('relative flex h-auto w-auto scale-95 justify-end opacity-0 transition-all duration-200', {
          'scale-100 opacity-100 duration-500': isResponseOpen,
        })}
      >
        <ResizeBar direction="horizontal" className="absolute -left-4" onMouseDown={handleResize} />
        <div
          style={{
            width: `${width}px`,
          }}
          className={cn('relative h-auto w-auto transition-all duration-500 ease-emphasized-decelerate', {
            'transition-none': isResized.current,
          })}
        >
          <ResponseViewer />
        </div>
      </section>
    </div>
  );
};

export default MainPage;
