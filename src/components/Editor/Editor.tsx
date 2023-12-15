import { SyntheticEvent, useState } from 'react';

import useEditorSize from '@components/Editor/lib/hooks/useEditorSize';
import Controls from '@components/Editor/ui/Controls';
import EditorField from '@components/Editor/ui/EditorField';

const DEFAULT_VALUE = `# Welcome to GraphiQL
#
# GraphiQL is an in-browser tool for writing, validating, and
# testing GraphQL queries.
#
# Type queries into this side of the screen, and you will see intelligent
# typeaheads aware of the current GraphQL type schema and live syntax and
# validation errors highlighted within the text.
#
# GraphQL queries typically start with a "{" character. Lines that start
# with a # are ignored.
#
# An example GraphQL query might look like:
#
# {
#   field(arg: "value") {
#   subField
# }
`;

const Editor = () => {
  const { editorRef, size } = useEditorSize();
  const [value, setValue] = useState(DEFAULT_VALUE);

  const handleChange = (e: SyntheticEvent) => {
    const { value: textAreaValue } = e.target as HTMLTextAreaElement;
    setValue(textAreaValue);
  };

  return (
    <article
      ref={editorRef}
      className="flex h-full w-full gap-4 overflow-clip rounded-4xl bg-surface-container pl-7 pr-4 pt-7"
    >
      <EditorField size={size} value={value} onChange={handleChange} />
      <Controls editorValue={value} />
    </article>
  );
};

export default Editor;
