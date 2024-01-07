import { FC, HTMLAttributes, useState } from 'react';

import EditorTools from '@components/EditorTools/EditorTools';
import EditorToolsField from '@components/EditorTools/ui/EditorToolsField';
import RequestEditor from '@components/RequestEditor/RequestEditor';
import Controls from '@components/RequestEditor/ui/Controls';
import { INTERPOLATION_END, INTERPOLATION_START } from '@shared/constants/const';
import localStorageKeys from '@shared/constants/localStorageKeys';
import cn from '@shared/lib/helpers/cn';
import useElementProp from '@shared/lib/hooks/useElementProp';
import useInterpolation from '@shared/lib/hooks/useInterpolation';
import useLocalStorage from '@shared/lib/hooks/useLocalStorage';
import useResize from '@shared/lib/hooks/useResize';
import useScreen from '@shared/lib/hooks/useScreen';
import { HandleExpand } from '@shared/types';
import ResizeBar from '@shared/ui/ResizeBar';

const COLLAPSED_HEIGHT = 65;
const COLLAPSED_HEIGHT_MOBILE = 50;
const HIDE_EDITOR_THRESHOLD = 120;
const START_EDITOR_THRESHOLD = 50;
const INITIAL_HEIGHT = 300;

type RequestEditorResizedProps = HTMLAttributes<HTMLDivElement> & {
  onResponseOpen: HandleExpand;
  isOutEditorHidden: boolean;
};

const RequestEditorResized: FC<RequestEditorResizedProps> = ({
  className,
  isOutEditorHidden,
  onResponseOpen,
  children,
  ...props
}) => {
  const [initialHeight] = useState(
    () => Number(localStorage.getItem(localStorageKeys.REQUEST_EDITOR_HEIGHT)) || INITIAL_HEIGHT,
  );
  const { elementRef: editorContainerRef, elementProp: editorContainerHeight } = useElementProp({
    propName: 'height',
    initialValue: 0,
  });
  const screenType = useScreen();
  const isTablet = screenType === 'tablet';
  const isMobile = screenType === 'mobile';
  const isResizeDisabled = isTablet || isMobile;

  const {
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
    minSize: isMobile ? COLLAPSED_HEIGHT_MOBILE : COLLAPSED_HEIGHT,
    maxSize: editorContainerHeight,
    expandSize: INITIAL_HEIGHT,
  });

  const { interpolation: interpolateEditor, oneToZeroInterpolation: oneZeroInterpolateEditor } = useInterpolation({
    size: height,
    maxSize: editorContainerHeight,
    minSize: COLLAPSED_HEIGHT,
    interpolationEnd: INTERPOLATION_END,
    interpolationStart: INTERPOLATION_START,
    hideThreshold: HIDE_EDITOR_THRESHOLD,
    isSizeIncrease: true,
  });

  useLocalStorage(localStorageKeys.REQUEST_EDITOR_HEIGHT, height);

  const isCollapsed = height === COLLAPSED_HEIGHT;

  return (
    <div
      {...props}
      ref={editorContainerRef}
      className={cn(
        'body-large row-start-1 row-end-2 grid h-full w-full origin-bottom-left grid-rows-1 content-end gap-2 transition-all duration-500 ease-emphasized-decelerate sm:grid-rows-[355px_270px] sm:gap-3 lg:grid-rows-[1fr_max-content] lg:gap-4',
        className,
        {
          'grid-rows-[0fr_max-content] gap-0': isEditorHidden && !isResizeDisabled,
          'transition-none': (isCollapsed || isResized.current) && !isResizeDisabled,
        },
      )}
    >
      <RequestEditor
        style={{
          transform: !isResizeDisabled ? `scale3d(${interpolateEditor}, ${interpolateEditor}, 1)` : '',
          opacity: !isResizeDisabled ? oneZeroInterpolateEditor : '',
          transition: isResized.current ? 'none' : '',
        }}
      >
        <Controls
          className="absolute right-6 top-7 hidden sm:grid"
          onResponseOpen={onResponseOpen}
          isHidden={isEditorHidden || isOutEditorHidden}
        />
      </RequestEditor>
      <section
        style={{
          height: !isTablet ? `${height}px` : '',
        }}
        className={cn(
          'animation-delay-400 absolute bottom-0 left-0 z-10 row-start-2 row-end-3 h-full w-full origin-bottom-left animate-fade-in-section sm:relative',
          {
            'transition-enter-screen': !isCollapsed,
            'transition-exit-screen': isCollapsed,
            'transition-none': isResized.current,
          },
        )}
      >
        <ResizeBar className="absolute -top-4 h-4" onMouseDown={handleResize} />
        <EditorTools isExpanded={isExpanded} onExpand={handleExpand}>
          <EditorToolsField />
        </EditorTools>
      </section>
    </div>
  );
};

export default RequestEditorResized;
