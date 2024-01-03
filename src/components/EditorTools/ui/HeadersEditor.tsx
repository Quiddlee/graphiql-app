import { useEffect } from 'react';

import { useAppContext } from '@/shared/Context/hooks';
import isValidJson from '@/shared/lib/helpers/isJsonValid';
import jsonFormatter from '@/shared/lib/helpers/jsonFormatter';
import Editor from '@components/Editor/Editor';
import useEditor from '@components/Editor/lib/hooks/useEditor';
import useEditorUrlState from '@components/Editor/lib/hooks/useEditorUrlState';
import urlParams from '@shared/constants/urlParams';

const HeadersEditor = () => {
  const [editorState, setEditorState] = useEditorUrlState(urlParams.HEADERS);
  const { prettify } = useAppContext();
  const {
    headers: [headersKey, invalidateKey],
  } = useEditor();

  useEffect(() => {
    if (prettify && isValidJson(editorState)) {
      setEditorState(jsonFormatter(editorState));
      invalidateKey();
    }
  }, [editorState, invalidateKey, prettify, setEditorState]);

  return (
    <Editor
      key={headersKey}
      editorState={editorState}
      onChange={(val: string) => {
        if (!prettify) setEditorState(val);
      }}
      isJson
      isReadOnly={false}
    />
  );
};

export default HeadersEditor;
