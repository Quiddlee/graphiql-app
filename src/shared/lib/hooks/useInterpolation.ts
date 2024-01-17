import { useEffect, useMemo, useState } from 'react';

import calcInterpolation from '@shared/lib/helpers/calcInterpolation';

import calcOneToZeroInterpolation from '../helpers/calcOneToZeroInterpolation';

type UseInterpolationParams = {
	size: number;
	minSize: number;
	maxSize: number;
	interpolationStart: number;
	interpolationEnd: number;
	hideThreshold: number;
	isSizeIncrease: boolean;
};

/**
 * Custom hook for interpolation calculation based on size and thresholds.
 *
 * @param {Object} params - The parameters for the interpolation calculation.
 * @param {number} params.size - The current size value.
 * @param {number} params.minSize - The minimum size value.
 * @param {number} params.maxSize - The maximum size value.
 * @param {number} params.interpolationStart - The starting interpolation value.
 * @param {number} params.interpolationEnd - The ending interpolation value.
 * @param {number} [params.hideThreshold=minSize] - The threshold value for hiding the interpolation.
 * @param {boolean} params.isSizeIncrease - Flag indicating if the size is increasing.
 *
 * @returns {number} - The calculated interpolation value.
 */
function useInterpolation({
	size,
	minSize,
	maxSize,
	interpolationStart,
	interpolationEnd,
	hideThreshold = minSize,
	isSizeIncrease,
}: UseInterpolationParams) {
	const [interpolation, setInterpolation] = useState(interpolationStart);

	useEffect(() => {
		const isShowThresholdHit = isSizeIncrease ? size >= maxSize - hideThreshold : size <= minSize + hideThreshold;

		if (!isShowThresholdHit) {
			if (interpolation !== interpolationStart) setInterpolation(interpolationStart);
			return;
		}

		const currStep = isSizeIncrease ? maxSize - size : size - minSize;
		const interpolationValue = calcInterpolation(interpolationStart, interpolationEnd, hideThreshold, currStep);
		const isInterpolationInRange = interpolationValue >= interpolationEnd && interpolationValue <= interpolationStart;

		if (isInterpolationInRange) setInterpolation(interpolationValue);
	}, [interpolation, interpolationEnd, interpolationStart, minSize, size, hideThreshold, isSizeIncrease, maxSize]);

	const oneToZeroInterpolation = useMemo(() => {
		return calcOneToZeroInterpolation(interpolation, interpolationStart, interpolationEnd);
	}, [interpolation, interpolationEnd, interpolationStart]);

	return { interpolation, oneToZeroInterpolation };
}

export default useInterpolation;
