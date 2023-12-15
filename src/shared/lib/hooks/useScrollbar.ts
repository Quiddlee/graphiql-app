import { useEffect, useRef } from 'react';

import { OverlayScrollbars } from 'overlayscrollbars';

const useScrollbar = (hasScroll: boolean = true) => {
	const root = useRef<HTMLElement>(null);

	useEffect(() => {
		let scrollbars: OverlayScrollbars;

		if (root.current && hasScroll) {
			scrollbars = OverlayScrollbars(root.current, {
				scrollbars: {
					visibility: 'auto',
					autoHide: 'never',
				},
			});
		}

		return () => {
			if (scrollbars) {
				scrollbars.destroy();
			}
		};
	}, [root, hasScroll]);

	return root;
};

export default useScrollbar;
