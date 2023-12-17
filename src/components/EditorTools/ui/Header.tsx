import { FC, RefObject, useRef } from 'react';

import { MdTabs } from '@material/web/all';

import useExpand from '@components/EditorTools/lib/hooks/useExpand';
import urlParams from '@shared/constatns/urlParams';
import cn from '@shared/lib/helpers/cn';
import useUrl from '@shared/lib/hooks/useUrl';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';
import PrimaryTab from '@shared/ui/PrimaryTab';
import Tabs from '@shared/ui/Tabs';

type HeaderProps = {
  containerRef: RefObject<HTMLElement>;
};

const Header: FC<HeaderProps> = ({ containerRef }) => {
  const headerRef = useExpand(containerRef);
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
      <Tabs className="w-[360px] rounded-full [&::part(divider)]:hidden" onChange={handleTabSwitch} ref={tabsRef}>
        <PrimaryTab active={isVariablesTab}>Variables</PrimaryTab>
        <PrimaryTab active={!isVariablesTab}>Headers</PrimaryTab>
      </Tabs>
      <IconButton
        className={cn('rotate-180 duration-300 ease-[inherit]', {
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
