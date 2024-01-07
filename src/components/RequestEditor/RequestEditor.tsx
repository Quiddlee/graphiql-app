import { FC, HTMLAttributes, useEffect } from 'react';

import { useAppContext } from '@/shared/Context/hooks';
import Editor from '@components/Editor/Editor';
import useEditor from '@components/Editor/lib/hooks/useEditor';
import useEditorUrlState from '@components/Editor/lib/hooks/useEditorUrlState';
import urlParams from '@shared/constants/urlParams';
import cn from '@shared/lib/helpers/cn';

import RequestFormatter from './lib/formatRequest';

const RequestEditor: FC<HTMLAttributes<HTMLElement>> = ({ children, ...props }) => {
  const [editorState, setEditorState] = useEditorUrlState(urlParams.QUERY);
  const { prettify } = useAppContext();
  const {
    query: [queryKey, invalidateKey],
  } = useEditor();

  useEffect(() => {
    if (prettify) {
      setEditorState(new RequestFormatter().formatRequest(editorState));
      invalidateKey();
    }
  }, [editorState, invalidateKey, prettify, setEditorState]);

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
        key={queryKey}
        editorState={editorState}
        onChange={(val: string) => {
          if (!prettify) setEditorState(val);
        }}
        isJson
        isReadOnly={false}
      />
      {children}
    </section>
  );
};

export default RequestEditor;
