import Editor from '@components/Editor/Editor';
import useEditorUrlState from '@components/Editor/lib/hooks/useEditorUrlState';
import urlParams from '@shared/constants/urlParams';

const VariablesEditor = () => {
  const [editorState, setEditorState] = useEditorUrlState(urlParams.VARIABLES);

  return <Editor key="variables" editorState={editorState} onChange={setEditorState} />;
};

export default VariablesEditor;
