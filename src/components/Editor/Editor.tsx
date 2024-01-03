import { Dispatch, FC, SetStateAction } from 'react';

import EditorField from '@components/Editor/ui/EditorField';
import cn from '@shared/lib/helpers/cn';
import useScrollbar from '@shared/lib/hooks/useScrollbar';

type EditorProps = {
  editorState: string;
  onChange: Dispatch<SetStateAction<string>> | ((value: string) => void);
  className?: string;
  isJson: boolean;
  isReadOnly: boolean;
};

const Editor: FC<EditorProps> = ({ onChange, editorState, className, isJson, isReadOnly }) => {
  const rootRef = useScrollbar<HTMLElement>();

  return (
    <article ref={rootRef} className={cn('h-full w-full font-jetbrains_mono', className)}>
      <div className="flex w-full gap-4 py-7 pr-4">
        <EditorField onChange={onChange} value={editorState} isJson={isJson} isReadOnly={isReadOnly} />
      </div>
    </article>
  );
};

export default Editor;
