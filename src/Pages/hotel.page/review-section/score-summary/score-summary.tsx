import React, {FunctionComponent} from 'react';
import {View} from "react-native";
import {AppText} from "../../../Containers";
import {Style} from "../../../Styles";

type propsType = {
  scoreAverage: number;
  scoreDescription: string;
  reviewNumber: number;
};
const ScoreSummary: FunctionComponent<propsType> = (props) => {
  return (
    <>
      <View>
        <AppText>
          <AppText style={[Style.text__bold, Style.f__16,]}>
            {props.scoreAverage}/10</AppText>
          <AppText style={[Style.text__normal, Style.f__14,]}>
            <AppText> - </AppText>
            <AppText firstLetter>{props.scoreDescription}</AppText>
          </AppText>
        </AppText>
      </View>
      <View>
        <AppText>{props.reviewNumber} reviews</AppText>
      </View>
    </>
  );
};

export default ScoreSummary;
