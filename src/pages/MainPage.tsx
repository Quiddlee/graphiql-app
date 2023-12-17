import { useRef } from 'react';

import EditorTools from '@components/EditorTools/EditorTools';
import RequestEditor from '@components/RequestEditor/RequestEditor';
import urlParams from '@shared/constatns/urlParams';
import cn from '@shared/lib/helpers/cn';
import useUrl from '@shared/lib/hooks/useUrl';

const MainPage = () => {
  const editorContainerRef = useRef<HTMLDivElement>(null);
  const { readUrl } = useUrl();
  const isExpanded = readUrl(urlParams.EXPANDED) === 'true';

  return (
    <div
      ref={editorContainerRef}
      className={cn(
        'body-large grid h-full w-full grid-rows-[auto_40%] items-end gap-4 overflow-clip transition-all duration-200 ease-emphasized-accelerate',
        {
          'grid-rows-[auto_64px]': !isExpanded,
        },
      )}
    >
      <RequestEditor />
      <EditorTools containerRef={editorContainerRef} />
    </div>
  );
};

export default MainPage;
