import { RefObject, useEffect, useRef } from 'react';

import urlParams from '@shared/constants/urlParams';
import useUrl from '@shared/lib/hooks/useUrl';

const useExpand = (containerRef: RefObject<HTMLElement>) => {
	const editorToolsTabsRef = useRef<HTMLHeadElement>(null);
	const { readUrl } = useUrl();

	const isExpanded = readUrl(urlParams.EXPANDED) === 'true';

	useEffect(() => {
		const requestContainer = containerRef?.current;
		const editorToolsTabs = editorToolsTabsRef?.current;

		if (!requestContainer || !editorToolsTabs) return;

		if (isExpanded) {
			requestContainer.style.gridTemplateRows = '';
			return;
		}

		const headerHeight = Number.parseInt(getComputedStyle(editorToolsTabs).height, 10);
		const containerPaddingTop = Number.parseInt(getComputedStyle(requestContainer).paddingTop, 10);
		const parentContainerGap = Number.parseInt(getComputedStyle(requestContainer).gap, 10);
		const collapsedHeight = `${headerHeight + containerPaddingTop + parentContainerGap}px`;

		requestContainer.style.gridTemplateRows = `auto ${collapsedHeight}`;
	}, [containerRef, isExpanded]);

	return editorToolsTabsRef;
};

export default useExpand;
