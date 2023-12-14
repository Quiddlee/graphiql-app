import { FC } from 'react';

type LineNumbersProps = {
  size: number;
};

const LineNumbers: FC<LineNumbersProps> = ({ size }) => {
  return (
    <ol className="font-jetbrains_mono text-outline">
      {Array.from({ length: size }, (_, i) => (
        <li className="text-right" key={i}>
          {i + 1}
        </li>
      ))}
    </ol>
  );
};

export default LineNumbers;
