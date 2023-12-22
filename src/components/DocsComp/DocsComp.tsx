import DocsModal from './ui/DocsModal';
import DocsOverlay from './ui/DocsOverlay';

type PropsType = {
  setIsDocsShown: React.Dispatch<React.SetStateAction<boolean>>;
  isShown: boolean;
};

const DocsComp = ({ isShown, setIsDocsShown }: PropsType) => {
  return (
    <DocsOverlay isShown={isShown} setIsDocsShown={setIsDocsShown}>
      <DocsModal setIsDocsShown={setIsDocsShown} />
    </DocsOverlay>
  );
};

export default DocsComp;
