import { useState } from 'react';

import DocsComp from '@components/DocsComp/DocsComp';

import ShowDocsBtn from './ui/ShowDocsBtn';

const Header = () => {
  const [isDocsShown, setIsDocsShown] = useState(false);
  return (
    <>
      <header className="col-span-full flex justify-between">
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
