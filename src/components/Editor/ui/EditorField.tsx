/* eslint-disable react/no-danger */
import { Dispatch, forwardRef, SetStateAction, SyntheticEvent, useRef } from 'react';

type EditorFieldProps = {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};

const EditorField = forwardRef<HTMLDivElement, EditorFieldProps>(({ onChange, value }, ref) => {
  const defaultValue = useRef(value ? `${value}\n\n` : '');

  function handleInput(e: SyntheticEvent) {
    onChange?.((e.target as HTMLElement).innerHTML);
  }

  return (
    <div
      ref={ref}
      tabIndex={0}
      aria-label="The text editor"
      role="textbox"
      contentEditable="plaintext-only"
      onInput={handleInput}
      className="h-fit w-full outline-none"
      dangerouslySetInnerHTML={{ __html: defaultValue.current }}
    />
  );
});

EditorField.displayName = 'EditorField';

export default EditorField;
