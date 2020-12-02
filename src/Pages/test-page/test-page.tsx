import React from 'react';
import {View} from "react-native";
import {AppText} from "../../Containers";
import ExpireTimer from "../../Components/expire-timer/expire-timer";

const TestPage = () => {
  return (
    <View>
      <AppText>test page</AppText>
      <ExpireTimer durations={0}/>
    </View>
  );
};

export default TestPage;
