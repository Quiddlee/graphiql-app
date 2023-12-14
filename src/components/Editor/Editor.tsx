import useEditorSize from '@components/Editor/lib/hooks/useEditorSize';
import LineNumbers from '@components/Editor/ui/LineNumbers';
import TextArea from '@components/Editor/ui/TextArea';

const Editor = () => {
  const { editorRef, size } = useEditorSize();

  return (
    <article
      ref={editorRef}
      className="body-large flex h-full w-full gap-4 overflow-clip rounded-4xl bg-surface-container p-7 font-jetbrains_mono"
    >
      <LineNumbers size={size} />
      <TextArea />
    </article>
  );
};

export default Editor;
