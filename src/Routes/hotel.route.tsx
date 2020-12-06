import React from 'react';
import {Container} from 'native-base';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackScreenProps,
  TransitionPresets,
} from '@react-navigation/stack';

import {HotelImageFlatList, HotelPage, HotelSelectRoom, HotelsMapPage} from '../Pages';
import {MUTED_LIGHT_XXX} from '../../native-base-theme/variables/config';
import ExpireModal from "../Layout/expire-modal/expire-modal";
import {Alert} from "react-native";

const Stack = createStackNavigator();

const HotelRoute = ({route: {params: {id, name, checkin, checkout}}}: StackScreenProps<{ hotel: { id: string, name: string, checkin?: string, checkout?: string } }, 'hotel'>) => {

  return (
    <Container style={{backgroundColor: MUTED_LIGHT_XXX}}>
      <Stack.Navigator
        initialRouteName="hotel"
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}>
        <Stack.Screen name="hotel" component={HotelPage}/>
        <Stack.Screen name="select-room" component={HotelSelectRoom}/>
        <Stack.Screen name="hotel-image-flat-list" component={HotelImageFlatList}/>
        <Stack.Screen name="map" component={HotelsMapPage}/>
      </Stack.Navigator>
      <ExpireModal show={false} update={() => Alert.alert('click')}/>
    </Container>
  );
};

export default HotelRoute;
