import { useRef, useState } from 'react';

import { MdTabs } from '@material/web/all';

import EditorToolsField from '@components/EditorTools/ui/EditorToolsField';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';
import PrimaryTab from '@shared/ui/PrimaryTab';
import Tabs from '@shared/ui/Tabs';

const EditorTools = () => {
  const [isVariablesTab, setIsVariablesTab] = useState(true);
  const tabsRef = useRef<MdTabs>(null);

  const handleTabSwitch = () => {
    const activeTabIndex = tabsRef.current?.activeTabIndex;

    if (activeTabIndex === undefined) return;

    setIsVariablesTab(!activeTabIndex);
  };

  return (
    <article className="grid gap-7 rounded-4xl bg-surface-container py-4">
      <header className="flex w-full justify-between border-b-2 border-outline-variant pl-7 pr-4">
        <Tabs className="w-[360px] rounded-full [&::part(divider)]:hidden" onchange={handleTabSwitch} ref={tabsRef}>
          <PrimaryTab>Variables</PrimaryTab>
          <PrimaryTab>Headers</PrimaryTab>
        </Tabs>
        <IconButton>
          <Icon>expand_more</Icon>
        </IconButton>
      </header>
      <div className="pl-7 pr-4">
        <EditorToolsField isVariablesTab={isVariablesTab} />
      </div>
    </article>
  );
};

export default EditorTools;
