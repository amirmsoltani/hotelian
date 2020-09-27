import React from 'react';
import {match} from 'react-router-native';
import {Container} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  CreateRoomPage,
  SearchPage,
  SelectDatePage,
  SelectDestinationPage,
  SelectNationalityPage,
  TestPage
} from '../Pages';

const Stack = createStackNavigator();
const SearchRoute = (props: { match: match }) => {
  return (
    <Container>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="form">
          <Stack.Screen name="test" component={TestPage} options={{headerShown: false}}/>
          <Stack.Screen name="form" component={SearchPage} options={{headerShown: false}}/>
          <Stack.Screen name="destination" component={SelectDestinationPage} options={{headerShown: false}}/>
          <Stack.Screen name="nationality" component={SelectNationalityPage} options={{headerShown: false}}/>
          <Stack.Screen name="datepicker" component={SelectDatePage} options={{headerShown: false}}/>
          <Stack.Screen name="rooms" component={CreateRoomPage} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
};

export default SearchRoute;
