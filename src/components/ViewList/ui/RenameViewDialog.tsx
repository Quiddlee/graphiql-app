import { FC, useCallback, useState } from 'react';

import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import { createPortal } from 'react-dom';

import useView from '@components/Nav/hooks/useView';
import Dialog from '@shared/ui/Dialog';
import FilledTonalButton from '@shared/ui/FilledTonalButton';
import OutlinedTextField from '@shared/ui/OutlinedTextField';
import TextButton from '@shared/ui/TextButton';

type RenameViewDialogProps = {
  id: number;
  onToggle: (open: boolean) => void;
  open: boolean;
};

const RenameViewDialog: FC<RenameViewDialogProps> = ({ id, open, onToggle }) => {
  const { handleRenameView, views } = useView();

  const viewName = views.find((view) => view.id === id)?.name ?? '';
  const [val, setVal] = useState(viewName);
  const [isDisabled, setIsDisabled] = useState(true);

  if (val === viewName && !isDisabled) {
    setIsDisabled(true);
  } else if (val !== viewName && isDisabled) {
    setIsDisabled(false);
  }

  const handleRename = useCallback(
    (newName: string) => {
      handleRenameView(id, newName);
      onToggle(false);
    },
    [handleRenameView, id, onToggle],
  );

  return createPortal(
    <Dialog closed={() => onToggle(false)} open={open}>
      <h3 className="pr-60" slot="headline">
        Rename this view
      </h3>
      <form slot="content" id="form-id" method="dialog">
        <OutlinedTextField
          onInput={(e) => {
            setVal((e.target as MdOutlinedTextField).value);
          }}
          className="w-full text-start"
          textDirection="ltr"
          value={val}
        />
      </form>
      <div slot="actions">
        <TextButton onClick={() => onToggle(false)}>Cancel</TextButton>
        <FilledTonalButton onClick={() => handleRename(val)} disabled={isDisabled}>
          Rename
        </FilledTonalButton>
      </div>
    </Dialog>,
    document.body,
  );
};

export default RenameViewDialog;
