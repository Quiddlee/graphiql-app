import { useRef } from 'react';

import Editor from '@components/Editor/Editor';
import EditorTools from '@components/EditorTools/EditorTools';

const MainPage = () => {
  const editorContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={editorContainerRef}
      className="body-large grid h-full w-full grid-rows-[auto_40%] items-end gap-4 overflow-clip transition-all duration-200 ease-emphasized-accelerate"
    >
      <Editor />
      <EditorTools containerRef={editorContainerRef} />
    </div>
  );
};

export default MainPage;
