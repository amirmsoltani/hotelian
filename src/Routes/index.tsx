import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RootStateInterface} from '../Typescript';
import RNRestart from 'react-native-restart';
import {default as SearchRoute} from './search.route';
import {default as HotelsRoute} from './hotels.route';
import {Route} from 'react-router-native';
import Translator from '../Lib/Languages';

const mapStateToProps = (state: RootStateInterface) => ({
  language: state.appReducer.language,
  rtl: state.appReducer.rtl,
  json: state.appReducer.json,
});
const connector = connect(mapStateToProps);
type Props = ConnectedProps<typeof connector>


class Routes extends Component<Props> {
  constructor(props: Props) {
    super(props);
    Translator(props.language, props.rtl, props.json!);
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
    if (this.props.language !== prevProps.language) {
      Translator(this.props.language, this.props.rtl, this.props.json!);
      RNRestart.Restart();
    }
  }


  render() {

    return (
      <>
        <Route component={SearchRoute} path='/' exact={true}/>
        <Route component={HotelsRoute} path='/hotels' exact={true}/>
      </>
    );
  }
}


export default connector(Routes);
