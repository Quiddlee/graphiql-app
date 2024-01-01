import { useContext } from 'react';

import { EditorContext } from '@components/Editor/context/EditorProvider';

function useEditor() {
	const context = useContext(EditorContext);

	if (context === undefined) {
		throw new Error('useEditor must be used within a EditorProvider');
	}

	return context;
}

export default useEditor;
