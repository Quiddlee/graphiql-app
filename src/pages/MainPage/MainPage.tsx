import ResponseViewer from '@components/ResponseViewer/ResponseViewer';
import RequestEditorResized from '@pages/MainPage/ui/RequestEditorResized';
import cn from '@shared/lib/helpers/cn';
import useElementProp from '@shared/lib/hooks/useElementProp';
import useInterpolation from '@shared/lib/hooks/useInterpolation';
import useResize from '@shared/lib/hooks/useResize';
import ResizeBar from '@shared/ui/ResizeBar';

const HIDE_THRESHOLD = 200;
const INITIAL_WIDTH = 400;
const COLLAPSED_WIDTH = 0;
const INTERPOLATION_START = 1;
const INTERPOLATION_END = 0.9;

const MainPage = () => {
  const { elementRef: containerRef, elementProp: maxWidth } = useElementProp({
    propName: 'width',
    initialValue: 0,
  });

  const {
    size: width,
    isResized,
    handleResize,
    isHidden: isEditorHidden,
  } = useResize({
    initSize: INITIAL_WIDTH,
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

  const isResponseHidden = width === 0;

  return (
    <div
      ref={containerRef}
      className={cn(
        'col-start-2 col-end-3 row-start-2 row-end-4 grid h-full w-full grid-cols-[auto_max-content] grid-rows-1 gap-4',
        {
          'justify-end gap-0': isEditorHidden,
          'gap-0': isResponseHidden,
        },
      )}
    >
      <RequestEditorResized
        style={{
          transform: `scale3d(${interpolateEditor}, ${interpolateEditor}, 1)`,
          opacity: oneZeroEditor,
          width: isEditorHidden ? '0px' : '100%',
          overflow: isEditorHidden ? 'hidden' : 'visible',
          transition: isResized.current ? 'none' : '',
        }}
      />
      <section className={cn('relative flex h-full w-full justify-end')}>
        <ResizeBar direction="horizontal" className="absolute -left-4" onMouseDown={handleResize} />
        <div
          style={{
            width: `${width}px`,
            transform: `scale3d(${interpolateResponse}, ${interpolateResponse}, 1)`,
            opacity: oneZeroResponse,
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
