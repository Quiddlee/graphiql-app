import { useEffect } from 'react';

import { COLLAPSED_HEIGHT, INITIAL_HEIGHT } from '@pages/MainPage/const/const';
import urlParams from '@shared/constants/urlParams';
import useUrl from '@shared/lib/hooks/useUrl';

const useExpandClick = (setSize: (newSize: number) => void, isResized: boolean) => {
	const { readUrl } = useUrl();
	const isExpanded = readUrl(urlParams.EXPANDED) === 'true';

	useEffect(() => {
		if (!isResized) setSize(isExpanded ? INITIAL_HEIGHT : COLLAPSED_HEIGHT);
	}, [isExpanded, isResized, setSize]);
};

export default useExpandClick;
