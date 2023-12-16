import { useState } from 'react';

import { EDITOR_TOOLS_DEFAULT_VALUE } from '@components/Editor/lib/const/const';
import EditorField from '@components/Editor/ui/EditorField';

import useEditorTools from '../lib/hooks/useEditorTools';

const EditorToolsField = () => {
  const { isVariablesTab } = useEditorTools();
  const [variablesValue, setVariablesValue] = useState(EDITOR_TOOLS_DEFAULT_VALUE);
  const [headersValue, setHeadersValue] = useState('');

  if (isVariablesTab) {
    return (
      <EditorField
        key="variables"
        value={variablesValue}
        onChange={(e) => setVariablesValue((e.target as HTMLElement).innerHTML)}
      />
    );
  }

  return (
    <EditorField
      key="headers"
      value={headersValue}
      onChange={(e) => setHeadersValue((e.target as HTMLElement).innerHTML)}
    />
  );
};

export default EditorToolsField;
