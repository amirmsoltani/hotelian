import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {RootStateInterface} from '../Typescript';
import Translator from '../Lib/Languages';
import {SetNavigationState} from '../Store/Actions';
import {AppDrawerContent, ErrorModal} from 'Layout';
import closeModal, {buttonGenerator} from '../Lib/button-generator';
import {RouteWithDrawer} from './RoutesWithDrawer';
import {setNavigation} from '../Lib/navigation';


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
    Translator(props.language, props.rtl, props.json!);
  }

  render() {
    return (
      <>
        <ErrorModal
          visibility={!!this.props.error}
          config={{
            title: this.props.error?.title || '',
            onClose: () => closeModal(),
            hasDismiss: this.props.error?.close,
            hasBackdrop: false,
            theme: 'danger',
            message: this.props.error?.messages,
            action: buttonGenerator(),
            caption: this.props.error?.code === 502 ? '' : undefined,
          }}/>
        <NavigationContainer onStateChange={(state) => this.props.SetNavigationState(state)}
                             ref={(navigation) => setNavigation(navigation!)}
        >
          <Drawer.Navigator
            initialRouteName="search"
            drawerContent={props => <AppDrawerContent {...props}/>}>
            <Drawer.Screen name="routes" component={RouteWithDrawer}/>

          </Drawer.Navigator>
        </NavigationContainer>
      </>
    );
  }


}

export default connector(Routes);
