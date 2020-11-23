import React, {FunctionComponent} from 'react';
import {View} from "react-native";

import {Style} from "../../../Styles";
import {AppText} from "../../../Containers";
import {translate} from "../../../Lib/Languages";
import {Conditional, If} from "../../../Components";


type propsType = {
  late_check_in?: string;
  request_message?: string;
}
const BoLateCheckIn: FunctionComponent<{ data: propsType }> = (props) => {
  return (
    <View style={[Style.p__3, Style.bg__white]}>
      <View style={[Style.flex__row, Style.justify__content_between, Style.mb__3]}>
        <AppText style={[Style.text__bold, Style.f__14]} firstLetter>
          {translate('late-checkin')}</AppText>
        <AppText style={[Style.text__light, Style.f__14]}>
          {props.data.late_check_in ? props.data.late_check_in : translate('not-set')}</AppText>
      </View>
      <Conditional>
        <If condition={!!(props.data.request_message)}>
          <AppText style={[Style.text__bold, Style.f__14, Style.mb__1]} firstLetter>
            {translate('your-request')}</AppText>
          <AppText style={[Style.text__light]}>{props.data.request_message}</AppText>
        </If>
      </Conditional>
    </View>
  );
};

export default BoLateCheckIn;
