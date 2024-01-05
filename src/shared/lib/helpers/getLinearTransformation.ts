function getLinearTransformation(position: number, maxWidth: number, expectedResult: number) {
	const relativePosition = position / maxWidth;
	const shifted = relativePosition - 0.5; // shift the range from [0, 1] to [-0.5, 0.5]
	const value = shifted * expectedResult; // multiply the value by the multiplier e.g. -0.5 * 60 = -30 | 0.5 * 60 = 30
	return value;
}

export default getLinearTransformation;
