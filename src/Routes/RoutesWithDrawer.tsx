import React from 'react';
import SearchRoute from './search.route';
import ModifySearchRoute from './modify-search.route';
import HotelsRoute from './hotels.route';
import HotelRoute from './hotel.route';
import ReserveRoute from './reserve.route';
import _404 from './_404';
import {createStackNavigator} from '@react-navigation/stack';
import LoginRegister from '../Pages/login-register/login-register';

const Stack = createStackNavigator();

export const RouteWithDrawer = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: true}} initialRouteName="auth">
      <Stack.Screen component={SearchRoute} name="search"/>
      <Stack.Screen component={ModifySearchRoute} name="modify-search"/>
      <Stack.Screen component={HotelsRoute} name="hotels"/>
      <Stack.Screen component={HotelRoute} name="hotel"/>
      <Stack.Screen component={ReserveRoute} name="reserve"/>
      <Stack.Screen component={_404} name="404"/>
      <Stack.Screen component={LoginRegister} name={'auth'}/>
    </Stack.Navigator>
  );
};
