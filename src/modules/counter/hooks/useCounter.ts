import { useCallback, useState } from 'react';

import type { CounterState } from '../types';

export const useCounter = (initialValue = 0): CounterState => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount((c) => c + 1), []);
  const decrement = useCallback(() => setCount((c) => c - 1), []);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);

  return { count, increment, decrement, reset };
};
