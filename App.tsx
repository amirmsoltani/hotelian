import React from 'react';
import axios from 'axios';
import {Store} from 'redux';
import {MenuProvider} from 'react-native-popup-menu';
import {AppState, AppStateStatus, BackHandler} from 'react-native';
import {Root} from "native-base";

import {History, MemoryHistory} from 'history';
import Storage from './src/Lib/Storage';
import createStore from './src/Store';
import {LANGUAGE_URL} from './src/URLS';
import {StatusType} from './src/Typescript/Types';
import {InitError, InitLoading} from "./src/Pages";
import {Provider} from "react-redux";
import Routes from "./src/Routes";


declare const global: { HermesInternal: null | {} };

class App extends React.Component<any,
  {
    ok: boolean;
    json?: { [key: string]: string };
    status: StatusType;
    message: string;
  }> {
  state = {ok: false, status: undefined, message: ''};
  history!: MemoryHistory<History>;
  store!: Store;

  constructor(props: object) {
    super(props);
    this.getHistoryEntries().then();
  }

  componentDidMount() {
    AppState.addEventListener('change', this.moveToBackground);
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }

  async getTranslates(lang: string): Promise<{ [key: string]: string } | null> {
    try {
      const response = await axios.get(LANGUAGE_URL + lang);
      return response.data.result;
    } catch (e) {
      this.setState({ok: false, status: 'error'});
      return {};
    }
  }

  async getHistoryEntries() {

    const [store, app] = await createStore();
    this.store = store;
    await this.setState({
      ok: app.status === 'ok',
      status: app.status,
      message: app.message ? app.message : '',
    });
  }

  moveToBackground = (state: AppStateStatus) => {
    if (this.history && state === 'background') {
      const entries = this.history.entries.map((entry) => entry.pathname);
      Storage.save({
        key: 'history-entries',
        data: {entries, index: entries.length - 1},
        expires: 3600000,
      }).then();
    } else if (state === 'active') {
      Storage.remove({key: 'history-entries'}).then();
      Storage.clearMapForKey('history-entries').then();
    } else if (state === 'inactive') {
      this.moveToBackground('background');
    }
  };

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
      <InitError message={this.state.message}/>
    ) : <InitLoading/>;
  }
}

export default App;
