import { FC, HTMLAttributes, useMemo, useState } from 'react';

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
import ResizeBar from '@shared/ui/ResizeBar';

const RequestEditorResized: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  const [initialHeight] = useState(() => Number(localStorage.getItem('request-height')) || INITIAL_HEIGHT);
  const { elementRef: editorContainerRef, elementProp: editorContainerHeight } = useElementProp({
    propName: 'height',
    initialValue: 0,
  });

  const {
    interpolation: editorInterpolation,
    isHidden: isEditorHidden,
    size: height,
    isResized,
    isExpanded,
    handleResize,
    handleExpand,
  } = useResize({
    hideThreshold: HIDE_EDITOR_THRESHOLD,
    startThreshold: START_EDITOR_THRESHOLD,
    initSize: initialHeight,
    minSize: COLLAPSED_HEIGHT,
    interpolationStart: START_VALUE,
    interpolationEnd: END_VALUE,
    maxSize: editorContainerHeight,
    expandSize: INITIAL_HEIGHT,
  });

  useLocalStorage(localStorageKeys.REQUEST_EDITOR_HEIGHT, height);
  const oneToZeroInterpolation = useMemo(() => {
    return (editorInterpolation - END_VALUE) / (START_VALUE - END_VALUE);
  }, [editorInterpolation]);

  return (
    <div
      {...props}
      ref={editorContainerRef}
      className={cn(
        'body-large grid h-full w-full grid-rows-[1fr_max-content] content-end gap-4 transition-all duration-500 ease-emphasized-decelerate',
        className,
        {
          'grid-rows-[0fr_max-content]': isEditorHidden,
          'transition-none': isResized.current,
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
        <ResizeBar className="absolute -top-4 h-4" onMouseDown={handleResize} />
        <EditorTools isExpanded={isExpanded} onExpand={handleExpand} />
      </div>
    </div>
  );
};

export default RequestEditorResized;
