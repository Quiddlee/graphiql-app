import { useCallback, useMemo, useState } from 'react';

import EditorTools from '@components/EditorTools/EditorTools';
import RequestEditor from '@components/RequestEditor/RequestEditor';
import {
  COLLAPSED_HEIGHT,
  END_VALUE,
  HIDE_EDITOR_THRESHOLD,
  INITIAL_HEIGHT,
  START_EDITOR_THRESHOLD,
  START_VALUE,
} from '@pages/MainPage/const/const';
import localStorageKeys from '@shared/constants/localStorageKeys';
import cn from '@shared/lib/helpers/cn';
import useElementProp from '@shared/lib/hooks/useElementProp';
import useLocalStorage from '@shared/lib/hooks/useLocalStorage';
import useResize from '@shared/lib/hooks/useResize';
import { HandleExpand } from '@shared/types';

const RequestEditorResized = () => {
  const [initialHeight] = useState(() => Number(localStorage.getItem('request-height')) || INITIAL_HEIGHT);
  const { elementRef: editorContainerRef, elementHeight: editorContainerHeight } = useElementProp({
    propName: 'height',
    initialValue: 0,
  });

  const {
    interpolation: editorInterpolation,
    isHidden: isEditorHidden,
    height,
    handleResize,
    setSize,
    isResized,
    isExpanded,
  } = useResize({
    hideThreshold: HIDE_EDITOR_THRESHOLD,
    startThreshold: START_EDITOR_THRESHOLD,
    initSize: initialHeight,
    minSize: COLLAPSED_HEIGHT,
    interpolationStart: START_VALUE,
    interpolationEnd: END_VALUE,
    maxSize: editorContainerHeight,
  });

  useLocalStorage(localStorageKeys.REQUEST_EDITOR_HEIGHT, height);

  const handleExpand: HandleExpand = useCallback(
    function handleExpand(up: boolean | ((prevState: boolean) => boolean)) {
      if (isResized.current) return;

      if (typeof up === 'function') {
        const newState = up(isExpanded);
        setSize(newState ? INITIAL_HEIGHT : COLLAPSED_HEIGHT);
        return;
      }

      if (!isExpanded && up) {
        setSize(INITIAL_HEIGHT);
      }

      if (isExpanded && !up) {
        setSize(COLLAPSED_HEIGHT);
      }
    },
    [isExpanded, isResized, setSize],
  );

  const oneToZeroInterpolation = useMemo(() => {
    return (editorInterpolation - END_VALUE) / (START_VALUE - END_VALUE);
  }, [editorInterpolation]);

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
        <EditorTools isExpanded={isExpanded} onExpand={handleExpand} />
      </div>
    </div>
  );
};

export default RequestEditorResized;
