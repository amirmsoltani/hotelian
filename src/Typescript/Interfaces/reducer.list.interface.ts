export type ReducerListInterface<list> = {
    GET: undefined | 'ok' | 'loading' | 'error' | 'notFound';
    list: list;
}
