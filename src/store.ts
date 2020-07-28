import {createStore, applyMiddleware, compose} from 'redux';
import CreateSaga from 'redux-saga';
import {createLogger} from 'redux-logger';
import rootReducer from './Reducers';
import appSaga from './Sagas';


function configureStore() {
  const middleware = [];

  //saga middleware
  const saga = CreateSaga();
  middleware.push(saga);
  //******************

  //logger middleware
  if (__DEV__) {
    middleware.push(createLogger());
  }
  //******************
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware)),
  );
  saga.run(appSaga);
  return store;
}

export default configureStore;
