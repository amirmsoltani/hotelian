import {createStore, applyMiddleware, compose, Store} from 'redux';
import CreateSaga from 'redux-saga';
import rootReducer, {Initial} from './Reducers';
import appSaga from './Sagas';
import {createMemoryHistory, MemoryHistory, History} from 'history';
import {routerMiddleware} from 'connected-react-router';
import {composeWithDevTools} from 'redux-devtools-extension';

export let globalStore: Store;

export default async function(data: {entries: string[], index: number}): Promise<[Store, MemoryHistory<History.UnknownFacade>]> {
  const history = await createMemoryHistory({initialEntries: data.entries, initialIndex: data.index});
  const middleware = [];
  const saga = await CreateSaga();
  await middleware.push(saga);
  await middleware.push(routerMiddleware(history));
  const apply = await applyMiddleware(...middleware);

  const store = await createStore(
    rootReducer(history),
    {
      hotelsReducer: Initial.hotelsInit,
      searchReducer: await Initial.searchInit(),
      appReducer: await Initial.appInit(),
    }
    ,
    __DEV__ ? composeWithDevTools(apply) : compose(apply),
  );
  await saga.run(appSaga);
  globalStore = store;
  return [store, history];
}


