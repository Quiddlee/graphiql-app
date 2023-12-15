import { FC, TextareaHTMLAttributes } from 'react';

import LineNumbers from '@components/Editor/ui/LineNumbers';
import TextArea from '@components/Editor/ui/TextArea';

type EditorFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  size?: number;
};

const EditorField: FC<EditorFieldProps> = ({ size = 10, ...props }) => {
  return (
    <article className="flex h-full w-full gap-4">
      <LineNumbers size={size} />
      <TextArea {...props} />
    </article>
  );
};

export default EditorField;
