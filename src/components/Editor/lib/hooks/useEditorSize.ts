import { useEffect, useRef, useState } from 'react';

const NUM_HEIGHT = 24;

const useEditorSize = () => {
	const editorRef = useRef(null);
	const [editorHeight, setEditorHeight] = useState(0);

	const size = editorHeight / NUM_HEIGHT - 3;

	useEffect(() => {
		if (editorRef.current) {
			const height = Number.parseInt(getComputedStyle(editorRef.current).height, 10);
			setEditorHeight(height);
		}
	}, []);

	return { editorRef, size };
};

export default useEditorSize;
