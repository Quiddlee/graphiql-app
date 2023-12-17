import Editor from '@components/Editor/Editor';
import useEditorUrlState from '@components/Editor/lib/hooks/useEditorUrlState';
import urlParams from '@shared/constatns/urlParams';

const HeadersEditor = () => {
  const [editorState, setEditorState] = useEditorUrlState(urlParams.HEADERS);

  return <Editor key="headers" editorState={editorState} onChange={setEditorState} />;
};

export default HeadersEditor;
