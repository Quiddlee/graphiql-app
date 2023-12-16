import { useEffect, useRef, useState } from 'react';

const useEditorSize = () => {
	const [editorHeight, setEditorHeight] = useState(1);
	const [editorNumHeight, setEditorNumHeight] = useState(1);

	const editorRef = useRef<HTMLDivElement>(null);
	const editorNumRef = useRef<HTMLLIElement>(null);

	const editorNumbersNum = editorHeight / editorNumHeight;

	useEffect(() => {
		// Observe the editor resize and update numbers num according to a new size

		const editorElem = editorRef.current;

		function observeEditor() {
			if (!editorElem) return;

			const height = Number.parseInt(getComputedStyle(editorElem).height, 10);
			setEditorHeight(height);
		}

		const resizeObserver = new ResizeObserver(observeEditor);
		if (editorElem) resizeObserver.observe(editorElem);

		return () => resizeObserver?.disconnect();
	}, []);

	useEffect(() => {
		// When component is rendered the first time we need to get the height 1 of the editor numbers num.

		if (!editorNumRef.current) return;

		const editorNumsHeight = Number.parseInt(getComputedStyle(editorNumRef.current).height, 10);
		setEditorNumHeight(editorNumsHeight);
	}, []);

	return { editorRef, editorNumbersNum, editorNumRef };
};

export default useEditorSize;
