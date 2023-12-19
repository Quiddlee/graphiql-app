import { useEffect, useRef, useState } from 'react';

import calcInterpolation from '@shared/lib/helpers/calcInterpolation';

type UseResizeParams = {
	initialHeight: number;
	minSize: number;
	maxSize: number;
	interpolationStart: number;
	interpolationEnd: number;
	hideThreshold: number;
	startThreshold?: number;
};

/**
 * A custom hook that provides functionality for resizable layout.
 *
 * @param {Object} params - The parameters for the hook.
 * @param {number} params.initialHeight - The initial height of the resizable element.
 * @param {number} params.minSize - The minimum size that the resizable element can be.
 * @param {number} params.maxSize - The maximum size that the resizable element can be.
 * @param {number} params.interpolationStart - The start value for the interpolation.
 * @param {number} params.interpolationEnd - The end value for the interpolation.
 * @param {number} params.hideThreshold - The threshold at which the resizable element should be hidden.
 * @param {number} [params.startThreshold=params.hideThreshold] - The threshold at which the resizing should start.
 *
 * @returns {Object} The state and handlers for the resizable layout.
 * @returns {number} .height - The current height of the resizable element.
 * @returns {boolean} .isHidden - A boolean indicating whether the resizable element is hidden.
 * @returns {number} .interpolation - The current interpolation value.
 * @returns {React.MutableRefObject} .isResized - A ref object indicating whether the resizable element is being resized.
 * @returns {function} .handleResize - A function to be called when the resizable element should be resized.
 * @returns {function} .setSize - A function to set the size of the resizable element.
 */
function useResize({
	initialHeight,
	minSize,
	maxSize,
	interpolationStart,
	interpolationEnd,
	hideThreshold,
	startThreshold = hideThreshold,
}: UseResizeParams) {
	const [size, setSize] = useState(initialHeight);
	const [isHidden, setIsHidden] = useState(false);
	const [interpolation, setInterpolation] = useState(interpolationStart);
	const isResized = useRef(false);

	function handleResize() {
		isResized.current = true;
	}

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!isResized.current) return;

			setSize((prevSize) => {
				const newSize = prevSize - e.movementY;
				const isHideThresholdHit = newSize >= maxSize - hideThreshold;

				if (isHideThresholdHit) {
					const currStep = maxSize - newSize;
					const interpolationValue = calcInterpolation(interpolationStart, interpolationEnd, hideThreshold, currStep);
					const isInterpolationInRange =
						interpolationValue >= interpolationEnd && interpolationValue <= interpolationStart;

					if (isInterpolationInRange) setInterpolation(interpolationValue);
				} else {
					setInterpolation(interpolationStart);
				}

				const isWidthInRange = newSize >= minSize && newSize <= maxSize;
				return isWidthInRange ? newSize : prevSize;
			});
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, [hideThreshold, interpolationEnd, interpolationStart, maxSize, minSize, startThreshold]);

	useEffect(() => {
		const handleMouseUp = () => {
			isResized.current = false;
			const isStartThresholdHit = size <= minSize + startThreshold;
			const isHideThresholdHit = size >= maxSize - hideThreshold;

			if (isStartThresholdHit) {
				setSize(minSize);
			}

			if (isHideThresholdHit) {
				setSize(maxSize);
			}
		};

		window.addEventListener('mouseup', handleMouseUp);
		return () => window.removeEventListener('mouseup', handleMouseUp);
	}, [maxSize, size, hideThreshold, interpolationEnd, minSize, startThreshold]);

	useEffect(() => {
		const isMaxSize = size >= maxSize;

		if (isMaxSize) {
			setIsHidden(true);
		} else {
			setIsHidden(false);
		}
	}, [interpolationStart, maxSize, size]);

	useEffect(() => {
		if (size <= maxSize - hideThreshold) {
			setInterpolation(interpolationStart);
		}
	}, [hideThreshold, interpolationEnd, interpolationStart, maxSize, size]);

	return { height: size, isHidden, interpolation, isResized, handleResize, setSize };
}

export default useResize;
