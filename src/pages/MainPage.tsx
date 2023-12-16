import { useRef } from 'react';

import EditorTools from '@components/EditorTools/EditorTools';
import RequestEditor from '@components/RequestEditor/RequestEditor';

const MainPage = () => {
  const editorContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={editorContainerRef}
      className="body-large grid h-full w-full grid-rows-[auto_40%] items-end gap-4 overflow-clip transition-all duration-200 ease-emphasized-accelerate"
    >
      <RequestEditor />
      <EditorTools containerRef={editorContainerRef} />
    </div>
  );
};

export default MainPage;
