import { useState } from 'react';

import Editor from '@components/Editor/Editor';
import { EDITOR_TOOLS_DEFAULT_VALUE } from '@components/RequestEditor/lib/const/const';

const VariablesEditor = () => {
  const [editorVariablesState, setEditorVariablesState] = useState(EDITOR_TOOLS_DEFAULT_VALUE);

  return <Editor key="variables" editorState={editorVariablesState} onChange={setEditorVariablesState} />;
};

export default VariablesEditor;
