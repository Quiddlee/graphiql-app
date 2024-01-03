import { useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useLanguage } from '@/shared/Context/hooks';
import Icon from '@/shared/ui/Icon';
import IconButton from '@/shared/ui/IconButton';
import DocsComp from '@components/DocsComp/DocsComp';
import ROUTES from '@shared/constants/routes';
import viewTransition from '@shared/lib/helpers/viewTransition';
import useScreen from '@shared/lib/hooks/useScreen';

const Header = () => {
  const [isDocsShown, setIsDocsShown] = useState(false);
  const { translation } = useLanguage();
  const { pathname } = useLocation();
  const isSettings = pathname.slice(1) === ROUTES.SETTINGS;
  const navigate = useNavigate();
  const isMobile = useScreen() === 'mobile';

  const docsTooltip = translation.mainLayout.header.tooltips.docs;

  function handleClick() {
    viewTransition(() => navigate(-1));
  }

  return (
    <>
      <header className="col-start-1 col-end-2 flex w-full items-center justify-end py-2 pr-2 sm:col-end-3">
        {isSettings && !isMobile ? (
          <h1 style={{ viewTransitionName: 'title' }} className="mr-auto flex items-center pl-4 font-readex_pro">
            <button type="button" onClick={handleClick} className="flex h-12 w-12 items-center justify-center">
              <IconButton className="animate-fade-in-screen duration-500">
                <Icon>arrow_left_alts</Icon>
              </IconButton>
            </button>
            <span className="animate-fade-in-settings">Settings</span>
          </h1>
        ) : (
          <h1
            style={{
              viewTransitionName: 'title',
            }}
            className="ml-[53px] mr-auto animate-fade-in-title font-readex_pro sm:ml-7 lg:ml-4"
          >
            <Link to={ROUTES.WELCOME_PAGE}>GraphiQL</Link>
          </h1>
        )}
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
