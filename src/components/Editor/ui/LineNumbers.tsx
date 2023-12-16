import { forwardRef } from 'react';

type LineNumbersProps = {
  size: number;
};

const LineNumbers = forwardRef<HTMLLIElement, LineNumbersProps>(({ size }, ref) => {
  return (
    <ol className="min-w-[20px] font-jetbrains_mono text-outline">
      {Array.from({ length: size }, (_, i) => (
        <li ref={ref} className="text-right" key={i}>
          {i + 1}
        </li>
      ))}
    </ol>
  );
});

LineNumbers.displayName = 'LineNumbers';

export default LineNumbers;
