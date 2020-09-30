import React from 'react';
import {View} from 'react-native';
import {Icon} from "native-base";

import style from './form-row-styles';
import {AppText} from "../../../Containers";
import {Style} from "../../../Styles";

type formRow = {
  text: string;
  isFilled: boolean;
  hasError: boolean;

  //for assigning icon
  type: string;
};
const FormRow = (props: formRow) => {
  let icon;
  let sharedStyles: object[] = [];
  if (props.isFilled) {
    sharedStyles.push(style.filled);
  }
  if (props.hasError) {
    sharedStyles.push(style.error);
  }
  switch (props.type) {
    case'destination' :
      icon = <Icon name='location'
                   style={[style.icon, [...sharedStyles]]}
                   type={'Octicons'}/>
      break;
    case'nationality' :
      icon = <Icon name='flag-outline'
                   style={[style.icon, [...sharedStyles]]}
                   type={'Ionicons'}/>
      break;
    case'checkin-out' :
      icon = <Icon name='calendar'
                   style={[style.icon, [...sharedStyles]]}
                   type={'Octicons'}/>
      break;
    case'passenger' :
      icon = <Icon name='person-add-outline'
                   style={[style.icon, [...sharedStyles]]}
                   type={'Ionicons'}/>
      break;
    default:
      icon = null;
  }

  return (
    <View style={style.container}>
      {icon}
      <AppText style={[style.text, sharedStyles]}>
        {props.text}</AppText>
    </View>
  );
};

export default FormRow;
