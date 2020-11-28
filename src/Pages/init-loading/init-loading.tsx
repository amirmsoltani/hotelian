import React from 'react';
import {AppText} from "../../Containers";
import {Container} from "native-base";
import {Style} from "../../Styles";
import {View} from "react-native";
import {ProgressBar} from "@react-native-community/progress-bar-android";
import {COLOR_INFO} from "../../../native-base-theme/variables/config";

const InitLoading = () => {
  return (
    <Container>
      <View style={[Style.bg__primary, {flex: 1}]}>
        <View style={[Style.my__auto]}>
          <View style={[Style.flex__row, Style.justify__content_center,Style.mb__1]}>
            <AppText style={[Style.text__white, Style.f__24, Style.text__bold, {letterSpacing: 1,}]}>Hotelian</AppText>
            <AppText style={[Style.text__important, Style.f__24, Style.text__bold, {letterSpacing: 1,}]}>.com</AppText>
          </View>
          <View>
            <AppText style={[Style.text__white, Style.f__12, Style.text__light, Style.text__center, Style.mb__3]}>
              Quick, Simple, Easy to use, Great rates.
            </AppText>
          </View>
          <View style={[Style.w__75, Style.mx__auto]}>
            <ProgressBar style={{height: 20}} color={COLOR_INFO} styleAttr="Horizontal"/>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default InitLoading;
