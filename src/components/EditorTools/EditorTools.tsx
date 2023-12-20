import EditorToolsField from '@components/EditorTools/ui/EditorToolsField';
import Header from '@components/EditorTools/ui/Header';
import cn from '@shared/lib/helpers/cn';

const EditorTools = () => {
  return (
    <section
      data-testid="editor-tools"
      className={cn(
        'grid h-full grid-rows-[min-content_auto] overflow-clip rounded-4xl bg-surface-container pt-4 transition-all duration-[inherit] ease-[inherit]',
      )}
    >
      <Header />
      <EditorToolsField />
    </section>
  );
};

export default EditorTools;
