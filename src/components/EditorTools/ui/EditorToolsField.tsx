import VariablesEditor from '@components/EditorTools/ui/VariablesEditor';
import urlParams from '@shared/constants/urlParams';
import useUrl from '@shared/lib/hooks/useUrl';

import HeadersEditor from './HeadersEditor';

const EditorToolsField = () => {
  const { readUrl } = useUrl();
  const isVariablesTab = readUrl(urlParams.VARIABLES_TAB) === 'true';

  return <div className="overflow-y-hidden pl-6">{isVariablesTab ? <VariablesEditor /> : <HeadersEditor />}</div>;
};

export default EditorToolsField;
