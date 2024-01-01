import { useEffect } from 'react';

import { useAppContext } from '@/shared/Context/hooks';
import isValidJson from '@/shared/lib/helpers/isJsonValid';
import jsonFormatter from '@/shared/lib/helpers/jsonFormatter';
import Editor from '@components/Editor/Editor';
import useEditor from '@components/Editor/lib/hooks/useEditor';
import useEditorUrlState from '@components/Editor/lib/hooks/useEditorUrlState';
import urlParams from '@shared/constants/urlParams';

const VariablesEditor = () => {
  const [editorState, setEditorState] = useEditorUrlState(urlParams.VARIABLES);
  const { prettify } = useAppContext();
  const {
    variables: [variablesKey, invalidateKey],
  } = useEditor();

  useEffect(() => {
    if (prettify && isValidJson(editorState)) {
      setEditorState(jsonFormatter(editorState));
      invalidateKey();
    }
  }, [editorState, invalidateKey, prettify, setEditorState]);

  return (
    <Editor
      key={variablesKey}
      editorState={editorState}
      onChange={(val: string) => {
        if (!prettify) setEditorState(val);
      }}
      isJson
      isReadOnly={false}
    />
  );
};

export default VariablesEditor;
