import { useEffect } from 'react';

import urlParams from '@shared/constants/urlParams';
import useUrl from '@shared/lib/hooks/useUrl';

const useExpand = (onExpand: (up: boolean) => void) => {
	const { readUrl } = useUrl();

	const isExpanded = readUrl(urlParams.EXPANDED) === 'true';

	useEffect(() => {
		if (isExpanded) {
			onExpand(true);
			return;
		}

		onExpand(false);
	}, [isExpanded, onExpand]);
};

export default useExpand;
