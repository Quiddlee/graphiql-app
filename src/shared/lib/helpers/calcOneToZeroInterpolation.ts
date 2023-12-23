/**
 * Calculates the interpolation from one to zero based on the current interpolation and the start and end values.
 *
 * @param {number} currInterpolation - The current interpolation value.
 * @param {number} interpolationStart - The start value for the interpolation.
 * @param {number} interpolationEnd - The end value for the interpolation.
 * @returns {number} The calculated interpolation from one to zero.
 */
function calcOneToZeroInterpolation(currInterpolation: number, interpolationStart: number, interpolationEnd: number) {
	return (currInterpolation - interpolationEnd) / (interpolationStart - interpolationEnd);
}
export default calcOneToZeroInterpolation;
