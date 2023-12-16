import { SyntheticEvent, useState } from 'react';

import { EDITOR_DEFAULT_VALUE } from '@components/Editor/lib/const/const';
import Controls from '@components/Editor/ui/Controls';
import EditorField from '@components/Editor/ui/EditorField';

const Editor = () => {
  const [value, setValue] = useState(EDITOR_DEFAULT_VALUE);

  const handleChange = (e: SyntheticEvent) => {
    const { innerHTML } = e.target as HTMLTextAreaElement;
    if (innerHTML) setValue(innerHTML);
  };

  return (
    <article className="flex h-full w-full gap-4 overflow-y-hidden rounded-4xl bg-surface-container pl-7 pr-4">
      <EditorField value={value} onChange={handleChange} />
      <Controls editorValue={value} />
    </article>
  );
};

export default Editor;
