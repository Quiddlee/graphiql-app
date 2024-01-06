import { MouseEvent, useRef } from 'react';

import createRadialHover from '@shared/lib/helpers/animateRadialHover';
import useScreen from '@shared/lib/hooks/useScreen';

type UseRadialHoverParams = {
	size?: number;
	color: string;
	animationDuration?: number;
};

/**
 * Attaches radial hover effect to a container element.
 *
 * @template TContainer - The type of the container element.
 * @returns obj - Returns an object with event handler functions and a container reference..
 * @returns obj.handleMouseMove: (e: MouseEvent) => void.
 * @returns obj.handleMouseOut: () => void.
 * @returns obj.containerRef: React.MutableRefObject<TContainer | null>.
 */
function useRadialHover<TContainer extends HTMLElement>({ size, animationDuration, color }: UseRadialHoverParams) {
	const containerRef = useRef<TContainer>(null);
	const [radialHover, cleanUp] = createRadialHover(color, size, animationDuration);
	const screenType = useScreen();
	const isTouch = screenType === 'tablet' || screenType === 'mobile';

	const handleMouseMove = (e: MouseEvent) => {
		if (isTouch) return;
		if (containerRef.current) radialHover(containerRef.current, e);
	};

	const handleMouseOut = () => {
		if (isTouch) return;
		if (containerRef.current) cleanUp(containerRef.current);
	};

	return { handleMouseMove, handleMouseOut, containerRef };
}

export default useRadialHover;
