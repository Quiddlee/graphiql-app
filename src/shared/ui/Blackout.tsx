import { FC, useEffect } from 'react';

import cn from '@shared/lib/helpers/cn';

type BlackoutProps = {
  isBlackout: boolean;
  unlock?: () => void;
  isScrollable?: boolean;
};

const Blackout: FC<BlackoutProps> = ({ isBlackout, unlock, isScrollable }) => {
  useEffect(() => {
    if (isScrollable) return;

    if (isBlackout) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isBlackout, isScrollable]);

  return (
    <button
      aria-label="blackout"
      type="button"
      onClick={unlock}
      className={cn(
        'invisible fixed inset-0 z-30 m-auto h-screen w-full cursor-auto opacity-0 transition-opacity duration-500 ease-standard-decelerate',
        {
          'visible bg-black/30 opacity-100': isBlackout,
          'pointer-events-none': !unlock,
        },
      )}
    />
  );
};

export default Blackout;
