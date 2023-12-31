import VariablesEditor from '@components/EditorTools/ui/VariablesEditor';
import urlParams from '@shared/constants/urlParams';
import useUrl from '@shared/lib/hooks/useUrl';

import HeadersEditor from './HeadersEditor';

const EditorToolsField = () => {
  const { readUrl } = useUrl();
  const isVariablesTab = readUrl(urlParams.VARIABLES_TAB) === 'true';

  return (
    <div className="overflow-y-hidden bg-surface-container-lowest pl-6 sm:bg-surface-container">
      {isVariablesTab ? <VariablesEditor /> : <HeadersEditor />}
    </div>
  );
};

export default EditorToolsField;
