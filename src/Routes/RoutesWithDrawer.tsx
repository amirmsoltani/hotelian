import React from 'react';
import {navigationConfig, setNavigation} from '../Lib/navigation';
import SearchRoute from './search.route';
import ModifySearchRoute from './modify-search.route';
import HotelsRoute from './hotels.route';
import HotelRoute from './hotel.route';
import ReserveRoute from './reserve.route';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const RouteWithDrawer = () => {
  return (
    <Stack.Navigator screenOptions={({navigation}) => {
      if (!navigationConfig) {
        setNavigation(navigation);
      }
      return {headerShown: false, gestureEnabled: true};
    }}
    >
      <Stack.Screen component={SearchRoute} name="search"/>
      <Stack.Screen component={ModifySearchRoute} name="modify-search"/>
      <Stack.Screen component={HotelsRoute} name="hotels"/>
      <Stack.Screen component={HotelRoute} name="hotel"/>
      <Stack.Screen component={ReserveRoute} name="reserve"/>

    </Stack.Navigator>
  );
};
