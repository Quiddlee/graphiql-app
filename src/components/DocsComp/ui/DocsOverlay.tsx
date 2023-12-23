type PropsType = {
  setIsDocsShown: React.Dispatch<React.SetStateAction<boolean>>;
  isShown: boolean;
  explorer: {
    current: () => string;
    next: (elem: string) => void;
    prev: () => string;
    isDocs: () => boolean;
    back: () => void;
    setInitState: () => void;
  };
  children: JSX.Element;
};

const DocsOverlay = ({ isShown, setIsDocsShown, explorer, children }: PropsType) => {
  function closeHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if ((e.target as HTMLButtonElement).classList.contains('overlay')) {
      setIsDocsShown((prev) => !prev);
      explorer.setInitState();
    }
  }
  if (!isShown) {
    return null;
  }
  return (
    <button
      data-testid="overlay"
      type="button"
      onClick={(e) => closeHandler(e)}
      className="overlay absolute left-0 top-0 z-10 flex h-full w-full justify-start bg-black/60 "
    >
      {children}
    </button>
  );
};

export default DocsOverlay;
