import { MouseEvent } from 'react';

import colors from 'tailwindcss/colors';

import getElementMouseCoord from '@shared/lib/helpers/getElementMouseCoord';

type AnimationFn = (elem: HTMLElement, evt: MouseEvent) => void;

type CleanUpFn = (elem: HTMLElement) => void;

type RadialHover = [AnimationFn, CleanUpFn];

let animationDuration = 450;
let radialColor = 'rgb(112, 26, 117, 0.5)';
let threshold = 200;
let isEnd = false;
let animationFrameId: number;
let pointerX = 0;
let pointerY = 0;

function animate(currTimeStamp: number, startTimeStamp: number, elem: HTMLElement) {
	const animationProgress = (currTimeStamp - startTimeStamp) / animationDuration;
	const value = Math.sin((animationProgress * Math.PI) / 2);

	if (animationProgress < 1) {
		elem.style.background = `radial-gradient(circle at ${pointerX}px ${pointerY}px, ${radialColor} 0%, ${
			colors.transparent
		} ${value * threshold}px)`;
		animationFrameId = requestAnimationFrame((t) => animate(t, startTimeStamp, elem));
	}

	if (animationProgress >= 1) {
		elem.style.background = `radial-gradient(circle at ${pointerX}px ${pointerY}px, ${radialColor} 0%, ${colors.transparent} ${threshold}px)`;
		isEnd = true;
	}
}

function animateRadialHover(elem: HTMLElement, e: MouseEvent) {
	const { posX, posY } = getElementMouseCoord(elem, e);
	const startTimeStamp = performance.now();
	pointerX = posX;
	pointerY = posY;

	if (isEnd) {
		elem.style.background = `radial-gradient(circle at ${posX}px ${posY}px, ${radialColor} 0%, ${colors.transparent} ${threshold}px)`;
		return;
	}

	if (!animationFrameId) animationFrameId = requestAnimationFrame(() => animate(startTimeStamp, startTimeStamp, elem));
}

function cleanUp(elem: HTMLElement) {
	cancelAnimationFrame(animationFrameId);
	animationFrameId = 0;
	elem.style.background = '';
	isEnd = false;
}

function createRadialHover(color: string, size: number = 200, growDuration: number = 450): RadialHover {
	threshold = size;
	radialColor = color;
	animationDuration = growDuration;
	return [animateRadialHover, cleanUp];
}

export default createRadialHover;
