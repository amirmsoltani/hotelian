import React from 'react';
import {Alert, View} from "react-native";
import {FormInput} from "../../Containers";
import {Style} from "../../Styles";

const TestPage = () => {
  return (
    <>
      <View style={[Style.p__3, Style.bg__white]}>
        <FormInput
          onFocus={() => Alert.alert('focused')}
          onBlur={() => Alert.alert('blured')}
          data={{label: 'first-name', input_state: undefined,}}
        />
      </View>
    </>
  );
};

export default TestPage;
