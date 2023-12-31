import { useEffect, useState } from 'react';

import { useAppContext } from '@/shared/Context/hooks';
import isValidJson from '@/shared/lib/helpers/isJsonValid';
import jsonFormatter from '@/shared/lib/helpers/jsonFormatter';
import Editor from '@components/Editor/Editor';
import useEditorUrlState from '@components/Editor/lib/hooks/useEditorUrlState';
import urlParams from '@shared/constants/urlParams';

const VariablesEditor = () => {
  const [editorState, setEditorState] = useEditorUrlState(urlParams.VARIABLES);
  const [prettyKey, setPrettyKey] = useState('');
  const { prettifyEditors, prettify } = useAppContext();

  useEffect(() => {
    if (prettify && isValidJson(editorState)) {
      setPrettyKey(String(Math.random()));
      setEditorState(jsonFormatter(editorState));
      prettifyEditors(false);
    }
  }, [editorState, prettify, prettifyEditors, setEditorState]);

  return <Editor key={prettyKey} editorState={editorState} onChange={setEditorState} isJson isReadOnly={false} />;
};

export default VariablesEditor;
