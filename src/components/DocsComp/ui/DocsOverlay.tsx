const clazzName = 'overlay absolute left-0 top-0 flex min-h-full w-full justify-start bg-black/60 flex';
const invisibleClazz = 'hidden opacity-0 pointer-events-none';
const visibleClazz = 'visible opacity-100 pointer-events-auto';

type PropsType = {
  setIsDocsShown: React.Dispatch<React.SetStateAction<boolean>>;
  isShown: boolean;
  children: JSX.Element;
};

const DocsOverlay = ({ isShown, setIsDocsShown, children }: PropsType) => {
  function closeHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if ((e.target as HTMLButtonElement).classList.contains('overlay')) {
      setIsDocsShown((prev) => !prev);
    }
  }
  return (
    <button
      type="button"
      onClick={(e) => closeHandler(e)}
      className={`overlay ${isShown ? visibleClazz : invisibleClazz} ${clazzName}`}
    >
      {children}
    </button>
  );
};

export default DocsOverlay;
