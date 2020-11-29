import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import AppDrawerContent from "./app-drawer-content/app-drawer-content";
import {TestPage} from "../../Pages";
import Routes from "../../Routes";

const Drawer = createDrawerNavigator();
const AppDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="routes"
        drawerContent={props => <AppDrawerContent {...props}/>}>
        <Drawer.Screen name={'test'} component={TestPage}/>
        <Drawer.Screen name={'routes'} component={Routes}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppDrawer;
