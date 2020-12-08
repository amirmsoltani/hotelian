import React from 'react';
import {Content} from "native-base";
import {useNavigation} from '@react-navigation/native';
import {Image, TouchableNativeFeedback, View} from "react-native";

import {Style} from "../../Styles";
import {AppText} from "../../Containers";
import {translate} from "../../Lib/Languages";

const _404 = () => {
  const image = require('Assets/Images/404.png');
  const navigation = useNavigation();
  return (
    <>
      <Content>
        <View style={[Style.justify__content_center,]}>
          <View>
            <Image
              style={[{width: undefined, height: 150, marginTop: 100,}, Style.mb__5]}
              resizeMode={"contain"} source={image}/>
          </View>
          <View style={[Style.w__75, Style.mx__auto, Style.mb__5]}>
            <AppText style={[Style.text__bold, Style.text__muted_d_X, Style.f__18, Style.text__center, Style.mb__3]}>
              {translate('there-is-nothing-here')}</AppText>
            <AppText style={[Style.text__muted, Style.f__14, Style.text__center]}>
              {translate('404-content-text')}</AppText>
          </View>
          <View>
            <TouchableNativeFeedback onPress={() => navigation.navigate('form')}>
              <View style={[Style.px__5, Style.py__3, Style.mx__auto, Style.bg__primary, {borderRadius: 30}]}>
                <AppText style={[Style.text__capitalize, Style.text__white, Style.f__14]}>
                  {translate('back-to-home')}</AppText>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </Content>
    </>
  );
};

export default _404;
