import { useState } from 'react';

import Editor from '@components/Editor/Editor';

const HeadersEditor = () => {
  const [editorHeadersState, setEditorHeadersState] = useState('');

  return <Editor key="headers" editorState={editorHeadersState} onChange={setEditorHeadersState} />;
};

export default HeadersEditor;
