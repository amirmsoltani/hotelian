import React from 'react';
import {Container} from "native-base";
import {CardStyleInterpolators, createStackNavigator, TransitionPresets} from "@react-navigation/stack";

import {MUTED_LIGHT_XXX} from "../../native-base-theme/variables/config";
import TermsAndPolicies from "../Pages/confirm-page/terms-and-policies/terms-and-policies";
import {MyBookings} from "../Pages";

const Stack = createStackNavigator();
const ReserveRoute = () => {
  return (
    <Container style={{backgroundColor: MUTED_LIGHT_XXX}}>
      <Stack.Navigator
        initialRouteName="profile"
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}>
        <Stack.Screen name="my-bookings" component={MyBookings}/>


        {/*TODO:
          1. my bookings : view
          2. my bookings : index

          3. my invoices : view
          4. my invoices : index

          5. my transactions : index

          6. my reviews : view
          7. my reviews : index

          8. refund-request : index

          9. supports : view
          10. supports : index

          11. new ticket

          12. profile

        */}
        <Stack.Screen name="terms-and-policies" component={TermsAndPolicies}/>
      </Stack.Navigator>
    </Container>
  );
};

export default ReserveRoute;