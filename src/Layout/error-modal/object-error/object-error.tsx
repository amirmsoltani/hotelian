import React from 'react';
import {View} from "react-native";
import {AppText} from "../../../Containers";
import {Style} from "../../../Styles";

const ObjectError = (props: { errors: { [key: string]: string } }) => {
  return (
    <View>
      {Object.values(props.errors).map((error, index) => (
        <View key={index + ''} style={[Style.flex__row]}>
          <AppText style={[Style.f__14, Style.mr__1]} firstLetter>
            {Object.keys(props.errors)[index]} :</AppText>
          <AppText style={[Style.text__light, Style.f__14]} firstLetter>
            {Object.values(props.errors)[index]}
          </AppText>
        </View>
      ))}
    </View>
  );
};

export default ObjectError;
