import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {RootStateInterface} from '../Typescript';
import Translator from '../Lib/Languages';
import HotelRoute from './hotel.route';
import SearchRoute from './search.route';
import HotelsRoute from './hotels.route';
import ModifySearchRoute from './modify-search.route';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationConfig, setNavigation} from 'Lib/navigation';
import {SetNavigationState} from '../Store/Actions';
import ReserveRoute from "./reserve.route";
import {ErrorModal} from "../Layout";

const mapStateToProps = (state: RootStateInterface) => ({
  language: state.appReducer.language,
  rtl: state.appReducer.rtl,
  json: state.appReducer.json,
});
const connector = connect(mapStateToProps, {SetNavigationState});
type Props = ConnectedProps<typeof connector>;
type States = {
  visibility: boolean;
}

const Stack = createStackNavigator();

class Routes extends Component<Props, States> {

  state = {
    visibility: false,
  }

  constructor(props: Props) {
    super(props);
    Translator(props.language, props.rtl, props.json!);
  }


  render() {
    return (
      <>
        <ErrorModal
          visibility={this.state.visibility}
          config={{
            title: 'title',
            onClose: this.hideErrorModal,
          }}/>
        <NavigationContainer onStateChange={(state) => this.props.SetNavigationState(state)}>
          <Stack.Navigator
            initialRouteName="search"
            screenOptions={({navigation}) => {
              if (!navigationConfig)
                setNavigation(navigation);
              return {headerShown: false, gestureEnabled: true};
            }}
          >
            <Stack.Screen component={SearchRoute} name="search"/>
            <Stack.Screen component={ModifySearchRoute} name="modify-search"/>
            <Stack.Screen component={HotelsRoute} name="hotels"/>
            <Stack.Screen component={HotelRoute} name="hotel"/>
            <Stack.Screen component={ReserveRoute} name="reserve"/>
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }

  showErrorModal = () => {
    this.setState({visibility: true});
  }

  hideErrorModal = () => {
    this.setState({visibility: false});
  }
}

export default connector(Routes);
