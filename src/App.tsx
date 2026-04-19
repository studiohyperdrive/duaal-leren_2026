import { CounterPage } from '@modules/counter';

export function App() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <h1>Duaal Leren Starter 2026</h1>
      <p>
        TanStack Router and TanStack Query are installed but not yet wired up. We will add them
        during the workshop.
      </p>
      <CounterPage />
    </main>
  );
}
