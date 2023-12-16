import Editor from '@components/Editor/Editor';
import useEditorUrlState from '@components/Editor/lib/hooks/useEditorUrlState';

const HeadersEditor = () => {
  const [editorState, setEditorState] = useEditorUrlState('headers');

  return <Editor key="headers" editorState={editorState} onChange={setEditorState} />;
};

export default HeadersEditor;
