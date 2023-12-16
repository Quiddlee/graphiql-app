import VariablesEditor from '@components/EditorTools/ui/VariablesEditor';

import HeadersEditor from './HeadersEditor';
import useEditorTools from '../lib/hooks/useEditorTools';

const EditorToolsField = () => {
  const { isVariablesTab } = useEditorTools();

  return <div className="overflow-y-hidden pl-7">{isVariablesTab ? <VariablesEditor /> : <HeadersEditor />}</div>;
};

export default EditorToolsField;
