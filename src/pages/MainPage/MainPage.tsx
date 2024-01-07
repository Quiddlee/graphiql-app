import { useState } from 'react';

import ResponseViewer from '@components/ResponseViewer/ResponseViewer';
import RequestEditorResized from '@pages/MainPage/ui/RequestEditorResized';
import { INTERPOLATION_END, INTERPOLATION_START } from '@shared/constants/const';
import localStorageKeys from '@shared/constants/localStorageKeys';
import cn from '@shared/lib/helpers/cn';
import useElementProp from '@shared/lib/hooks/useElementProp';
import useInterpolation from '@shared/lib/hooks/useInterpolation';
import useLocalStorage from '@shared/lib/hooks/useLocalStorage';
import useResize from '@shared/lib/hooks/useResize';
import useScreen from '@shared/lib/hooks/useScreen';
import ResizeBar from '@shared/ui/ResizeBar';

const HIDE_THRESHOLD = 200;
const INITIAL_WIDTH = 400;
const COLLAPSED_WIDTH = 0;

const MainPage = () => {
  const [initialWidth] = useState(() => Number(localStorage.getItem(localStorageKeys.RESPONSE_WIDTH)) ?? INITIAL_WIDTH);
  const { elementRef: containerRef, elementProp: maxWidth } = useElementProp({
    propName: 'width',
    initialValue: 0,
  });
  const screenType = useScreen();
  const isTablet = screenType === 'tablet' || screenType === 'mobile';

  const {
    size: width,
    isResized,
    handleResize,
    isHidden: isEditorHidden,
    handleExpand,
  } = useResize({
    initSize: initialWidth,
    expandSize: INITIAL_WIDTH,
    minSize: COLLAPSED_WIDTH,
    maxSize: maxWidth,
    startThreshold: HIDE_THRESHOLD,
    hideThreshold: HIDE_THRESHOLD,
    direction: 'horizontal',
  });

  const { interpolation: interpolateResponse, oneToZeroInterpolation: oneZeroResponse } = useInterpolation({
    size: width,
    maxSize: maxWidth,
    minSize: COLLAPSED_WIDTH,
    interpolationEnd: INTERPOLATION_END,
    interpolationStart: INTERPOLATION_START,
    hideThreshold: HIDE_THRESHOLD,
    isSizeIncrease: false,
  });

  const { interpolation: interpolateEditor, oneToZeroInterpolation: oneZeroEditor } = useInterpolation({
    size: width,
    maxSize: maxWidth,
    minSize: COLLAPSED_WIDTH,
    interpolationEnd: INTERPOLATION_END,
    interpolationStart: INTERPOLATION_START,
    hideThreshold: HIDE_THRESHOLD,
    isSizeIncrease: true,
  });

  useLocalStorage(localStorageKeys.RESPONSE_WIDTH, width);

  const isResponseHidden = width === 0;

  return (
    <div
      ref={containerRef}
      className={cn(
        'row-start-2 row-end-3 grid h-full w-full origin-bottom-left grid-rows-2 gap-2 overflow-scroll px-2 pb-[58px] sm:col-start-2 sm:col-end-3 sm:grid-rows-[640px_400px] sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:row-end-4 lg:grid-cols-[auto_max-content] lg:grid-rows-1 lg:gap-4',
        {
          'lg:justify-end lg:gap-0': isEditorHidden && !isTablet,
          'lg:gap-0': isResponseHidden && !isTablet,
        },
      )}
    >
      <RequestEditorResized
        onResponseOpen={handleExpand}
        isOutEditorHidden={isEditorHidden}
        style={{
          transform: !isTablet ? `scale3d(${interpolateEditor}, ${interpolateEditor}, 1)` : '',
          opacity: !isTablet ? oneZeroEditor : '',
          width: isEditorHidden && !isTablet ? '0px' : '',
          overflow: isEditorHidden && !isTablet ? 'hidden' : '',
          transition: isResized.current ? 'none' : '',
        }}
      />
      <section className="relative flex h-full w-full justify-end">
        <ResizeBar direction="horizontal" className="absolute -left-4" onMouseDown={handleResize} />
        <div
          style={{
            width: !isTablet ? `${width}px` : '',
            transform: !isTablet ? `scale3d(${interpolateResponse}, ${interpolateResponse}, 1)` : '',
            opacity: !isTablet ? oneZeroResponse : '',
          }}
          className={cn(
            'animation-delay-600 relative mb-24 h-full w-full origin-bottom-right animate-fade-in-section',
            {
              'transition-enter-screen': !isResponseHidden,
              'transition-exit-screen': isResponseHidden,
              'transition-none': isResized.current,
            },
          )}
        >
          <ResponseViewer onResponseClose={handleExpand} isHidden={isResponseHidden} />
        </div>
      </section>
    </div>
  );
};

export default MainPage;
