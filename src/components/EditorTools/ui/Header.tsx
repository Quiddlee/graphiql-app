import { FC, RefObject, useRef } from 'react';

import { MdTabs } from '@material/web/all';

import useExpand from '@components/EditorTools/lib/hooks/useExpand';
import cn from '@shared/lib/helpers/cn';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';
import PrimaryTab from '@shared/ui/PrimaryTab';
import Tabs from '@shared/ui/Tabs';

import useEditorTools from '../lib/hooks/useEditorTools';

type HeaderProps = {
  containerRef: RefObject<HTMLElement>;
};

const Header: FC<HeaderProps> = ({ containerRef }) => {
  const { setIsVariablesTab, setIsExpanded, isExpanded } = useEditorTools();
  const headerRef = useExpand({ containerRef, isExpanded });
  const tabsRef = useRef<MdTabs>(null);

  const handleTabSwitch = () => {
    const activeTabIndex = tabsRef.current?.activeTabIndex;

    if (activeTabIndex === undefined) return;

    setIsVariablesTab(!activeTabIndex);
    if (!isExpanded) setIsExpanded(true);
  };

  return (
    <header
      ref={headerRef}
      className="flex h-[48px] w-full justify-between border-b-2 border-outline-variant pl-7 pr-4 duration-[inherit] ease-[inherit]"
    >
      <Tabs className="w-[360px] rounded-full [&::part(divider)]:hidden" onchange={handleTabSwitch} ref={tabsRef}>
        <PrimaryTab>Variables</PrimaryTab>
        <PrimaryTab>Headers</PrimaryTab>
      </Tabs>
      <IconButton
        className={cn('rotate-180 duration-300 ease-[inherit]', {
          'rotate-0': isExpanded,
        })}
        onClick={() => setIsExpanded((prevState: boolean) => !prevState)}
      >
        <Icon>expand_more</Icon>
      </IconButton>
    </header>
  );
};

export default Header;
