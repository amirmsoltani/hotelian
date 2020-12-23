import React from 'react';
import {View} from "react-native";
import {ProgressBar} from "@react-native-community/progress-bar-android";

import {Style} from "Styles";
import {AppText} from "Containers";
import {translate} from "Lib/Languages";
import {COLOR_INFO} from "../../../native-base-theme/variables/config";

const ScreenLoading = () => {
  return (
    <View style={[Style.align__self_center, Style.w__100, {marginTop: '40%', maxWidth: 240}]}>
      <AppText firstLetter style={[Style.text__muted_d_X, Style.px__3, Style.mb__2, Style.text__center]}>
        {`${translate('loading')}...`}</AppText>
      <ProgressBar style={{marginTop: -7, height: 20}} color={COLOR_INFO} styleAttr="Horizontal"/>
    </View>
  );
};

export default ScreenLoading;
