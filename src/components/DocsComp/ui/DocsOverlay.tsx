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
  function closeHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>) {
    if ((e.target as HTMLButtonElement).hasAttribute('data-overlay')) {
      setIsDocsShown((prev) => !prev);
      explorer.setInitState();
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
      className="overlay absolute left-0 top-0 z-20 flex h-full w-full justify-start bg-black/60 "
    >
      {children}
    </div>
  );
};

export default DocsOverlay;
