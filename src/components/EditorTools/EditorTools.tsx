import { FC } from 'react';

import EditorToolsField from '@components/EditorTools/ui/EditorToolsField';
import Header from '@components/EditorTools/ui/Header';
import cn from '@shared/lib/helpers/cn';

type EditorToolsProps = {
  onExpand: (up: boolean) => void;
};

const EditorTools: FC<EditorToolsProps> = ({ onExpand }) => {
  return (
    <section
      data-testid="editor-tools"
      className={cn(
        'grid h-full grid-rows-[min-content_auto] overflow-clip rounded-4xl bg-surface-container pt-4 transition-all duration-[inherit] ease-[inherit]',
      )}
    >
      <Header onExpand={onExpand} />
      <EditorToolsField />
    </section>
  );
};

export default EditorTools;
