import React from 'react';
import {Container} from 'native-base';
import {match} from 'react-router-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HotelPage,} from '../Pages';
import {MUTED_LIGHT_XXX} from "../../native-base-theme/variables/config";

const Stack = createStackNavigator();

const HotelRoute = ({match: {params: {id, name, checkOut, checkIn}}}: { match: match<{ id: string, name: string, checkIn?: string, checkOut?: string }> }) => {
  return (
    <Container style={{backgroundColor: MUTED_LIGHT_XXX,}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="hotel">
          <Stack.Screen
            name="hotel"
            component={HotelPage}
            options={{headerShown: false}}
            initialParams={{id, name, checkIn, checkOut}}/>


          {/*
          TODO: These screens should place in this route
            1. *select room
            2. *filter
            3. *map
            4. slider flat list
            5. slider carousel
            6. review modal
            7. modify search
          */}
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
};

export default HotelRoute;
