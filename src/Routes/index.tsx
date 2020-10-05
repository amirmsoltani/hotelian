import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Route} from 'react-router-native';

import {RootStateInterface} from '../Typescript';
import Translator from '../Lib/Languages';
import HotelRoute from './hotel.route';
import SearchRoute from "./search.route";
import HotelsRoute from "./hotels.route";


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
        <Route component={HotelsRoute} path='/hotels' exact={false}/>
        <Route component={HotelRoute} path='/hotel/:id/:name/:checkIn/:checkOut' exact={true}/>
        <Route component={HotelRoute} path='/hotel/:id/:name' exact={true}/>
      </>
    );
  }
}


export default connector(Routes);
