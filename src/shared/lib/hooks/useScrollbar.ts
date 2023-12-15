import { RefObject, useEffect } from 'react';

import { OverlayScrollbars } from 'overlayscrollbars';

const useScrollbar = (root: RefObject<HTMLElement>, hasScroll: boolean) => {
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
};

export default useScrollbar;
