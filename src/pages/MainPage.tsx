import Editor from '@components/Editor/Editor';
import EditorTools from '@components/EditorTools/EditorTools';

const MainPage = () => {
  return (
    <div className="body-large grid h-full w-full grid-rows-[1fr_.3fr] gap-4">
      <Editor />
      <EditorTools />
    </div>
  );
};

export default MainPage;
