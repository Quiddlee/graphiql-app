/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { useAppContext } from '@/shared/Context/hooks';
import Editor from '@components/Editor/Editor';
import useEditorUrlState from '@components/Editor/lib/hooks/useEditorUrlState';
import { EDITOR_DEFAULT_VALUE } from '@components/RequestEditor/lib/const/const';
import Controls from '@components/RequestEditor/ui/Controls';
import urlParams from '@shared/constants/urlParams';

import RequestFormatter from './lib/formatRequest';

const RequestEditor = () => {
  const [editorState, setEditorState] = useEditorUrlState(urlParams.QUERY, EDITOR_DEFAULT_VALUE);
  const { prettifyEditors, prettify } = useAppContext();
  const [prettyKey, setPrettyKey] = useState('');
  const [formatter] = useState(() => new RequestFormatter());

  useEffect(() => {
    if (prettify) {
      setPrettyKey(String(Math.random()));
      setEditorState(formatter.formatRequest(editorState));
      console.log(editorState);
      prettifyEditors(false);
    }
  });

  return (
    <section
      data-testid="editor-request"
      className="relative flex h-full w-full gap-4 overflow-y-hidden rounded-4xl bg-surface-container pl-6"
    >
      <Editor
        className="pr-20"
        key={prettyKey}
        editorState={editorState}
        onChange={setEditorState}
        isJson={false}
        isReadOnly={false}
      />
      <Controls />
    </section>
  );
};

export default RequestEditor;
