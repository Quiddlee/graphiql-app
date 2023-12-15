import { useRef, useState } from 'react';

import { MdTabs } from '@material/web/all';

import EditorToolsField from '@components/EditorTools/ui/EditorToolsField';
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
    <article className="grid gap-7 rounded-4xl bg-surface-container py-4 pl-[26px] pr-4">
      <Tabs onchange={handleTabSwitch} ref={tabsRef}>
        <PrimaryTab>Variables</PrimaryTab>
        <PrimaryTab>Headers</PrimaryTab>
      </Tabs>
      <EditorToolsField isVariablesTab={isVariablesTab} />
    </article>
  );
};

export default EditorTools;
