import React from 'react';
import {View} from "react-native";
import {AppText} from "../../../Containers";
import {Icon} from "native-base";
import {Style} from "../../../Styles";
import {translate} from "../../../Lib/Languages";

const ArrayError = (props: { errors: string[] }) => {
  return (
    <View>
      <AppText style={[Style.f__14, Style.mb__3]} firstLetter>
        {props.errors.length > 1 ? translate('following-errors-are-reported') : translate('following-error-is-reported')}:
      </AppText>
      {props.errors.map(error => (
        <View style={[Style.flex__row, Style.align__items_center]}>
          <Icon style={[Style.f__14]} name={'dot-single'} type={'Entypo'}/>
          <AppText style={[Style.text__light, Style.f__14]} firstLetter>{error}</AppText>
        </View>
      ))}
    </View>
  );
};

export default ArrayError;
