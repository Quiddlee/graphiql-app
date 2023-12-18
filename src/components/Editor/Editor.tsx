import { Dispatch, FC, SetStateAction } from 'react';

import EditorField from '@components/Editor/ui/EditorField';
import LineNumbers from '@components/Editor/ui/LineNumbers';
import useEditorSize from '@components/RequestEditor/lib/hooks/useEditorSize';
import useScrollbar from '@shared/lib/hooks/useScrollbar';

type EditorProps = {
  editorState: string;
  onChange: Dispatch<SetStateAction<string>> | ((value: string) => void);
};

const Editor: FC<EditorProps> = ({ onChange, editorState }) => {
  const { editorRef, editorNumbersNum, editorNumRef } = useEditorSize();
  const rootRef = useScrollbar<HTMLElement>();

  return (
    <article ref={rootRef} className="h-full w-full font-jetbrains_mono">
      <div className="flex w-full gap-4 py-7 pr-4">
        <LineNumbers ref={editorNumRef} size={editorNumbersNum} />
        <EditorField ref={editorRef} onChange={onChange} value={editorState} />
      </div>
    </article>
  );
};

export default Editor;
