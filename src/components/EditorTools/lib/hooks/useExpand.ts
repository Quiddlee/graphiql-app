import { RefObject, useEffect, useRef } from 'react';

import urlParams from '@shared/constants/urlParams';
import useUrl from '@shared/lib/hooks/useUrl';

const useExpand = (containerRef: RefObject<HTMLElement>) => {
	const headerRef = useRef<HTMLHeadElement>(null);
	const { readUrl } = useUrl();

	const isExpanded = readUrl(urlParams.EXPANDED) === 'true';

	useEffect(() => {
		const container = containerRef?.current;
		const header = headerRef?.current;

		if (!container || !header) return;

		if (isExpanded) {
			container.style.gridTemplateRows = '';
			container.style.cssText = `
        transition-timing-function: cubic-bezier(0.05, 0.7, 0.1, 1.0);
        transition-duration: 400ms
      `;
			return;
		}

		const headerHeight = Number.parseInt(getComputedStyle(header).height, 10);
		const containerPaddingTop = Number.parseInt(getComputedStyle(container).paddingTop, 10);
		const parentContainerGap = Number.parseInt(getComputedStyle(container).gap, 10);
		const collapsedHeight = `${headerHeight + containerPaddingTop + parentContainerGap}px`;

		container.style.cssText = `
        grid-template-rows: auto ${collapsedHeight};
        transition-timing-function: cubic-bezier(0.3, 0.0, 0.8, 0.15);
        transition-duration: 200ms
      `;
	}, [containerRef, isExpanded]);

	return headerRef;
};

export default useExpand;
