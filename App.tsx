import React from 'react';
import {Store} from 'redux';
import {MenuProvider} from 'react-native-popup-menu';
import {BackHandler} from 'react-native';
import {Root} from 'native-base';

import createStore from './src/Store';
import {StatusType} from './src/Typescript/Types';
import {InitError, InitLoading} from './src/Pages';
import {Provider} from 'react-redux';
import Routes from './src/Routes';


declare const global: {HermesInternal: null | {}};

class App extends React.Component<any,
  {
    ok: boolean;
    json?: {[key: string]: string};
    status: StatusType;
    message: string;
  }> {
  state = {ok: false, status: undefined, message: ''};
  store!: Store;

  constructor(props: object) {
    super(props);
    this.retry = this.retry.bind(this);
    this.retry();
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }


  retry() {
    console.log('hello');
    createStore().then(([store, app]) => {
      this.store = store;
      this.setState({
        ok: app.status === 'ok',
        status: app.status,
        message: app.message || '',
      });
    });
  }


  render() {
    return this.state.ok && this.state.status === 'ok' ? (
      <Provider store={this.store}>
        <Root>
          <MenuProvider>
            <Routes/>
          </MenuProvider>
        </Root>
      </Provider>
    ) : this.state.status === 'error' ? (
      <InitError message={this.state.message} onClick={this.retry}/>
    ) : <InitLoading/>;
  }
}

export default App;
