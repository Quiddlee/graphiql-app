/* eslint-disable react/no-danger */
import { FC, HTMLAttributes, useRef } from 'react';

import useEditorSize from '@components/Editor/lib/hooks/useEditorSize';
import LineNumbers from '@components/Editor/ui/LineNumbers';
import useScrollbar from '@shared/lib/hooks/useScrollbar';

type EditorFieldProps = HTMLAttributes<HTMLDivElement> & {
  value: string;
};

const EditorField: FC<EditorFieldProps> = ({ onChange, value }) => {
  const rootRef = useScrollbar<HTMLElement>();
  const { editorRef, editorNumbersNum, editorNumRef } = useEditorSize();

  const defaultValue = useRef(value ? `${value}\n\n` : '');

  return (
    <article ref={rootRef} className="h-full w-full">
      <div className="flex w-full gap-4 py-7 pr-4">
        <LineNumbers ref={editorNumRef} size={editorNumbersNum} />
        <div
          ref={editorRef}
          tabIndex={0}
          aria-label="The text editor"
          role="textbox"
          contentEditable="plaintext-only"
          onInput={(e) => onChange?.(e)}
          className="h-fit w-full outline-none"
          dangerouslySetInnerHTML={{ __html: defaultValue.current }}
        />
      </div>
    </article>
  );
};

export default EditorField;
