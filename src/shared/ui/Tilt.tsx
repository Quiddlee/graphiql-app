import { cloneElement, FC, MouseEvent, ReactElement, useRef } from 'react';

import getElementMouseCoord from '@shared/lib/helpers/getElementMouseCoord';
import linearTransform from '@shared/lib/helpers/getLinearTransformation';
import useScreen from '@shared/lib/hooks/useScreen';

/**
 * TiltProps type definition.
 * @typedef {Object} TiltProps
 * @property {ReactElement} children - The child elements.
 * @property {number | string} [rotateRange=30] - The range of rotation.
 * @property {boolean} [reverse=false] - Whether to reverse the rotation direction.
 */
type TiltProps = {
  children: ReactElement;
  rotateRange?: number | string;
  reverse?: boolean;
};

/**
 * Tilt component. This component applies a tilt effect to its children based on mouse movement.
 * @param {TiltProps} props - The props.
 */
const Tilt: FC<TiltProps> = ({ children, rotateRange = 30, reverse }) => {
  const ref = useRef<HTMLElement>(null);
  const screenType = useScreen();
  const isTouch = screenType === 'tablet' || screenType === 'mobile';

  /**
   * Handles mouse movement over the component.
   * @param {MouseEvent} e - The mouse event.
   */
  function handleMove(e: MouseEvent) {
    if (!ref.current || isTouch) return;

    const { posX, posY } = getElementMouseCoord(ref.current, e);
    const elementWidth = ref.current.offsetWidth;

    const y = linearTransform(posX, elementWidth, Number(rotateRange));
    const x = linearTransform(posY, elementWidth, Number(rotateRange));

    let valueX = x;
    let valueY = -y;

    if (reverse) {
      valueX = -x;
      valueY = y;
    }

    ref.current.style.transform = `perspective(700px) rotateX(${valueX}deg) rotateY(${valueY}deg`;
  }

  /**
   * Handles mouse out event.
   */
  function handleOut() {
    if (!ref.current) return;
    ref.current.style.transform = '';
  }

  return cloneElement(children, { onMouseMove: handleMove, onMouseOut: handleOut, ref });
};

export default Tilt;
