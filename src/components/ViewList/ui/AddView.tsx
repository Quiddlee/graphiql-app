import useView from '@components/ViewList/hooks/useView';
import Icon from '@shared/ui/Icon';

const AddView = () => {
  const { handleAddView } = useView();

  return (
    <button
      onClick={handleAddView}
      type="button"
      className="flex w-fit transform-gpu items-center gap-3 rounded-full py-4 pl-4 pr-6 transition-all ease-standard hover:bg-[color-mix(in_srgb,_var(--md-sys-color-inverse-surface)_8%,_transparent)]"
    >
      <Icon>add</Icon> New view
    </button>
  );
};

export default AddView;
