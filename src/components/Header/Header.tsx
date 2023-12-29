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
      <header className="col-span-full flex justify-between">
        <p>Here is still header</p>
        <div>
          <IconButton
            onClick={() => setIsDocsShown((prev) => !prev)}
            data-tooltip={docsTooltip}
            data-testid="show_docs"
            className="tooltipElem"
          >
            <Icon>article</Icon>
          </IconButton>
        </div>
      </header>
      <DocsComp isShown={isDocsShown} setIsDocsShown={setIsDocsShown} />
    </>
  );
};

export default Header;
