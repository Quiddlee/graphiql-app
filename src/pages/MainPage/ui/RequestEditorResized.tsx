import { useCallback, useEffect, useRef, useState } from 'react';

import EditorTools from '@components/EditorTools/EditorTools';
import useExpand from '@components/EditorTools/lib/hooks/useExpand';
import RequestEditor from '@components/RequestEditor/RequestEditor';
import {
  COLLAPSED_HEIGHT,
  END_VALUE,
  HIDE_EDITOR_THRESHOLD,
  INITIAL_HEIGHT,
  START_EDITOR_THRESHOLD,
  START_VALUE,
} from '@pages/MainPage/const/const';
import useDefineIsExpanded from '@pages/MainPage/hooks/useDefineIsExpanded';
import cn from '@shared/lib/helpers/cn';
import useLocalStorage from '@shared/lib/hooks/useLocalStorage';
import useResize from '@shared/lib/hooks/useResize';

const RequestEditorResized = () => {
  const editorContainerRef = useRef<HTMLDivElement>(null);
  const [editorContainerHeight, setEditorContainerHeight] = useState(0);

  const initialHeight = Number(localStorage.getItem('request-height')) || INITIAL_HEIGHT;

  useEffect(() => {
    setEditorContainerHeight(editorContainerRef.current?.offsetHeight as number);
  }, []);

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
    initialHeight,
    minSize: COLLAPSED_HEIGHT,
    interpolationStart: START_VALUE,
    interpolationEnd: END_VALUE,
    maxSize: editorContainerHeight,
  });

  useLocalStorage('request-height', height);
  useDefineIsExpanded(height, isResized.current);

  const handleExpand = useCallback(
    function handleExpand(up: boolean) {
      if (isResized.current) return;
      setSize(up ? INITIAL_HEIGHT : COLLAPSED_HEIGHT);
    },
    [isResized, setSize],
  );

  useExpand(handleExpand);

  const oneToZeroInterpolation = (editorInterpolation - END_VALUE) / (START_VALUE - END_VALUE);

  return (
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
        <EditorTools />
      </div>
    </div>
  );
};

export default RequestEditorResized;
