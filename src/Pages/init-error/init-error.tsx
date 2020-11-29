import React, {FunctionComponent} from 'react';
import {Image, TouchableNativeFeedback, View} from "react-native";
import {Style} from "../../Styles";
import {AppText} from "../../Containers";
import {BORDER_RADIUS_SM} from "../../../native-base-theme/variables/config";
import {INTERNET_CONNECTION_ERROR, USER_INITIAL_ERROR_MESSAGE} from "../../URLS";
import {Conditional, Else, If} from "../../Components";

type propsType = {
  message?: string;
  onClick?: () => void;
}
const ic_img = require('../../Assets/Images/ic_img.png');
const ie_img = require('../../Assets/Images/ie_img.png');
const InitError: FunctionComponent<propsType> = (props) => {
  return (
    <View style={[Style.bg__white, {flex: 1}]}>
      <View style={[{marginTop: '30%'}]}>
        <View style={[Style.mb__5]}>
          <Image
            resizeMode={"contain"}
            style={{width: undefined, height: 120}}
            source={props.message === INTERNET_CONNECTION_ERROR ? ie_img : ic_img}/>
        </View>
        <View style={[Style.w__75, Style.mx__auto, Style.mb__5]}>
          <Conditional>
            <If condition={props.message === INTERNET_CONNECTION_ERROR}>
              <AppText style={[Style.f__14, Style.text__muted_d_X, Style.mb__1]}>
                Something is temporarily wrong with your network connection.</AppText>
              <AppText style={[Style.f__14, Style.text__muted_d_X]}>
                Please make sure you are connected to the internet and then retry.</AppText>
            </If>
            <Else>
              <AppText style={[Style.f__16, Style.text__muted_d_X, Style.mb__1, Style.text__bold]}>
                Sorry, something went wrong.</AppText>
              <AppText style={[Style.f__14, Style.text__muted_d_X]}>
                We're working on it and we'll get it fixed as soon as we can.</AppText>
            </Else>
          </Conditional>
        </View>
        <View>
          <TouchableNativeFeedback onPress={props.onClick}>
            <View style={[Style.bg__primary, Style.px__5, Style.py__2, Style.mx__auto,
              {borderRadius: BORDER_RADIUS_SM}]}>
              <AppText style={[Style.text__white, Style.text__upperCase]}>Retry</AppText>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};

export default InitError;
