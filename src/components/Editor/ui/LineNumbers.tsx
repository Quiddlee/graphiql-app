import { forwardRef } from 'react';

type LineNumbersProps = {
  size: number | string;
};

const LineNumbers = forwardRef<HTMLLIElement, LineNumbersProps>(({ size }, ref) => {
  return (
    <ol data-testid="line-numbers" className="min-w-[20px] text-outline">
      {Array.from({ length: Number(size) }, (_, i) => (
        <li ref={ref} className="text-right" key={i}>
          {i + 1}
        </li>
      ))}
    </ol>
  );
});

LineNumbers.displayName = 'LineNumbers';

export default LineNumbers;
