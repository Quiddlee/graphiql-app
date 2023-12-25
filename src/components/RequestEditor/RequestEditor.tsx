import { useEffect } from 'react';

import { useAppContext } from '@/shared/Context/hooks';
import Editor from '@components/Editor/Editor';
import useEditorUrlState from '@components/Editor/lib/hooks/useEditorUrlState';
import { EDITOR_DEFAULT_VALUE } from '@components/RequestEditor/lib/const/const';
import Controls from '@components/RequestEditor/ui/Controls';
import urlParams from '@shared/constants/urlParams';

import formatRequest from './lib/formatRequest';

const RequestEditor = () => {
  const [editorState, setEditorState] = useEditorUrlState(urlParams.QUERY, EDITOR_DEFAULT_VALUE);
  const { prettify } = useAppContext();

  useEffect(() => {
    const prettifiedText = formatRequest(editorState);
    if (prettifiedText === editorState) return;
    setEditorState(prettifiedText);
    console.log(prettifiedText, editorState);
  }, [prettify]);

  return (
    <section
      data-testid="editor-request"
      className="relative flex h-full w-full gap-4 overflow-y-hidden rounded-4xl bg-surface-container pl-6"
    >
      <Editor
        className="pr-20"
        key={editorState}
        editorState={editorState}
        onChange={setEditorState}
        isJson={false}
        readOnly={false}
      />
      <Controls />
    </section>
  );
};

export default RequestEditor;
