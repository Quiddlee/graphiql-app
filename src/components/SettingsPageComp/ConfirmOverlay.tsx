type PropsType = {
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
  isShown: boolean;
  children: JSX.Element;
};

const ConfirmOverlay = ({ isShown, setIsShown, children }: PropsType) => {
  function closeHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if ((e.target as HTMLButtonElement).hasAttribute('data-overlay')) {
      setIsShown((prev) => !prev);
    }
  }
  if (!isShown) {
    return null;
  }
  return (
    <button
      data-testid="overlay"
      data-overlay
      type="button"
      onClick={(e) => closeHandler(e)}
      className="overlay absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/60"
    >
      {children}
    </button>
  );
};

export default ConfirmOverlay;
