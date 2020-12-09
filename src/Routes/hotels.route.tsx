import React from 'react';
import {Container} from 'native-base';

import {HotelListPage, HotelsFilterPage, HotelsMapPage} from '../Pages';
import {CardStyleInterpolators, createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {ExpireModal} from '../Layout';

const Stack = createStackNavigator();
const HotelsRoute = () => {
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
      </Stack.Navigator>
      <ExpireModal />
    </Container>
  );
};

export default HotelsRoute;
