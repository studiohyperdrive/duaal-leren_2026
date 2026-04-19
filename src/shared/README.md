# `shared/`

Code that has **no business meaning** and can be reused by any module.

If a piece of code is about a domain concept (a user, an order, a counter...) it belongs inside that module — not here.

```
shared/
  components/   generic UI primitives (Button, Modal, ...)
  hooks/        generic hooks    (useDebounce, useLocalStorage, ...)
  lib/          framework-agnostic helpers (formatDate, sleep, ...)
  types/        cross-cutting type aliases (Result<T>, Nullable<T>, ...)
```
