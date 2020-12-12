import React, {FunctionComponent, useState} from 'react';
import {View} from "react-native";

import {AppText} from "../../../Containers";
import {Style} from "../../../Styles";
import {translate} from "../../../Lib/Languages";
import {Switch} from "native-base";

type propsType = {
  currency: string;
  discount: number;
  credit: number;
  pay_amount: number;
  onCredit: (v: boolean) => void;
}
const Invoice: FunctionComponent<propsType> = ({credit, pay_amount, discount, currency, onCredit}) => {
  const [state, setState] = useState(false);

  return (
    <>
      <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>
        {translate('price-breakdown')}</AppText>

      {/*sub total*/}
      <View style={[Style.flex__row, Style.justify__content_between, Style.mb__3]}>
        <View style={[Style.flex__grow__1, Style.flex__shrink__1]}>
          <AppText firstLetter style={[Style.f__12]}>
            {translate('subtotal')}</AppText>
          <AppText style={[Style.f__10, Style.text__light]}>
            {translate('subtotal-caption')}</AppText>
        </View>
        <View style={[Style.flex__shrink__0]}>
          <AppText style={[Style.f__12]}>
            {pay_amount} {currency}</AppText>
        </View>
      </View>

      {/*discount*/}
      <View style={[Style.flex__row, Style.justify__content_between, Style.mb__3]}>
        <View style={[Style.flex__grow__1, Style.flex__shrink__1]}>
          <AppText firstLetter style={[Style.f__12]}>
            {translate('discount')}</AppText>
          <AppText style={[Style.f__10, Style.text__light]}>
            {translate('discount-caption')}</AppText>
        </View>
        <View style={[Style.flex__shrink__0]}>
          <AppText style={[Style.f__12]}>
            {discount} {currency}</AppText>
        </View>
      </View>

      {/*credit*/}
      <View style={[Style.flex__row, Style.justify__content_between, Style.mb__3]}>
        <View style={[Style.flex__grow__1, Style.flex__shrink__1]}>
          <AppText firstLetter style={[Style.f__12]}>
            {translate('your-credit')}</AppText>
          <AppText style={[Style.f__10, Style.text__light]}>
            {credit} {currency}</AppText>
        </View>
        <View style={[Style.flex__shrink__0]}>
          <Switch
            onValueChange={(v) => {
              setState(v);
              onCredit(v);
            }}
            value={state}/>
        </View>
      </View>

    </>
  );
};

export default Invoice;
