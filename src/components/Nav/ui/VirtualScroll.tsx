import { FC } from 'react';

type VirtualScrollProps = {
  size?: number | string;
};

const VirtualScroll: FC<VirtualScrollProps> = ({ size = 5 }) => {
  return (
    <>
      {Array.from({ length: Number(size) }, (_, i) => (
        <br key={i} />
      ))}
    </>
  );
};

export default VirtualScroll;
