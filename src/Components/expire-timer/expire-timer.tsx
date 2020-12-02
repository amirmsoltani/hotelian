import React, {FunctionComponent, useState} from 'react';
import {View} from "react-native";
import {ThemeType} from "../../Typescript/Types";
import {AppText} from "../../Containers";

type propsType = {
  durations: number;
  color?: ThemeType;
  onFinish?: () => void;
}
// let b: any[] = [];
//
// let a = new Date().getTime();
// b.push(setInterval(() => {
//   console.log(b)
// }, 4000));
const ExpireTimer: FunctionComponent<propsType> = (props) => {
  const [state, setState] = useState(props.durations);
  // useEffect(() => {
  //   console.log(state)
  //   if (!state) {
  //     setInterval(() => {
  //       console.log('exec', state);
  //       setState(state2 => {
  //         console.log(state2, 2);
  //         return state2 + 1
  //       });
  //     }, 2000);
  //   }
  // });
  return (
    <View>
      <AppText>{state}</AppText>
    </View>
  );

};

export default ExpireTimer;
