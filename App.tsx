import React from 'react';
import {Store} from 'redux';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {History, MemoryHistory} from 'history';
import Storage from './src/Lib/Storage';
import createStore from './src/Store';
import Routes from './src/Routes';
import axios from 'axios';
import {LANGUAGE_URL} from './src/URLS';
import {MenuProvider} from 'react-native-popup-menu';
import {AppText} from "./src/Containers";

declare const global: { HermesInternal: null | {} };

class App extends React.Component<any, { ok: boolean, json?: { [key: string]: string }, status?: 'error' | 'ok' }> {
  state = {ok: false, status: undefined};
  history!: MemoryHistory<History.UnknownFacade>;
  store!: Store;

  constructor(props: object) {
    super(props);
    this.getHistoryEntries().then();
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
    let data: { entries: string[], index: number };
    try {
      data = await Storage.load({key: 'history-entries'});
    } catch (e) {
      data = {entries: ['/'], index: 0};
    }
    const [store, history] = await createStore(data);
    this.history = history;
    this.store = store;
    await this.setState({ok: true, status: 'ok'});

  }

  componentWillUnmount() {
    if (this.history) {
      const entries = this.history.entries.map(entry => entry.pathname);
      Storage.save({
        key: 'history-entries',
        data: {entries, index: entries.length - 1},
        expires: 3600000,
      }).then();
    }
  }


  render() {
    return (
      this.state.ok && this.state.status === 'ok' ?
        <Provider store={this.store}>
          <ConnectedRouter history={this.history}>
            <MenuProvider>
              <Routes/>
            </MenuProvider>
          </ConnectedRouter>
        </Provider> :
        <AppText>Loading goes here !!!</AppText>
        // <></>
    );
  }
}


export default App;
