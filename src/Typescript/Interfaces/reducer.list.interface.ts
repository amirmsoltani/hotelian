export type ReducerListType<list> = {
  GET: undefined | 'ok' | 'loading' | 'error' | 'idle';
  list: list;
}
