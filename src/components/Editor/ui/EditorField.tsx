import { FC, SyntheticEvent, TextareaHTMLAttributes, useState } from 'react';

import useEditorSize from '@components/Editor/lib/hooks/useEditorSize';
import LineNumbers from '@components/Editor/ui/LineNumbers';
import useScrollbar from '@shared/lib/hooks/useScrollbar';

type EditorFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  onChange: (e: SyntheticEvent) => void;
};

const EditorField: FC<EditorFieldProps> = ({ onChange /* ...props */ }) => {
  const [value, setValue] = useState('');
  const rootRef = useScrollbar<HTMLElement>();
  const { editorRef, size } = useEditorSize(value);

  return (
    <article ref={rootRef} className="h-full w-full">
      <div className="flex h-full w-full gap-4">
        <LineNumbers size={size} />
        <div
          ref={editorRef}
          tabIndex={0}
          aria-label="The text editor"
          role="textbox"
          contentEditable="plaintext-only"
          onInput={(e) => {
            onChange(e);
            setValue((e.target as HTMLDivElement).innerHTML);
          }}
          className="h-fit w-full outline-none"
          suppressContentEditableWarning
        />
      </div>
    </article>
  );
};

export default EditorField;
