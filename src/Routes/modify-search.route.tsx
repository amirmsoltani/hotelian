import React from 'react';
import {Container} from 'native-base';
import {match} from 'react-router-native';

import {CreateRoomPage, HotelsMapPage, SelectDatePage, SelectDestinationPage, SelectNationalityPage} from '../Pages';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ModifySearch from '../Forms/modify-search/modify-search';

const Stack = createStackNavigator();
const HotelsRoute = (props: {match: match}) => {
  return (
    <Container>
      <Stack.Navigator initialRouteName="modifySearch">
        <Stack.Screen name="modifySearch" component={ModifySearch} options={{headerShown: false}}/>
        <Stack.Screen name="destination" component={SelectDestinationPage} options={{headerShown: false}}/>
        <Stack.Screen name="nationality" component={SelectNationalityPage} options={{headerShown: false}}/>
        <Stack.Screen name="datepicker" component={SelectDatePage} options={{headerShown: false}}/>
        <Stack.Screen name="rooms" component={CreateRoomPage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </Container>
  );
};

export default HotelsRoute;
