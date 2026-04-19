# `modules/counter`

Example module that demonstrates the convention used by every module in this app.

```
counter/
  pages/        what a route renders (entry point for the router)
  components/   internal UI pieces composed by the page
  hooks/        internal state / behaviour
  types.ts      module-local types
  index.ts      public API — only what is re-exported here is reachable from outside
```

Outside code imports via the public API only:

```ts
import { CounterPage } from '~modules/counter';
```

Reaching into `~modules/counter/components/Counter` from outside is a smell — it breaks the boundary the `index.ts` is meant to enforce.
