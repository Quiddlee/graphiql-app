import Editor from '@components/Editor/Editor';
import useEditorUrlState from '@components/Editor/lib/hooks/useEditorUrlState';
import { EDITOR_DEFAULT_VALUE } from '@components/RequestEditor/lib/const/const';
import Controls from '@components/RequestEditor/ui/Controls';
import urlParams from '@shared/constants/urlParams';

const RequestEditor = () => {
  const [editorState, setEditorState] = useEditorUrlState(urlParams.QUERY, EDITOR_DEFAULT_VALUE);

  return (
    <section
      data-testid="editor-request"
      className="relative flex h-full w-full gap-4 overflow-y-hidden rounded-4xl bg-surface-container pl-6"
    >
      <Editor className="pr-20" editorState={editorState} onChange={setEditorState} isJson={false} />
      <Controls />
    </section>
  );
};

export default RequestEditor;
