import React from 'react';
import {AppState, AppStateStatus} from 'react-native';
import {Store} from 'redux';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {MenuProvider} from 'react-native-popup-menu';
import Routes from './src/Routes/index';
import {History, MemoryHistory} from 'history';
import Storage from './src/Lib/Storage';
import createStore from './src/Store';
import axios from 'axios';
import {LANGUAGE_URL} from './src/URLS';
import {AppText} from './src/Containers';
import {StatusType} from './src/Typescript/Types';

declare const global: {HermesInternal: null | {}};

class App extends React.Component<any, {ok: boolean, json?: {[key: string]: string}, status: StatusType, message: string}> {
  state = {ok: false, status: undefined, message: ''};
  history!: MemoryHistory<History>;
  store!: Store;

  constructor(props: object) {
    super(props);
    this.getHistoryEntries().then();
  }

  componentDidMount() {
    AppState.addEventListener('change', this.moveToBackground);
  }

  async getTranslates(lang: string): Promise<{[key: string]: string} | null> {
    try {
      const response = await axios.get(LANGUAGE_URL + lang);
      return response.data.result;
    } catch (e) {
      this.setState({ok: false, status: 'error'});
      return {};
    }
  }

  async getHistoryEntries() {
    let data: {entries: string[], index: number};
    try {
      data = await Storage.load({key: 'history-entries'});
    } catch (e) {
      data = {entries: ['/'], index: 0};
    }
    const [store, history, app] = await createStore(data);
    this.history = history;
    this.store = store;
    await this.setState({ok: app.status === 'ok', status: app.status, message: app.message ? app.message : ''});

  }

  moveToBackground = ((state: AppStateStatus) => {
    if (this.history && state === 'background') {
      const entries = this.history.entries.map(entry => entry.pathname);
      Storage.save({
        key: 'history-entries',
        data: {entries, index: entries.length - 1},
        expires: 3600000,
      }).then();
    } else if (state === 'active') {
      Storage.remove({key: 'history-entries'}).then();
      Storage.clearMapForKey('history-entries').then();
    } else if (state === 'inactive') {
      this.moveToBackground('active');
    }
  }).bind(this);


  render() {
    return (
      this.state.ok && this.state.status === 'ok' ?
        <Provider store={this.store}>
          <ConnectedRouter history={this.history}>
            <MenuProvider>
              <Routes/>
            </MenuProvider>
          </ConnectedRouter>
        </Provider> : (this.state.status === 'error' ?
        <AppText>{this.state.message}</AppText> :
        <AppText>Loading goes here !!!</AppText>)
      // <></>
    );
  }
}


export default App;
