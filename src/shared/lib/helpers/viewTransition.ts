import { flushSync } from 'react-dom';

/**
 * Function to handle view transitions.
 * If the document has a startViewTransition method, it will be used to start a transition.
 * Otherwise, the callback function will be executed immediately.
 *
 * @param {() => void} cb - The callback function to be executed after the transition.
 */
function viewTransition(cb: () => void) {
	if (!document.startViewTransition) {
		cb();
		return;
	}
	document.startViewTransition(() => {
		flushSync(() => {
			cb();
		});
	});
}

export default viewTransition;
