import { useEffect, useMemo, useRef, useState } from 'react';

import calcInterpolation from '@/shared/lib/helpers/calcInterpolation';
import ResponseViewer from '@components/ResponseViewer/ResponseViewer';
import RequestEditorResized from '@pages/MainPage/ui/RequestEditorResized';
import calcOneToZeroInterpolation from '@shared/lib/helpers/calcOneToZeroInterpolation';
import cn from '@shared/lib/helpers/cn';
import useResize from '@shared/lib/hooks/useResize';
import ResizeBar from '@shared/ui/ResizeBar';

const HIDE_THRESHOLD = 200;
const INITIAL_WIDTH = 400;
const COLLAPSED_WIDTH = 0;
const INTERPOLATION_START = 1;
const INTERPOLATION_END = 0.9;

const MainPage = () => {
  const [maxWidth, setMaxWidth] = useState(0);
  const [interpolationResponse, setInterpolationResponse] = useState(INTERPOLATION_START);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.parentElement?.clientWidth ?? 0;
      setMaxWidth(width);
    }
  }, []);

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
    startThreshold: HIDE_THRESHOLD,
    hideThreshold: HIDE_THRESHOLD,
    interpolationStart: INTERPOLATION_START,
    interpolationEnd: INTERPOLATION_END,
    direction: 'horizontal',
  });

  const isResponseHidden = width === 0;

  useEffect(() => {
    const isShowThresholdHit = width <= COLLAPSED_WIDTH + HIDE_THRESHOLD;

    if (isShowThresholdHit) {
      const currStep = width - COLLAPSED_WIDTH;
      const interpolationValue = calcInterpolation(INTERPOLATION_START, INTERPOLATION_END, HIDE_THRESHOLD, currStep);
      const isInterpolationInRange =
        interpolationValue >= INTERPOLATION_END && interpolationValue <= INTERPOLATION_START;

      if (isInterpolationInRange) setInterpolationResponse(interpolationValue);
    } else {
      setInterpolationResponse(INTERPOLATION_START);
    }
  }, [maxWidth, width]);

  const oneToZeroInterpolation = useMemo(() => {
    return calcOneToZeroInterpolation(interpolation, INTERPOLATION_START, INTERPOLATION_END);
  }, [interpolation]);

  const oneToZeroInterpolationResponse = useMemo(() => {
    return calcOneToZeroInterpolation(interpolationResponse, INTERPOLATION_START, INTERPOLATION_END);
  }, [interpolationResponse]);

  return (
    <div
      className={cn(
        'col-start-2 col-end-3 row-start-2 row-end-4 grid h-full w-full grid-cols-[auto_max-content] grid-rows-1 gap-4',
        {
          'justify-end gap-0': isHidden,
          'gap-0': isResponseHidden,
        },
      )}
    >
      <RequestEditorResized
        style={{
          transform: `scale3d(${interpolation}, ${interpolation}, 1)`,
          opacity: oneToZeroInterpolation,
          width: isHidden ? '0px' : '100%',
          overflow: isHidden ? 'hidden' : 'visible',
          transition: isResized.current ? 'none' : '',
        }}
      />
      <section ref={containerRef} className={cn('relative flex h-full w-full justify-end')}>
        <ResizeBar direction="horizontal" className="absolute -left-4" onMouseDown={handleResize} />
        <div
          style={{
            width: `${width}px`,
            transform: `scale3d(${interpolationResponse}, ${interpolationResponse}, 1)`,
            opacity: oneToZeroInterpolationResponse,
          }}
          className={cn('relative h-full w-full transition-all duration-500 ease-emphasized-decelerate', {
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
