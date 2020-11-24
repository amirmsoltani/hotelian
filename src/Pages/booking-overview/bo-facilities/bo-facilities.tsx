import React, {FunctionComponent} from 'react';
import {TouchableNativeFeedback, View} from "react-native";
import {AppText} from "../../../Containers";
import {translate} from "../../../Lib/Languages";
import {Style} from "../../../Styles";
import {Icon} from "native-base";
import {Conditional, If} from "../../../Components";

type propsType = {
  facilities: string[];
  show_more?: () => void;
}
const BoFacilities: FunctionComponent<{ data: propsType }> = (props) => {
  const item_to_preview = 6;
  return (
    <View style={[Style.bg__white, Style.p__3]}>

      {/*title*/}
      <View style={[Style.mb__3]}><AppText style={[Style.text__bold, Style.f__14]}
                                           firstLetter>{translate('highlighted-facilities')}</AppText></View>

      {/*list*/}
      <View style={[Style.flex__row, Style.flex__wrap, Style.mb__3]}>
        {props.data.facilities.slice(0, item_to_preview).map(facility => (
          <View key={facility}
                style={[Style.mb__1, Style.pr__1, Style.col__6, Style.flex__row, Style.align__items_center]}>
            <Icon style={[Style.f__10, Style.mr__1]} name={'dot-single'} type={'Entypo'}/>
            <AppText style={[Style.text__light]} firstLetter>{facility}</AppText>
          </View>
        ))}
      </View>

      {/*show more*/}
      <Conditional>
        <If condition={props.data.facilities.length > item_to_preview}>
          <TouchableNativeFeedback onPress={props.data.show_more}>
            <AppText style={[Style.text__capitalize, Style.f__12, Style.text__info, Style.py__1]}>
              {translate('more-facilities')}</AppText>
          </TouchableNativeFeedback>
        </If>
      </Conditional>
    </View>
  );
};

export default BoFacilities;
