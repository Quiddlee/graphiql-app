/* eslint-disable react/no-danger */
import { Dispatch, forwardRef, SetStateAction, SyntheticEvent, useRef } from 'react';

type EditorFieldProps = {
  value: string;
  onChange: Dispatch<SetStateAction<string>> | ((value: string) => void);
};

const EditorField = forwardRef<HTMLDivElement, EditorFieldProps>(({ onChange, value = '' }, ref) => {
  const defaultValue = useRef(value);

  function handleInput(e: SyntheticEvent) {
    onChange?.((e.target as HTMLElement).innerHTML);
  }

  return (
    <div
      data-testid="editor-field"
      ref={ref}
      tabIndex={0}
      aria-label="The text editor"
      role="textbox"
      contentEditable
      onInput={handleInput}
      className="h-fit w-full whitespace-pre-wrap outline-none"
      dangerouslySetInnerHTML={{ __html: defaultValue.current }}
    />
  );
});

EditorField.displayName = 'EditorField';

export default EditorField;
