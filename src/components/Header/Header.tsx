import { useState } from 'react';

import DocsComp from '@components/DocsComp/DocsComp';
import ShowDocsBtn from '@components/Header/ui/ShowDocsBtn';

const Header = () => {
  const [isDocsShown, setIsDocsShown] = useState(false);
  return (
    <>
      <header className="col-start-1 col-end-2 flex justify-between sm:col-end-3">
        <p>Here is still header</p>
        <div>
          <ShowDocsBtn onClick={() => setIsDocsShown((prev) => !prev)} />
        </div>
      </header>
      <DocsComp isShown={isDocsShown} setIsDocsShown={setIsDocsShown} />
    </>
  );
};

export default Header;
