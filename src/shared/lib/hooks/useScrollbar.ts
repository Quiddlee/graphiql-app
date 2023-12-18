import { useEffect, useRef } from 'react';

import { Options, OverlayScrollbars } from 'overlayscrollbars';

import { DeepPartial } from '@shared/lib/types/types';

const config: DeepPartial<Options> = {
	scrollbars: {
		visibility: 'auto',
		autoHide: 'leave',
		autoHideDelay: 500,
	},
};

const useScrollbar = <TElem extends HTMLElement>(hasScroll: boolean = true) => {
	const root = useRef<TElem>(null);

	useEffect(() => {
		let scrollbars: OverlayScrollbars;

		if (root.current && hasScroll) {
			scrollbars = OverlayScrollbars(root.current, config);
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
