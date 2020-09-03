import React from 'react';
import {Provider} from 'react-redux';
import store, {history} from './src/Store';
import {Route} from 'react-router-native';
import {ConnectedRouter} from 'connected-react-router';
import {SearchRoute} from './src/Routes';


declare const global: {HermesInternal: null | {}};
const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route component={SearchRoute} path='/' exact={true}/>
      </ConnectedRouter>
    </Provider>
  );
};


export default App;
