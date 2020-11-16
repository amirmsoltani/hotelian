import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from "react-native";
import {Style} from "../../../Styles";
import {AppText} from "../../../Containers";
import {COLOR_MUTED} from "../../../../native-base-theme/variables/config";

type propsType = { label: string, score: number }
const ScoreBar: FunctionComponent<propsType> = (props) => {
  return (
    <View style={[Style.p__1,]}>
      <View>
        <AppText style={[Style.text__capitalize, Style.f__12]}>{props.label}</AppText>
      </View>
      <View style={[Style.flex__row, Style.align__items_center]}>
        <View style={[Style.flex__grow__1, styles.barContainer]}>
          <View style={[Style.bg__primary, Style.h__100, {width: Math.floor(props.score * 10)}]}/>
        </View>
        <View style={{width: 25,}}><AppText
          style={[Style.text__bold, Style.f__12, Style.text__center]}>{props.score}</AppText></View>
      </View>
    </View>
  );
};

export default ScoreBar;
const styles = StyleSheet.create({
  barContainer: {
    height: 10,
    borderColor: COLOR_MUTED,
    borderWidth: .5,
    borderRadius: 2,
    overflow: "hidden",
  },
});
