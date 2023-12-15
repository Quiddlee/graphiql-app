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
    return <EditorField size={7} value={variablesValue} onChange={(e) => setVariablesValue(e.target.value)} />;
  }

  return <EditorField size={7} value={headersValue} onChange={(e) => setHeadersValue(e.target.value)} />;
};

export default EditorToolsField;
