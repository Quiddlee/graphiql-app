import { useEffect, useState } from 'react';

import { ScreenTypes } from '@shared/types';

const DESKTOP_SIZE = 1024;

function useScreen() {
	const [screenType, setScreenType] = useState<ScreenTypes>('desktop');

	useEffect(() => {
		function handleResize() {
			const screenSize = window.innerWidth;
			let currentScreen: ScreenTypes = 'mobile';

			if (screenSize < DESKTOP_SIZE) currentScreen = 'tablet';
			if (screenSize > DESKTOP_SIZE) currentScreen = 'desktop';

			setScreenType(currentScreen);
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return screenType;
}

export default useScreen;
