import { SyntheticEvent, useState } from 'react';

import Controls from '@components/Editor/ui/Controls';
import EditorField from '@components/Editor/ui/EditorField';

const Editor = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: SyntheticEvent) => {
    const { innerHTML } = e.target as HTMLTextAreaElement;
    if (innerHTML) setValue(innerHTML);
  };

  // TODO: fix container paddings
  // TODO: fix font theme tokens
  // TODO: fix editor tools tab switching
  // TODO: add editor default value
  // TODO: add editor default size

  return (
    <article className="flex h-full w-full gap-4 overflow-y-hidden rounded-4xl bg-surface-container pl-7 pr-4">
      <EditorField value={value} onChange={handleChange} />
      <Controls editorValue={value} />
    </article>
  );
};

export default Editor;
