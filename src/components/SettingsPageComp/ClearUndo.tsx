import { useEffect, useState } from 'react';

type UndoPropsType = {
  closeToast: () => void;
  title: string;
  btn: string;
};

const ClearUndo = (props: UndoPropsType) => {
  const { closeToast, title, btn } = props;
  const timeOutStab = setTimeout(() => {});
  const [deleteDataTimeout, setDeleteDataTimeout] = useState(timeOutStab);

  const dataClearance = () => {
    localStorage.removeItem('Some_very_inportant_app_info');
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dataClearance();
    }, 2000);

    setDeleteDataTimeout(timeoutId);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleClick = () => {
    clearTimeout(deleteDataTimeout);
    closeToast();
  };

  return (
    <div className="flex items-center justify-around text-sm">
      <p className="font-[400] text-inverse-on-surface">{title}</p>
      <button className="font-[500] text-inverse-primary" type="button" onClick={handleClick}>
        {btn}
      </button>
    </div>
  );
};

export default ClearUndo;
