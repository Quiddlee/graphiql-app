import { FC, TextareaHTMLAttributes } from 'react';

const TextArea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ ...props }) => {
  return (
    <textarea
      {...props}
      name="editor"
      id="editor"
      className="h-full w-full resize-none bg-transparent font-jetbrains_mono text-on-surface-text outline-none"
    />
  );
};

export default TextArea;
