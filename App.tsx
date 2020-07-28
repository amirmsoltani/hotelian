import {Provider} from 'react-redux';
import configureStore from './src/store';
import React from 'react';
import {NativeRouter, Route} from 'react-router-native';
import Search from './src/Pages/Search/Search';
import Sidebar from './src/Pages/Sidebar/Sidebar';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Provider store={configureStore()}>
      <NativeRouter>
        <Route path="/" component={Search} exact={true}/>
        <Route path="/sidebar" component={Sidebar}/>
      </NativeRouter>
    </Provider>
  );
};


export default App;
