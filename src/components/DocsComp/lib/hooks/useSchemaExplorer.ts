import { useState } from 'react';

function useSchemaExplorer() {
	const [typeNames, setTypeNames] = useState(['Docs']);

	function current() {
		return typeNames[typeNames.length - 1];
	}
	function prev() {
		return typeNames[typeNames.length - 2];
	}
	function next(elem: string) {
		setTypeNames((prevEl) => [...prevEl, elem]);
	}
	function back() {
		if (typeNames.length > 1) {
			setTypeNames((prevEl) => prevEl.filter((_, i) => i < prevEl.length - 1));
		}
	}
	function isDocs() {
		return current() === 'Docs';
	}

	return { current, next, prev, isDocs, back };
}

export default useSchemaExplorer;
