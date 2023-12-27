import useSchemaExplorer from './lib/hooks/useSchemaExplorer';
import DocsModal from './ui/DocsModal';
import DocsOverlay from './ui/DocsOverlay';

type PropsType = {
  setIsDocsShown: React.Dispatch<React.SetStateAction<boolean>>;
  isShown: boolean;
};

const DocsComp = ({ isShown, setIsDocsShown }: PropsType) => {
  const schemaExplorer = useSchemaExplorer();
  return (
    <DocsOverlay isShown={isShown} setIsDocsShown={setIsDocsShown} explorer={schemaExplorer}>
      <DocsModal setIsDocsShown={setIsDocsShown} explorer={schemaExplorer} />
    </DocsOverlay>
  );
};

export default DocsComp;
