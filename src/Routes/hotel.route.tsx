import React from 'react';
import {
  SearchPage,
  SelectDestinationPage,
  SelectNationalityPage, SelectDatePage, CreateRoomPage, HotelPage,
} from '../Pages';
import {match} from 'react-router-native';
import {Container} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HotelRoute = ({match: {params: {id, name, checkOut, checkIn}}}: {match: match<{id: string, name: string, checkIn?: string, checkOut?: string}>}) => {
  return (
    <Container>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="form">
          <Stack.Screen name="hotel" component={HotelPage} options={{headerShown: false}}
                        initialParams={{id, name, checkIn, checkOut}}/>
          <Stack.Screen name="hotelRooms" component={SelectDestinationPage} options={{headerShown: false}}/>
          <Stack.Screen name="roomsFilter" component={SelectNationalityPage} options={{headerShown: false}}/>
          <Stack.Screen name="roomsSort" component={SelectDatePage} options={{headerShown: false}}/>
          <Stack.Screen name="map" component={CreateRoomPage} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
};

export default HotelRoute;
