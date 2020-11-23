import React, {FunctionComponent} from 'react';
import {View} from "react-native";

import {Style} from "../../../Styles";
import {AppText} from "../../../Containers";
import {translate as t} from "../../../Lib/Languages";
import {Button} from "native-base";


type propsType = {
  button_label: string;

  //18.00 or 1,999,999
  total_price: number | string;

  total_currency: string;
};
const BoFooter: FunctionComponent<{ data: propsType }> = (props) => {
  return (
    <View style={[Style.w__100, Style.p__1, Style.flex__row]}>
      <View style={[Style.col__6]}>
        <AppText style={[Style.f__14,]}>{t('total')}:</AppText>
        <View style={[Style.flex__row]}>
          <AppText style={[Style.f__14, Style.text__bold]}>{props.data.total_price}</AppText>
          <AppText style={[Style.f__14, Style.text__bold]}> {props.data.total_currency}</AppText>
        </View>
      </View>
      <View style={[Style.col__6, Style.pl__1
      ]}>
        <Button block style={[Style.bg__primary]}>
          <AppText firstLetter style={[Style.text__white, Style.text__bold]}>{t(props.data.button_label)}</AppText>
        </Button>
      </View>
    </View>
  );
};

export default BoFooter;
