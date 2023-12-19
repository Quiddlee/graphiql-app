import { useEffect, useRef } from 'react';

import urlParams from '@shared/constants/urlParams';
import useUrl from '@shared/lib/hooks/useUrl';

const useExpand = (onExpand: (up: boolean) => void) => {
	const editorToolsTabsRef = useRef<HTMLHeadElement>(null);
	const { readUrl } = useUrl();

	const isExpanded = readUrl(urlParams.EXPANDED) === 'true';

	useEffect(() => {
		const editorToolsTabs = editorToolsTabsRef?.current;

		if (!editorToolsTabs) return;

		if (isExpanded) {
			onExpand(true);
			return;
		}

		onExpand(false);
	}, [isExpanded, onExpand]);

	return editorToolsTabsRef;
};

export default useExpand;
