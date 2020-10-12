import React from 'react';
import {match} from 'react-router-native';
import {Container} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {CreateRoomPage, SearchPage, SelectDatePage, SelectDestinationPage, SelectNationalityPage,} from '../Pages';


const Stack = createStackNavigator();
const SearchRoute = (props: { match: match }) => {
  return (
    <Container>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerShown: false,
          }}
          initialRouteName="form">
          <Stack.Screen name="form" component={SearchPage}/>
          <Stack.Screen name="destination" component={SelectDestinationPage}/>
          <Stack.Screen name="nationality" component={SelectNationalityPage}/>
          <Stack.Screen name="datepicker" component={SelectDatePage}/>
          <Stack.Screen name="rooms" component={CreateRoomPage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
};

export default SearchRoute;
