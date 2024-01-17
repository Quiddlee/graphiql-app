import { MouseEvent as ReactMouseEvent } from 'react';

/**
 * Calculates the mouse coordinates relative to an HTML element.
 *
 * @param {TElem} elem - The HTML element to calculate the coordinates relative to.
 * @param {MouseEvent | ReactMouseEvent} e - The mouse event object containing the client coordinates.
 * @throws {Error} - If the element's bounding rectangle cannot be obtained.
 * @return mouseCoord - An object containing the X and Y coordinates of the mouse relative to the element.
 * @return mouseCoord.posX {number} - Position X.
 * @return mouseCoord.posY {number} - Position Y.
 */
function getElementMouseCoord<TElem extends HTMLElement>(elem: TElem, e: MouseEvent | ReactMouseEvent) {
	const elemBCR = elem.getBoundingClientRect();

	if (!elemBCR) throw new Error('Cannot get elements bounding rect!');

	const posX = e.clientX - elemBCR.x;
	const posY = e.clientY - elemBCR.y;

	return { posX, posY };
}

export default getElementMouseCoord;
