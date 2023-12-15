import { useState } from 'react';

import EditorField from '@components/Editor/ui/EditorField';

import useEditorTools from '../lib/hooks/useEditorTools';

const DEFAULT_VALUE = `{
  ”schedule”: {
    “pipelineID”: “eqweqwEEWEQWRQWFSADFas”,
      “cronline: “@midnight”,
      “label”: “Nightly build”
  }
}`;

const EditorToolsField = () => {
  const { isVariablesTab } = useEditorTools();
  const [variablesValue, setVariablesValue] = useState(DEFAULT_VALUE);
  const [headersValue, setHeadersValue] = useState('');

  if (isVariablesTab) {
    return (
      <EditorField value={variablesValue} onChange={(e) => setVariablesValue((e.target as HTMLElement).innerHTML)} />
    );
  }

  return <EditorField value={headersValue} onChange={(e) => setHeadersValue((e.target as HTMLElement).innerHTML)} />;
};

export default EditorToolsField;
