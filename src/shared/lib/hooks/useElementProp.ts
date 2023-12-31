import { useEffect, useRef, useState } from 'react';

type UseElementProp = {
	propName: keyof CSSStyleDeclaration;
	initialValue: number;
};

/**
 * Custom hook to get a specific numeric CSS property value of an HTML element.
 *
 * @param {Object} params - The parameters for the hook.
 * @param {keyof CSSStyleDeclaration} params.propName - The name of the CSS property to retrieve.
 * @param {number} params.initialValue - The initial value of the CSS property.
 *
 * @returns {Object} The return object.
 * @returns {React.RefObject<HTMLDivElement>} The return object.elementRef - A ref to the HTML element.
 * @returns {number} The return object.elementHeight - The value of the CSS property.
 *
 * @example
 * const { elementRef, elementHeight } = useElementProp({ propName: 'height', initialValue: 0 });
 */
function useElementProp({ propName, initialValue }: UseElementProp) {
	const elementRef = useRef<HTMLDivElement>(null);
	const [elementProp, setElementProp] = useState(initialValue);

	useEffect(() => {
		const elem = elementRef.current;

		if (elem) {
			const prop = Number.parseInt(String(getComputedStyle(elem)[propName]), 10);
			setElementProp(prop);
		}
	}, [propName]);

	return { elementRef, elementProp };
}

export default useElementProp;
