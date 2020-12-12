import React from 'react';
import {Container} from "native-base";
import {CardStyleInterpolators, createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {Alert} from "react-native";

import {MUTED_LIGHT_XXX} from "../../native-base-theme/variables/config";
import {BookingOverview, PassengerPage} from "../Pages";
import BoMore from "../Pages/booking-overview/bo-more/bo-more";
import {ExpireModal} from "../Layout";
import ConfirmPage from "../Pages/confirm-page/confirm-page";
import TermsAndPolicies from "../Pages/confirm-page/terms-and-policies/terms-and-policies";

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
        <Stack.Screen name="confirm" component={ConfirmPage}/>
        <Stack.Screen name="terms-and-policies" component={TermsAndPolicies}/>

        {/*<Stack.Screen name="callback" component={CallbackPage}/>*/}
      </Stack.Navigator>
      <ExpireModal show={false} update={() => Alert.alert('click')}/>
    </Container>
  );
};

export default ReserveRoute;
