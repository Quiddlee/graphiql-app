import Editor from '@components/Editor/Editor';
import useEditorUrlState from '@components/Editor/lib/hooks/useEditorUrlState';
import { EDITOR_TOOLS_DEFAULT_VALUE } from '@components/RequestEditor/lib/const/const';
import urlParams from '@shared/constants/urlParams';

const VariablesEditor = () => {
  const [editorState, setEditorState] = useEditorUrlState(urlParams.VARIABLES, EDITOR_TOOLS_DEFAULT_VALUE);

  return <Editor key="variables" editorState={editorState} onChange={setEditorState} />;
};

export default VariablesEditor;
