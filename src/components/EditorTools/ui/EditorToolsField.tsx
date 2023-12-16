import { useState } from 'react';

import Editor from '@components/Editor/Editor';
import { EDITOR_TOOLS_DEFAULT_VALUE } from '@components/RequestEditor/lib/const/const';

import useEditorTools from '../lib/hooks/useEditorTools';

const EditorToolsField = () => {
  const { isVariablesTab } = useEditorTools();
  const [editorVariablesState, setEditorVariablesState] = useState(EDITOR_TOOLS_DEFAULT_VALUE);
  const [editorHeadersState, setEditorHeadersState] = useState('');

  // TODO: encapsulate both components
  if (isVariablesTab) {
    return <Editor key="variables" editorState={editorVariablesState} onChange={setEditorVariablesState} />;
  }

  return <Editor key="headers" editorState={editorHeadersState} onChange={setEditorHeadersState} />;
};

export default EditorToolsField;
