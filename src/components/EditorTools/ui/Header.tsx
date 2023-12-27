import { FC, useRef } from 'react';

import { MdTabs } from '@material/web/all';

import urlParams from '@shared/constants/urlParams';
import cn from '@shared/lib/helpers/cn';
import useUrl from '@shared/lib/hooks/useUrl';
import { HandleExpand } from '@shared/types';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';
import PrimaryTab from '@shared/ui/PrimaryTab';
import Tabs from '@shared/ui/Tabs';

type HeaderProps = {
  onExpand: HandleExpand;
  isExpanded: boolean;
};

const Header: FC<HeaderProps> = ({ onExpand, isExpanded }) => {
  const tabsRef = useRef<MdTabs>(null);
  const { setUrl, readUrl } = useUrl();

  const isVariablesTab = readUrl(urlParams.VARIABLES_TAB) === 'true';

  const handleTabSwitch = () => {
    const activeTabIndex = tabsRef.current?.activeTabIndex;

    if (activeTabIndex === undefined) return;

    setUrl(urlParams.VARIABLES_TAB, !activeTabIndex);
    onExpand(true);
  };

  return (
    <header className="flex h-12 w-full items-center justify-between gap-4 overflow-hidden border-b-2 border-outline-variant pr-4 duration-[inherit] ease-[inherit] before:absolute before:-top-[27px] before:left-[7.5px] before:z-0 before:block before:h-7 before:w-7 before:rounded-full before:bg-transparent before:[box-shadow:_-10px_10px_0_var(--md-sys-color-surface)] after:absolute after:-top-[27px] after:right-[7.5px] after:z-0 after:block after:h-7 after:w-7 after:rounded-full after:bg-transparent after:[box-shadow:_10px_10px_0_var(--md-sys-color-surface)] sm:items-stretch sm:gap-0 sm:pl-7 sm:before:hidden sm:after:hidden">
      <Tabs
        data-testid="editor-tools-tabs"
        className="h-12 w-full sm:h-auto sm:rounded-full lg:w-[360px] [&::part(divider)]:hidden"
        onChange={handleTabSwitch}
        ref={tabsRef}
      >
        <PrimaryTab data-testid="editor-tools-variables" active={isVariablesTab}>
          Variables
        </PrimaryTab>
        <PrimaryTab data-testid="editor-tools-headers" active={!isVariablesTab}>
          Headers
        </PrimaryTab>
      </Tabs>
      <IconButton
        data-testid="editor-tools-expand"
        className={cn(
          'animation-delay-700 min-w-[40px] rotate-180 animate-fade-in-standard duration-[inherit] ease-[inherit] sm:hidden lg:flex',
          {
            'rotate-0': isExpanded,
          },
        )}
        onClick={() => onExpand((prevState) => !prevState)}
      >
        <Icon>expand_more</Icon>
      </IconButton>
    </header>
  );
};

export default Header;
