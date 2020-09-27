import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RootStateInterface} from '../Typescript';
import {default as SearchRoute} from './search.route';
import {default as HotelsRoute} from './hotels.route';
import {Route} from 'react-router-native';
import Translator from '../Lib/Languages';
import HotelRoute from './hotel.route';

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


  render() {

    return (
      <>
        <Route component={SearchRoute} path='/' exact={true}/>
        <Route component={HotelsRoute} path='/hotels' exact={true}/>
        <Route component={HotelRoute} path='/hotel/:id/:name/:checkIn/:checkOut' exact={true}/>
        <Route component={HotelRoute} path='/hotel/:id/:name' exact={true}/>
      </>
    );
  }
}


export default connector(Routes);
