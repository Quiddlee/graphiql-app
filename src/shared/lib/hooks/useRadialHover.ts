import { MouseEvent, useRef } from 'react';

import createRadialHover from '@shared/lib/helpers/animateRadialHover';

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

	const handleMouseMove = (e: MouseEvent) => {
		if (containerRef.current) radialHover(containerRef.current, e);
	};

	const handleMouseOut = () => {
		if (containerRef.current) cleanUp(containerRef.current);
	};

	return { handleMouseMove, handleMouseOut, containerRef };
}

export default useRadialHover;
