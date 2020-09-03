import {createStore, applyMiddleware, compose} from 'redux';
import CreateSaga from 'redux-saga';
import {createLogger} from 'redux-logger';
import rootReducer from './Reducers';
import appSaga from './Sagas';
import {createMemoryHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';

// create history
export const history = createMemoryHistory();

// function configureStore() {
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

//router middleware
middleware.push(routerMiddleware(history));
//******************

const store = createStore(
  rootReducer(history),
  compose(applyMiddleware(...middleware)),
);
saga.run(appSaga);
// }

export default store;
