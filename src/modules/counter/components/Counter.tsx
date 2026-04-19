import { useCounter } from '../hooks/useCounter';

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <section aria-labelledby="counter-heading">
      <h2 id="counter-heading">Counter</h2>
      <p>
        Current value: <strong>{count}</strong>
      </p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button type="button" onClick={decrement}>
          -
        </button>
        <button type="button" onClick={increment}>
          +
        </button>
        <button type="button" onClick={reset}>
          reset
        </button>
      </div>
    </section>
  );
};
