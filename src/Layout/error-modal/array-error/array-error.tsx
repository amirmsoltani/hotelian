import React from 'react';
import {View} from "react-native";
import {AppText} from "../../../Containers";
import {Icon} from "native-base";
import {Style} from "../../../Styles";

const ArrayError = (props: { errors: string[] }) => {
  return (
    <View>
      {props.errors.map((error, index) => (
        <View key={index + ''} style={[Style.flex__row, Style.align__items_center]}>
          <Icon style={[Style.f__14]} name={'dot-single'} type={'Entypo'}/>
          <AppText style={[Style.text__light, Style.f__14]} firstLetter>{error}</AppText>
        </View>
      ))}
    </View>
  );
};

export default ArrayError;
