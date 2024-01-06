export const headingVariants = {
	offscreen: {
		y: '100%',
		opacity: 0,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			bounce: 0.4,
			duration: 1.2,
		},
	},
};

export const figureAnimation = {
	scale: [1, 1.1, 1],
	rotate: [0, 30, 0],
	skew: [0, 2, 0],
};

export const figureTransition = {
	duration: 10,
	ease: 'easeInOut',
	times: [0, 0.2, 0.5, 0.8, 1],
	repeat: Infinity,
	repeatDelay: 1,
};

export const viewPort = { once: true };

export const imgVariants = {
	offscreen: {
		rotate: 0,
		opacity: 0,
	},
	onscreen: {
		rotate: 10,
		opacity: 1,
		transition: {
			type: 'spring',
			bounce: 0.4,
			duration: 1,
		},
	},
};

export const imgVievPort = { margin: '-300px' };

export const scrollSpring = {
	stiffness: 100,
	damping: 50,
	restDelta: 0.001,
};
