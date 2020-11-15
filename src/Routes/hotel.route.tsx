import React from 'react';
import {Container} from 'native-base';
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets, StackNavigationProp, StackScreenProps,
} from '@react-navigation/stack';

import {HotelImageFlatList, HotelPage} from '../Pages';
import {MUTED_LIGHT_XXX} from '../../native-base-theme/variables/config';

const Stack = createStackNavigator();

const HotelRoute = ({route: {params: {id, name, checkin, checkout}}}: StackScreenProps<{hotel: {id: string, name: string, checkin?: string, checkout?: string}}, 'hotel'>) => {

  return (
    <Container style={{backgroundColor: MUTED_LIGHT_XXX}}>
      <Stack.Navigator
        initialRouteName="hotel"
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="hotel"
          component={HotelPage}
        />
        <Stack.Screen
          name={'hotel-image-flat-list'}
          component={HotelImageFlatList}
        />

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
    </Container>
  );
};

export default HotelRoute;
