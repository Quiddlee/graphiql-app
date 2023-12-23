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
        'animation-delay-200 relative flex h-full w-full origin-top animate-fade-in-screen gap-4 overflow-y-hidden rounded-4xl bg-surface-container pl-6 transition-all duration-500 ease-emphasized-decelerate',
      )}
    >
      <Editor className="pr-20" editorState={editorState} onChange={setEditorState} />
      {children}
    </section>
  );
};

export default RequestEditor;
