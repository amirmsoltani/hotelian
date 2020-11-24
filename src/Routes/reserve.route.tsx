import React from 'react';
import {Container} from "native-base";
import {MUTED_LIGHT_XXX} from "../../native-base-theme/variables/config";
import {CardStyleInterpolators, createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {BookingOverview, PassengerPage} from "../Pages";
import BoMore from "../Pages/booking-overview/bo-more/bo-more";

const Stack = createStackNavigator();
const ReserveRoute = () => {
  return (
    <Container style={{backgroundColor: MUTED_LIGHT_XXX}}>
      <Stack.Navigator
        initialRouteName="passenger"
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}>
        <Stack.Screen name="passenger" component={PassengerPage}/>
        <Stack.Screen name="booking-overview" component={BookingOverview}/>
        <Stack.Screen name="bo-more" component={BoMore}/>
        {/*<Stack.Screen name="callback" component={CallbackPage}/>*/}
      </Stack.Navigator>
    </Container>
  );
};

export default ReserveRoute;
