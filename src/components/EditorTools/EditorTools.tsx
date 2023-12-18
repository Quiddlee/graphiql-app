import { FC, RefObject } from 'react';

import EditorToolsField from '@components/EditorTools/ui/EditorToolsField';
import Header from '@components/EditorTools/ui/Header';
import cn from '@shared/lib/helpers/cn';

type EditorToolsProps = {
  containerRef: RefObject<HTMLElement>;
};

const EditorTools: FC<EditorToolsProps> = ({ containerRef }) => {
  return (
    <section
      data-testid="editor-tools"
      className={cn(
        'grid h-full grid-rows-[min-content_auto] overflow-clip rounded-4xl bg-surface-container pt-4 duration-[inherit] ease-[inherit]',
      )}
    >
      <Header containerRef={containerRef} />
      <EditorToolsField />
    </section>
  );
};

export default EditorTools;
