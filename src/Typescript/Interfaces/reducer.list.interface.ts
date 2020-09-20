export type ReducerListInterface<list> = {
    GET: undefined | 'ok' | 'loading' | 'error' | 'notFound'|'idle';
    list: list;
}
