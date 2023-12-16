import { useState } from 'react';

import Editor from '@components/Editor/Editor';
import { EDITOR_DEFAULT_VALUE } from '@components/RequestEditor/lib/const/const';
import Controls from '@components/RequestEditor/ui/Controls';

const RequestEditor = () => {
  const [editorState, setEditorState] = useState(EDITOR_DEFAULT_VALUE);

  return (
    <article className="flex h-full w-full gap-4 overflow-y-hidden rounded-4xl bg-surface-container pl-7 pr-4">
      <Editor editorState={editorState} onChange={setEditorState} />
      <Controls editorValue={editorState} />
    </article>
  );
};

export default RequestEditor;
