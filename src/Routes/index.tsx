import React, {Component, FunctionComponent} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerContentComponentProps} from '@react-navigation/drawer';

import {RootStateInterface} from '../Typescript';
import Translator from '../Lib/Languages';
import HotelRoute from './hotel.route';
import SearchRoute from './search.route';
import HotelsRoute from './hotels.route';
import ModifySearchRoute from './modify-search.route';
import {navigationConfig, setNavigation} from 'Lib/navigation';
import {SetNavigationState} from '../Store/Actions';
import ReserveRoute from './reserve.route';
import {AppDrawerContent, ErrorModal} from 'Layout';
import {buttonGenerator} from '../Lib/button-generator';


const mapStateToProps = (state: RootStateInterface) => ({
  language: state.appReducer.language,
  rtl: state.appReducer.rtl,
  json: state.appReducer.json,
  error: state.appReducer.errors,
});
const connector = connect(mapStateToProps, {SetNavigationState});
type Props = ConnectedProps<typeof connector>;
type States = {
  visibility: boolean;
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class Routes extends Component<Props, States> {

  state = {
    visibility: false,
  };

  //=======================================
  // Hooks
  //=======================================
  constructor(props: Props) {
    super(props);
    this.SearchStack = this.SearchStack.bind(this);
    Translator(props.language, props.rtl, props.json!);
  }

  render() {
    return (
      <>
        <ErrorModal
          visibility={!!this.props.error}
          config={{
            title: this.props.error?.title || '',
            onClose() {
            },
            hasDismiss: false,
            theme: 'danger',
            message: this.props.error?.messages,
            action: buttonGenerator(),
            caption: this.props.error?.code === 502 ? '' : undefined,
          }}/>
        <NavigationContainer onStateChange={(state) => this.props.SetNavigationState(state)}>
          <Drawer.Navigator
            initialRouteName="routes"
            drawerContent={props => <AppDrawerContent {...props}/>}>
            <Drawer.Screen name={'routes'} component={this.SearchStack}/>
          </Drawer.Navigator>
        </NavigationContainer>
      </>
    );
  }


  //=======================================
  // Sections
  //=======================================
  SearchStack: FunctionComponent<any & DrawerContentComponentProps> = () => {
    return <Stack.Navigator
      initialRouteName="search"
      screenOptions={({navigation}) => {
        if (!navigationConfig) {
          setNavigation(navigation);
        }
        return {headerShown: false, gestureEnabled: true};
      }}>
      <Stack.Screen component={SearchRoute} name="search"/>
      <Stack.Screen component={ModifySearchRoute} name="modify-search"/>
      <Stack.Screen component={HotelsRoute} name="hotels"/>
      <Stack.Screen component={HotelRoute} name="hotel"/>
      <Stack.Screen component={ReserveRoute} name="reserve"/>
    </Stack.Navigator>;
  };

}

export default connector(Routes);
