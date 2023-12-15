import { useContext } from 'react';

import { EditorToolsContext } from '../../context/EditorToolsProvider';

const useEditorTools = () => {
	const context = useContext(EditorToolsContext);

	if (context === undefined) throw new Error('The editor tools context is used outside a provider!');

	return context;
};

export default useEditorTools;
