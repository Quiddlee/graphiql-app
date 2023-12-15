import { FC, RefObject } from 'react';

import EditorToolsField from '@components/EditorTools/ui/EditorToolsField';
import Header from '@components/EditorTools/ui/Header';
import cn from '@shared/lib/helpers/cn';

import useEditorTools from './lib/hooks/useEditorTools';

type EditorToolsProps = {
  containerRef: RefObject<HTMLElement>;
};

const EditorTools: FC<EditorToolsProps> = ({ containerRef }) => {
  const { isExpanded } = useEditorTools();

  return (
    <article
      ref={containerRef}
      className={cn('grid h-full gap-7 rounded-t-4xl bg-surface-container py-4 duration-[inherit] ease-[inherit]', {
        'rounded-4xl': isExpanded,
      })}
    >
      <Header containerRef={containerRef} />
      <div className="pl-7 pr-4">
        <EditorToolsField />
      </div>
    </article>
  );
};

export default EditorTools;
