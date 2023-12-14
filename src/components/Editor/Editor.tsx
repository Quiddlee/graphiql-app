import { SyntheticEvent, useState } from 'react';

import useEditorSize from '@components/Editor/lib/hooks/useEditorSize';
import Controls from '@components/Editor/ui/Controls';
import LineNumbers from '@components/Editor/ui/LineNumbers';
import TextArea from '@components/Editor/ui/TextArea';

const Editor = () => {
  const { editorRef, size } = useEditorSize();
  const [value, setValue] = useState('');

  const handleChange = (e: SyntheticEvent) => {
    const { value: textAreaValue } = e.target as HTMLTextAreaElement;
    setValue(textAreaValue);
  };

  return (
    <article
      ref={editorRef}
      className="body-large flex h-full w-full gap-4 overflow-clip rounded-4xl bg-surface-container py-7 pl-7 pr-4 font-jetbrains_mono"
    >
      <LineNumbers size={size} />
      <TextArea value={value} onChange={handleChange} />
      <Controls editorValue={value} />
    </article>
  );
};

export default Editor;
