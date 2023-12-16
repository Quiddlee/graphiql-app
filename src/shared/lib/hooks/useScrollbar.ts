import { useEffect, useRef } from 'react';

import { OverlayScrollbars } from 'overlayscrollbars';

const useScrollbar = <TElem extends HTMLElement>(hasScroll: boolean = true) => {
	const root = useRef<TElem>(null);

	useEffect(() => {
		let scrollbars: OverlayScrollbars;

		if (root.current && hasScroll) {
			scrollbars = OverlayScrollbars(root.current, {
				scrollbars: {
					visibility: 'auto',
					autoHide: 'scroll',
					autoHideDelay: 500,
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
