import { useEffect, useState } from 'react';

import { useAppContext } from '@/shared/Context/hooks';
import isValidJson from '@/shared/lib/helpers/isJsonValid';
import jsonFormatter from '@/shared/lib/helpers/jsonFormatter';
import Editor from '@components/Editor/Editor';
import useEditorUrlState from '@components/Editor/lib/hooks/useEditorUrlState';
import { EDITOR_TOOLS_DEFAULT_VALUE } from '@components/RequestEditor/lib/const/const';
import urlParams from '@shared/constants/urlParams';

const VariablesEditor = () => {
  const [editorState, setEditorState] = useEditorUrlState(urlParams.VARIABLES, EDITOR_TOOLS_DEFAULT_VALUE);
  const [prettyKey, setPrettyKey] = useState('');
  const { prettify } = useAppContext();

  useEffect(() => {
    if (prettify && isValidJson(editorState)) {
      setPrettyKey(editorState);
      setEditorState(jsonFormatter(editorState));
    }
  }, [editorState, prettify, setEditorState]);

  return <Editor key={prettyKey} editorState={editorState} onChange={setEditorState} isJson readOnly={false} />;
};

export default VariablesEditor;
