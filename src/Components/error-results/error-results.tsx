import React, {FunctionComponent} from 'react';
import {Image, StyleSheet, View} from "react-native";
import {Button} from "native-base";

import {AppText} from "../../Containers";
import {Style} from "../../Styles";
import {Conditional, If} from "../index";

type propsType = {
  title?: string,
  text?: string,
  button?: {
    label: string,
    click: () => void,
  }
}
const image = require('Assets/Images/error.png');
const NoResults: FunctionComponent<{ data: propsType }> = (props) => {
  return (
    <View style={[Style.w__100, Style.h__100, Style.py__5, Style.px__3,]}>
      <Image source={image} resizeMode={"contain"}
             style={[styles.img, Style.mb__3]}/>
      <AppText style={[Style.text__bold, Style.f__16, Style.text__center, Style.mb__2, Style.text__muted_d_X]}>
        {props.data.title}</AppText>
      <AppText style={[Style.mb__3, Style.text__muted_d_X, Style.w__75, Style.mx__auto, Style.text__center]}>
        {props.data.text}</AppText>
      <Conditional>
        <If condition={!!(props.data.button ?? false)}>
          <Button style={[Style.px__3, Style.mx__auto]} onPress={props.data.button?.click}>
            <AppText firstLetter style={[Style.text__white, Style.f__14]}>
              {props.data.button?.label}</AppText>
          </Button>
        </If>
      </Conditional>
    </View>
  );
};

const styles = StyleSheet.create({img: {width: undefined, height: 120}});

export default NoResults;
