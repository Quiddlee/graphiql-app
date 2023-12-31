import { useState } from 'react';

import useLanguage from '@/shared/Context/hooks';
import Icon from '@/shared/ui/Icon';
import IconButton from '@/shared/ui/IconButton';
import DocsComp from '@components/DocsComp/DocsComp';

const Header = () => {
  const [isDocsShown, setIsDocsShown] = useState(false);
  const { translation } = useLanguage();
  const docsTooltip = translation.mainLayout.header.tooltips.docs;

  return (
    <>
      <header className="col-start-1 col-end-2 flex w-full items-center justify-end py-2 pl-[53px] pr-2 sm:col-end-3 sm:pl-7 lg:pl-4">
        <h1
          style={{
            viewTransitionName: 'title',
          }}
          className="mr-auto font-readex_pro"
        >
          GraphiQL
        </h1>
        <IconButton
          onClick={() => setIsDocsShown((prev) => !prev)}
          data-tooltip={docsTooltip}
          data-testid="show_docs"
          className="tooltipElem"
        >
          <Icon>article</Icon>
        </IconButton>
      </header>
      <DocsComp isShown={isDocsShown} setIsDocsShown={setIsDocsShown} />
    </>
  );
};

export default Header;
