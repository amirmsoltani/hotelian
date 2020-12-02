import {createStore, applyMiddleware, compose, Store} from 'redux';
import CreateSaga from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer, {Initial} from './Reducers';
import appSaga from './Sagas';
import {StatusType} from '../Typescript/Types';
import {RootStateInterface} from '../Typescript/Interfaces';

export let globalStore: Store<RootStateInterface>;

export default async function(): Promise<[Store, {message?: string, status: StatusType}]> {
  const middleware = [];
  const saga = CreateSaga();
  middleware.push(saga);
  middleware.push(thunk);
  const apply = applyMiddleware(...middleware);
  const appInit = await Initial.appInit();
  const store = createStore(
    rootReducer(),
    {
      searchReducer: await Initial.searchInit(),
      appReducer: await appInit,
      hotelsReducer: Initial.hotelsInit,
    }
    ,
    __DEV__ ? require('redux-devtools-extension').composeWithDevTools(apply) : compose(apply),
  );
  saga.run(appSaga);
  globalStore = <Store<RootStateInterface>>store;
  return [store, {message: appInit.message, status: appInit.status}];
}


