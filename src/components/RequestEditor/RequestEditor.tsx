/* eslint-disable */
import { FC, HTMLAttributes, useEffect, useState } from 'react';

import { useAppContext } from '@/shared/Context/hooks';
import Editor from '@components/Editor/Editor';
import useEditorUrlState from '@components/Editor/lib/hooks/useEditorUrlState';
import urlParams from '@shared/constants/urlParams';
import cn from '@shared/lib/helpers/cn';

import RequestFormatter from './lib/formatRequest';

const RequestEditor: FC<HTMLAttributes<HTMLElement>> = ({ children, ...props }) => {
  const [editorState, setEditorState] = useEditorUrlState(urlParams.QUERY);
  const { prettifyEditors, prettify } = useAppContext();
  const [prettyKey, setPrettyKey] = useState('');
  const formatter = new RequestFormatter();

  useEffect(() => {
    if (prettify) {
      setPrettyKey(String(Math.random()));
      setEditorState(formatter.formatRequest(editorState));
      prettifyEditors(false);
    }
  }, [prettify]);

  return (
    <section
      {...props}
      data-testid="editor-request"
      className={cn(
        'animation-delay-200 transition-enter-screen relative flex h-full w-full origin-top animate-fade-in-screen gap-4 overflow-y-hidden rounded-4xl bg-surface-container pl-2 sm:row-start-1 sm:row-end-2 sm:pl-6',
      )}
    >
      <Editor
        className="pr-20"
        key={prettyKey}
        editorState={editorState}
        onChange={setEditorState}
        isJson={false}
        isReadOnly={false}
      />
      {children}
    </section>
  );
};

export default RequestEditor;
