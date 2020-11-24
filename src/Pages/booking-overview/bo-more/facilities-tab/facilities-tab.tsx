import React, {FunctionComponent} from 'react';
import {View} from "react-native";
import {Style} from "../../../../Styles";
import {AppText} from "../../../../Containers";
import {translate} from "../../../../Lib/Languages";
import {Icon} from "native-base";

const FacilitiesTab: FunctionComponent<{ data: string[] }> = (props) => {
  return (
    <View style={[Style.p__3, Style.bg__white]}>
      <AppText firstLetter style={[Style.text__bold, Style.f__14, Style.mb__3]}>
        {translate('highlighted-facilities')}</AppText>
      <View style={[Style.flex__row, Style.flex__wrap]}>
        {
          props.data.map((facility, index) => (
            <View key={index}
                  style={[Style.col__6, Style.mb__1, Style.pr__1, Style.flex__row, Style.align__items_center]}>
              <Icon style={[Style.f__10, Style.mr__1]} name={'dot-single'} type={'Entypo'}/>
              <AppText firstLetter style={[Style.text__light]}>{facility}</AppText>
            </View>
          ))
        }
      </View>
    </View>
  );
};

export default FacilitiesTab;
