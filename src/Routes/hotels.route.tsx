import React from 'react';
import {match} from 'react-router-native';
import {Container} from 'native-base';

import {
  CreateRoomPage,
  HotelListPage,
  HotelsFilterPage,
  HotelsMapPage,
  SelectDatePage,
  SelectDestinationPage,
  SelectNationalityPage,
} from '../Pages';
import {NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator, TransitionPresets} from '@react-navigation/stack';

const Stack = createStackNavigator();
const HotelsRoute = (props: {match: match}) => {
  return (
    <Container>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}
        initialRouteName="hotels">
        <Stack.Screen name="hotels" component={HotelListPage} options={{headerShown: false}}/>
        <Stack.Screen name="filter" component={HotelsFilterPage} options={{headerShown: false}}/>
        <Stack.Screen name="map" component={HotelsMapPage} options={{headerShown: false}}/>
        <Stack.Screen name="destination" component={SelectDestinationPage} options={{headerShown: false}}/>
        <Stack.Screen name="nationality" component={SelectNationalityPage} options={{headerShown: false}}/>
        <Stack.Screen name="datepicker" component={SelectDatePage} options={{headerShown: false}}/>
        <Stack.Screen name="rooms" component={CreateRoomPage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </Container>
  );
};

export default HotelsRoute;
