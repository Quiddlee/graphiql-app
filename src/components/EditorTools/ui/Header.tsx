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
    <header className="flex h-[48px] w-full justify-between overflow-hidden border-b-2 border-outline-variant pl-7 pr-4 duration-[inherit] ease-[inherit]">
      <Tabs
        data-testid="editor-tools-tabs"
        className="w-full rounded-full lg:w-[360px] [&::part(divider)]:hidden"
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
          'animation-delay-700 hidden rotate-180 animate-fade-in-standard duration-[inherit] ease-[inherit] lg:flex',
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
