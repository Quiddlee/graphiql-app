import { FC, useRef } from 'react';

import { MdTabs } from '@material/web/all';

import useExpand from '@components/EditorTools/lib/hooks/useExpand';
import urlParams from '@shared/constants/urlParams';
import cn from '@shared/lib/helpers/cn';
import useUrl from '@shared/lib/hooks/useUrl';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';
import PrimaryTab from '@shared/ui/PrimaryTab';
import Tabs from '@shared/ui/Tabs';

type HeaderProps = {
  onExpand: (up: boolean) => void;
};

const Header: FC<HeaderProps> = ({ onExpand }) => {
  const headerRef = useExpand(onExpand);
  const tabsRef = useRef<MdTabs>(null);
  const { setUrl, readUrl } = useUrl();

  const isExpanded = readUrl(urlParams.EXPANDED) === 'true';
  const isVariablesTab = readUrl(urlParams.VARIABLES_TAB) === 'true';

  const handleTabSwitch = () => {
    const activeTabIndex = tabsRef.current?.activeTabIndex;

    if (activeTabIndex === undefined) return;

    setUrl(urlParams.VARIABLES_TAB, !activeTabIndex);
    if (!isExpanded) setUrl(urlParams.EXPANDED, true);
  };

  return (
    <header
      ref={headerRef}
      className="flex h-[48px] w-full justify-between border-b-2 border-outline-variant pl-7 pr-4 duration-[inherit] ease-[inherit]"
    >
      <Tabs
        data-testid="editor-tools-tabs"
        className="w-[360px] rounded-full [&::part(divider)]:hidden"
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
        className={cn('rotate-180 duration-[inherit] ease-[inherit]', {
          'rotate-0': isExpanded,
        })}
        onClick={() => setUrl(urlParams.EXPANDED, !isExpanded)}
      >
        <Icon>expand_more</Icon>
      </IconButton>
    </header>
  );
};

export default Header;
