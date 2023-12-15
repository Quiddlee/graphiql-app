import { FC, RefObject, useState } from 'react';

import EditorToolsField from '@components/EditorTools/ui/EditorToolsField';
import Header from '@components/EditorTools/ui/Header';
import cn from '@shared/lib/helpers/cn';

type EditorToolsProps = {
  containerRef: RefObject<HTMLElement>;
};

const EditorTools: FC<EditorToolsProps> = ({ containerRef }) => {
  const [isVariablesTab, setIsVariablesTab] = useState(true);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <article
      ref={containerRef}
      className={cn('grid h-full gap-7 rounded-t-4xl bg-surface-container py-4 duration-[inherit] ease-[inherit]', {
        'rounded-4xl': isExpanded,
      })}
    >
      <Header
        isExpanded={isExpanded}
        setIsVariablesTab={setIsVariablesTab}
        setIsExpanded={setIsExpanded}
        containerRef={containerRef}
      />
      <div className="pl-7 pr-4">
        <EditorToolsField isVariablesTab={isVariablesTab} />
      </div>
    </article>
  );
};

export default EditorTools;
