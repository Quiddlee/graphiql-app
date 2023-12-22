/**
 * Calculates the interpolated value for a specific step between two numbers.
 *
 * @param {number} startValue - The starting value of the range.
 * @param {number} endValue - The ending value of the range.
 * @param {number} numOfPoints - The total number of points in the interpolation.
 * @param {number} currentStep - The current step for which to calculate the interpolated value.
 * @returns {number} The interpolated value for the current step.
 */
function calcInterpolation(startValue: number, endValue: number, numOfPoints: number, currentStep: number): number {
	const decrement = (startValue - endValue) / numOfPoints;
	const interpolationValue = startValue - (numOfPoints - currentStep) * decrement;

	return interpolationValue;
}

export default calcInterpolation;
