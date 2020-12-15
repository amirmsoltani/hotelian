import React from 'react';
import {Container} from 'native-base';
import {CardStyleInterpolators, createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {
  CreateRoomPage,
  SearchPage,
  SelectDatePage,
  SelectDestinationPage,
  SelectNationalityPage,
  TestPage,
} from '../Pages';

const Stack = createStackNavigator();
const SearchRoute = () => {
  return (
    <Container>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }} initialRouteName="test">
        <Stack.Screen name="test" component={TestPage}/>
        <Stack.Screen name="form" component={SearchPage}/>
        <Stack.Screen name="destination" component={SelectDestinationPage}/>
        <Stack.Screen name="nationality" component={SelectNationalityPage}/>
        <Stack.Screen name="datepicker" component={SelectDatePage}/>
        <Stack.Screen name="rooms" component={CreateRoomPage}/>
      </Stack.Navigator>
    </Container>
  );
};

export default SearchRoute;
