import { Dispatch, KeyboardEvent, MouseEvent, ReactNode, SetStateAction } from 'react';

type PropsType = {
  setIsShown: Dispatch<SetStateAction<boolean>>;
  isShown: boolean;
  children: ReactNode;
};

const ConfirmOverlay = ({ isShown, setIsShown, children }: PropsType) => {
  function closeHandler(e: MouseEvent | KeyboardEvent) {
    if ((e.target as HTMLButtonElement).hasAttribute('data-overlay')) {
      setIsShown((prev) => !prev);
    }
  }
  if (!isShown) {
    return null;
  }
  return (
    <div
      data-testid="overlay"
      data-overlay
      onClick={(e) => closeHandler(e)}
      onKeyDown={(e) => closeHandler(e)}
      className="overlay absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/60"
    >
      {children}
    </div>
  );
};

export default ConfirmOverlay;
