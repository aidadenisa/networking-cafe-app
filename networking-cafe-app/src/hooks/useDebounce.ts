import { useState } from 'react';

export const useDebounce = (delay: number) => {
  const [current, setCurrent] = useState<number | undefined>(undefined);

  const debounce = (func: (...args: any) => any) => {
    if (current === undefined) {
      const delayedFunc = setTimeout(func, delay);
      setCurrent(delayedFunc);
      return;
    }

    console.log('clearning requests');
    clearTimeout(current);
    const delayedFunc = setTimeout(func, delay);
    setCurrent(delayedFunc);
  };

  return debounce;
};
