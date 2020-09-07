import {createStore, applyMiddleware, compose, Store} from 'redux';
import CreateSaga from 'redux-saga';
import rootReducer from './Reducers';
import appSaga from './Sagas';
import {createMemoryHistory, MemoryHistory, History} from 'history';
import {routerMiddleware} from 'connected-react-router';
import {composeWithDevTools} from 'redux-devtools-extension';

export let globalStore: Store;

export default function(entries: string[]): [Store, MemoryHistory<History.UnknownFacade>] {
  const history = createMemoryHistory({initialEntries: entries});
  const middleware = [];
  const saga = CreateSaga();
  middleware.push(saga);
  middleware.push(routerMiddleware(history));
  const apply = applyMiddleware(...middleware);
  const store = createStore(
    rootReducer(history),
    __DEV__ ? composeWithDevTools(apply) : compose(apply),
  );
  saga.run(appSaga);
  globalStore = store;
  return [store, history];
}


