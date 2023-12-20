import { useEffect } from 'react';

import { COLLAPSED_HEIGHT, START_EDITOR_THRESHOLD } from '@pages/MainPage/const/const';
import urlParams from '@shared/constants/urlParams';
import useUrl from '@shared/lib/hooks/useUrl';

function useDefineIsExpanded(height: number, isResized: boolean) {
	const { readUrl, setUrl } = useUrl();
	const isExpandedOpen = readUrl(urlParams.EXPANDED) === 'true';

	useEffect(() => {
		const isResizeHitExpanded = height >= START_EDITOR_THRESHOLD && isResized;
		const isResizeHitCollapsed = height <= COLLAPSED_HEIGHT && isResized;

		if (isResizeHitExpanded && !isExpandedOpen) {
			setUrl(urlParams.EXPANDED, true);
		}

		if (isResizeHitCollapsed && isExpandedOpen) {
			setUrl(urlParams.EXPANDED, false);
		}
	}, [height, isExpandedOpen, isResized, setUrl]);
}

export default useDefineIsExpanded;
