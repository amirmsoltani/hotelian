import React from 'react';
import {Container} from "native-base";
import {MUTED_LIGHT_XXX} from "../../native-base-theme/variables/config";
import {CardStyleInterpolators, createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {ConfirmPage, PassengerPage} from "../Pages";

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
        <Stack.Screen name="confirm" component={ConfirmPage}/>
        {/*<Stack.Screen name="invoice" component={ConfirmPage}/>*/}
        {/*<Stack.Screen name="callback" component={ConfirmPage}/>*/}
      </Stack.Navigator>
    </Container>
  );
};

export default ReserveRoute;
