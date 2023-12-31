import useView from '@components/ViewList/hooks/useView';
import { useLanguage } from '@shared/Context/hooks';
import Icon from '@shared/ui/Icon';

const AddView = () => {
  const { handleAddView } = useView();
  const { translation } = useLanguage();

  return (
    <button
      data-testid="add-view"
      onClick={handleAddView}
      type="button"
      className="flex w-fit transform-gpu items-center gap-3 rounded-full py-4 pl-4 pr-6 transition-all ease-standard hover:bg-[color-mix(in_srgb,_var(--md-sys-color-inverse-surface)_8%,_transparent)]"
    >
      <Icon>add</Icon> {translation.nav.viewList.addNewView}
    </button>
  );
};

export default AddView;
