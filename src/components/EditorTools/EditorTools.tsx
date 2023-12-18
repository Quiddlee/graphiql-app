import { FC, RefObject } from 'react';

import EditorToolsField from '@components/EditorTools/ui/EditorToolsField';
import Header from '@components/EditorTools/ui/Header';
import urlParams from '@shared/constants/urlParams';
import cn from '@shared/lib/helpers/cn';
import useUrl from '@shared/lib/hooks/useUrl';

type EditorToolsProps = {
  containerRef: RefObject<HTMLElement>;
};

const EditorTools: FC<EditorToolsProps> = ({ containerRef }) => {
  const { readUrl } = useUrl();
  const isExpanded = readUrl(urlParams.EXPANDED) === 'true';

  return (
    <article
      data-testid="editor-tools-container"
      className={cn(
        'grid h-full grid-rows-[min-content_auto] overflow-clip rounded-t-4xl bg-surface-container pt-4 duration-[inherit] ease-[inherit]',
        {
          'rounded-4xl': isExpanded,
        },
      )}
    >
      <Header containerRef={containerRef} />
      <EditorToolsField />
    </article>
  );
};

export default EditorTools;
