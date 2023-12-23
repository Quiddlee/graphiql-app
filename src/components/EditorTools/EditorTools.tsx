import { FC, PropsWithChildren } from 'react';

import Header from '@components/EditorTools/ui/Header';
import cn from '@shared/lib/helpers/cn';
import { HandleExpand } from '@shared/types';

type EditorToolsProps = PropsWithChildren & {
  onExpand: HandleExpand;
  isExpanded: boolean;
};

const EditorTools: FC<EditorToolsProps> = ({ onExpand, isExpanded, children }) => {
  return (
    <div
      data-testid="editor-tools"
      className={cn(
        'grid h-full grid-rows-[min-content_auto] overflow-clip rounded-4xl bg-surface-container pt-4 transition-all duration-[inherit] ease-[inherit]',
      )}
    >
      <Header isExpanded={isExpanded} onExpand={onExpand} />
      {children}
    </div>
  );
};

export default EditorTools;
