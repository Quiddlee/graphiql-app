import { FC, HTMLAttributes, useState } from 'react';

import RequestEditor from '@/components/RequestEditor/RequestEditor';
import EditorTools from '@components/EditorTools/EditorTools';
import EditorToolsField from '@components/EditorTools/ui/EditorToolsField';
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
    minSize: COLLAPSED_HEIGHT,
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
        'body-large grid h-full w-full origin-bottom-left grid-rows-[355px_270px] content-end gap-3 transition-all duration-500 ease-emphasized-decelerate lg:grid-rows-[1fr_max-content] lg:gap-4',
        className,
        {
          'grid-rows-[0fr_max-content] gap-0': isEditorHidden,
          'transition-none': isCollapsed || isResized.current,
        },
      )}
    >
      <RequestEditor
        style={{
          transform: !isTablet ? `scale3d(${interpolateEditor}, ${interpolateEditor}, 1)` : '',
          opacity: !isTablet ? oneZeroInterpolateEditor : '',
          transition: isResized.current ? 'none' : '',
        }}
      >
        <Controls onResponseOpen={onResponseOpen} isHidden={isEditorHidden || isOutEditorHidden} />
      </RequestEditor>
      <section
        style={{
          height: !isTablet ? `${height}px` : '',
        }}
        className={cn(
          'animation-delay-400 relative row-start-2 row-end-3 h-full w-full origin-bottom-left animate-fade-in-screen',
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
