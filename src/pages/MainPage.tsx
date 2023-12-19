import { useCallback, useEffect, useRef } from 'react';

import EditorTools from '@components/EditorTools/EditorTools';
import RequestEditor from '@components/RequestEditor/RequestEditor';
import ResponseViewer from '@components/ResponseViewer/ResponseViewer';
import urlParams from '@shared/constants/urlParams';
import cn from '@shared/lib/helpers/cn';
import useResize from '@shared/lib/hooks/useResize';
import useUrl from '@shared/lib/hooks/useUrl';

const COLLAPSED_HEIGHT = 65;
const HIDE_EDITOR_THRESHOLD = 100;
const START_EDITOR_THRESHOLD = 50;
const START_VALUE = 1;
const END_VALUE = 0.7;
const INITIAL_HEIGHT = 300;

const MainPage = () => {
  const editorContainerRef = useRef<HTMLDivElement>(null);
  const { readUrl, setUrl } = useUrl();

  const isResponseOpen = readUrl(urlParams.RESPONSE_OPEN) === 'true';
  const isExpandedOpen = readUrl(urlParams.EXPANDED) === 'true';
  const resizeContainerRef = useRef<HTMLDivElement>(null);
  const containerHeight = editorContainerRef.current?.offsetHeight as number;

  const {
    interpolation: editorInterpolation,
    isHidden: isEditorHidden,
    height,
    handleResize,
    setSize,
    isResized,
  } = useResize({
    hideThreshold: HIDE_EDITOR_THRESHOLD,
    startThreshold: START_EDITOR_THRESHOLD,
    initialHeight: Number(localStorage.getItem('request-height')) || INITIAL_HEIGHT,
    minSize: COLLAPSED_HEIGHT,
    interpolationStart: START_VALUE,
    interpolationEnd: END_VALUE,
    maxSize: containerHeight,
  });

  const handleExpand = useCallback(
    function handleExpand(up: boolean) {
      if (isResized.current) return;
      setSize(up ? INITIAL_HEIGHT : COLLAPSED_HEIGHT);
    },
    [isResized, setSize],
  );

  useEffect(() => {
    const isResizeHitExpanded = height >= START_EDITOR_THRESHOLD && isResized.current;
    const isResizeHitCollapsed = height <= COLLAPSED_HEIGHT && isResized.current;

    if (isResizeHitExpanded && !isExpandedOpen) {
      setUrl(urlParams.EXPANDED, true);
    }

    if (isResizeHitCollapsed && isExpandedOpen) {
      setUrl(urlParams.EXPANDED, false);
    }
  }, [height, isExpandedOpen, isResized, setUrl]);

  useEffect(() => {}, []);

  useEffect(() => {
    localStorage.setItem('request-height', String(height));
  }, [height]);

  const oneToZeroInterpolation = (editorInterpolation - END_VALUE) / (START_VALUE - END_VALUE);

  return (
    <>
      <div
        ref={editorContainerRef}
        className={cn(
          'body-large col-start-2 row-start-2 row-end-4 grid h-full w-full grid-rows-[1fr_max-content] content-end gap-4',
          {
            'grid-rows-[0fr_max-content] gap-0 duration-0': isEditorHidden,
          },
        )}
      >
        <RequestEditor
          style={{
            transform: `scale3d(${editorInterpolation}, ${editorInterpolation}, 1)`,
            opacity: oneToZeroInterpolation,
          }}
        />
        <div
          ref={resizeContainerRef}
          style={{
            height: `${height}px`,
          }}
          className={cn('relative h-full w-full transition-all duration-500 ease-emphasized-decelerate', {
            'transition-none': isResized.current,
          })}
        >
          <button
            type="button"
            aria-label="resize editor"
            className="absolute -top-4 h-4 w-full cursor-row-resize rounded-full"
            onMouseDown={handleResize}
          />
          <EditorTools onExpand={handleExpand} />
        </div>
      </div>
      <section
        className={cn(
          'relative col-start-3 row-start-2 row-end-4 scale-95 overflow-hidden opacity-0 transition-all duration-200',
          {
            'scale-100 opacity-100 duration-500': isResponseOpen,
          },
        )}
      >
        <ResponseViewer />
      </section>
    </>
  );
};

export default MainPage;
