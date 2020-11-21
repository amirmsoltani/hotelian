import React, {FunctionComponent} from 'react';
import {View} from "react-native";

import {AppText, FormInput} from "../../../Containers";
import {translate} from "../../../Lib/Languages";
import {Style} from "../../../Styles";
import {BORDER_RADIUS_SM} from "../../../../native-base-theme/variables/config";


type propsType = {
  room_number: number;
  child_age: number;
}

const ChildForm: FunctionComponent<{ data: propsType }> = (props) => {

  return (
    <View style={[Style.p__3, Style.bg__white, {borderRadius: BORDER_RADIUS_SM,}]}>

      {/*form header*/}
      <View style={[Style.mb__3]}>
        <View style={[Style.flex__row, Style.align__items_center]}>
          <AppText style={[Style.f__14]}>{translate('child')} </AppText>
          <AppText style={[Style.f__14, Style.text__light]}>
            ({props.data.child_age} {props.data.child_age > 1 ? translate('years-old') : translate('year-old')})</AppText>
        </View>
      </View>

      {/*inputs*/}
      <View>
        <View style={[Style.mb__3]}>
          <FormInput data={{label: translate('first-name')}}/>
        </View>
        <View>
          <FormInput data={{label: translate('last-name')}}/>
        </View>
      </View>

    </View>
  );


};

export default ChildForm;
