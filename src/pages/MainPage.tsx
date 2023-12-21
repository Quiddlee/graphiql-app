import { useRef } from 'react';

import EditorTools from '@components/EditorTools/EditorTools';
import RequestEditor from '@components/RequestEditor/RequestEditor';
import ResponseViewer from '@components/ResponseViewer/ResponseViewer';
import urlParams from '@shared/constants/urlParams';
import cn from '@shared/lib/helpers/cn';
import useUrl from '@shared/lib/hooks/useUrl';

const MainPage = () => {
  const editorContainerRef = useRef<HTMLDivElement>(null);
  const { readUrl } = useUrl();

  const isExpanded = readUrl(urlParams.EXPANDED) === 'true';
  const isResponseOpen = readUrl(urlParams.RESPONSE_OPEN) === 'true';

  return (
    <>
      <div
        ref={editorContainerRef}
        className={cn(
          'body-large col-start-2 row-start-2 row-end-4 grid h-full w-full grid-rows-[auto_40%] items-end gap-4 overflow-clip transition-all duration-200 ease-emphasized-accelerate',
          {
            'duration-400 ease-emphasized-decelerate': isExpanded,
          },
        )}
      >
        <RequestEditor />
        <EditorTools containerRef={editorContainerRef} />
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
