import React from 'react';
import {Store} from 'redux';
import {Provider} from 'react-redux';
import {Route} from 'react-router-native';
import {ConnectedRouter} from 'connected-react-router';
import {MemoryHistory, History} from 'history';
import Storage from './src/Lib/Storage';
import createStore from './src/Store';
import {SearchRoute} from './src/Routes';

declare const global: {HermesInternal: null | {}};

class App extends React.Component<any, {ok: boolean}> {
  state = {ok: false};
  history!: MemoryHistory<History.UnknownFacade>;
  store!: Store;

  constructor(props: object) {
    super(props);
    this.getHistoryEntries().then();

  }

  async getHistoryEntries() {
    let data: string[];
    try {
      data = await Storage.load<string[]>({key: 'history-entries'});
      console.log(data);
    } catch (e) {
      data = ['/'];
    }
    const [store, history] = await createStore(data);
    this.history = history;
    this.store = store;
    await this.setState({ok: true});

  }

  componentWillUnmount() {
    Storage.save({
      key: 'history-entries',
      data: this.history.entries.map(entry => entry.pathname),
      expires: 3600,
    }).then();
  }


  render() {
    return (
      this.state.ok ?
        <Provider store={this.store}>
          <ConnectedRouter history={this.history}>
            <Route component={SearchRoute} path='/' exact={true}/>
          </ConnectedRouter>
        </Provider> :
        <></>
    );
  }
};


export default App;
