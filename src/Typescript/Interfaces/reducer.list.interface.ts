export type ReducerListInterface<list> = {
  GET: undefined | 'ok' | 'loading' | 'error' | 'idle';
  list: list;
}
