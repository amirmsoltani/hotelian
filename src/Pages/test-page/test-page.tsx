import React from 'react';
import {View} from "react-native";
import {Content, Header} from "native-base";
import {AppText} from "../../Containers";
import {Style} from "../../Styles";
import {ScoreBar} from "../index";

const TestPage = () => {
  const scores = [
    {label: 'room cleanliness', score: 6.3},
    {label: 'service & staff', score: 1.5},
    {label: 'room comfort', score: 5},
    {label: 'hotel condition', score: 3.7},
    {label: 'free wifi', score: 10},
    {label: 'location', score: 0},
    {label: 'value for money', score: 8.7},
  ];

  return (
    <>
      <Header/>
      <Content>

        {/*summary*/}
        <View style={[Style.p__3]}>
          <View>
            <AppText>
              <AppText style={[Style.text__bold, Style.f__16]}>4.6/5</AppText>
              <AppText style={[Style.text__normal, Style.f__14]}> - Wonderful</AppText>
            </AppText>
          </View>
          <View>
            <AppText>52 reviews</AppText>
          </View>
        </View>

        {/*score*/}
        <View style={[Style.px__2, Style.flex__row, Style.flex__wrap]}>
          {scores.map((item, index) =>
            <View key={index} style={[Style.w__50]}>
              <ScoreBar label={item.label} score={item.score}/>
            </View>)}
        </View>

        {/*comments*/}
        <View></View>
      </Content>
    </>
  );
};

export default TestPage;
