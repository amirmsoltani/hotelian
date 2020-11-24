import React from 'react';
import {View} from "react-native";
import {AppText} from "../../../Containers";
import {Style} from "../../../Styles";
import {translate} from "../../../Lib/Languages";

const ObjectError = (props: { errors: { [key: string]: string } }) => {
  return (
    <View>
      <AppText style={[Style.f__14, Style.mb__3]} firstLetter>
        {Object.values(props.errors).length > 1 ? translate('following-errors-are-reported') : translate('following-error-is-reported')}:
      </AppText>
      {Object.values(props.errors).map((error, index) => (
        <View style={[Style.flex__row]}>
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
