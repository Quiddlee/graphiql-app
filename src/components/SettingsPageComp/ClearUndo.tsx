import { useEffect, useState } from 'react';

type UndoPropsType = {
  closeToast: () => void;
  title: string;
  btn: string;
};

const ClearUndo = (props: UndoPropsType) => {
  const { closeToast, title, btn } = props;
  const [deleteDataTimeout, setDeleteDataTimeout] = useState(null as unknown as NodeJS.Timeout);

  const dataClearance = () => {
    localStorage.clear();
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
    <div className="flex items-center text-sm">
      <p className="font-[400] text-inverse-on-surface">{title}</p>
      <button className="absolute right-3 font-[500] text-inverse-primary" type="button" onClick={handleClick}>
        {btn}
      </button>
    </div>
  );
};

export default ClearUndo;
