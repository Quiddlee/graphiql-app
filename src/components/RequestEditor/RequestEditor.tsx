import { FC, HTMLAttributes } from 'react';

import Editor from '@components/Editor/Editor';
import useEditorUrlState from '@components/Editor/lib/hooks/useEditorUrlState';
import { EDITOR_DEFAULT_VALUE } from '@components/RequestEditor/lib/const/const';
import urlParams from '@shared/constants/urlParams';
import cn from '@shared/lib/helpers/cn';

const RequestEditor: FC<HTMLAttributes<HTMLElement>> = ({ children, ...props }) => {
  const [editorState, setEditorState] = useEditorUrlState(urlParams.QUERY, EDITOR_DEFAULT_VALUE);

  return (
    <section
      {...props}
      data-testid="editor-request"
      className={cn(
        'animation-delay-200 transition-enter-screen relative flex h-full w-full origin-top animate-fade-in-screen gap-4 overflow-y-hidden rounded-4xl bg-surface-container pl-2 sm:row-start-1 sm:row-end-2 sm:pl-6',
      )}
    >
      <Editor className="pr-2 sm:pr-20" editorState={editorState} onChange={setEditorState} />
      {children}
    </section>
  );
};

export default RequestEditor;
