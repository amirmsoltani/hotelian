import {createStore, applyMiddleware, compose, Store} from 'redux';
import CreateSaga from 'redux-saga';
import rootReducer, {Initial} from './Reducers';
import appSaga from './Sagas';
import {createMemoryHistory, MemoryHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import {StatusType} from '../Typescript/Types';

export let globalStore: Store;

export default async function(data: {entries: string[], index: number}): Promise<[Store, MemoryHistory<any>, {message?: string, status: StatusType}]> {
  const history = await createMemoryHistory({initialEntries: data.entries, initialIndex: data.index});
  const middleware = [];
  const saga = await CreateSaga();
  await middleware.push(saga);
  await middleware.push(routerMiddleware(history));
  const apply = await applyMiddleware(...middleware);
  const appInit = await Initial.appInit();
  const store = await createStore(
    rootReducer(history),
    {
      searchReducer: await Initial.searchInit(),
      appReducer: await appInit,
      hotelsReducer: Initial.hotelsInit,
    }
    ,
    __DEV__ ? require('redux-devtools-extension').composeWithDevTools(apply) : compose(apply),
  );
  await saga.run(appSaga);
  globalStore = store;
  return [store, history, {message: appInit.message, status: appInit.status}];
}


