import React, {FC} from 'react';
import {Image, ImageSourcePropType, TouchableNativeFeedback, View} from "react-native";
import {Style} from "../../../../Styles";
import {AppText} from "../../../../Containers";
import {
  BORDER_RADIUS_SM,
  COLOR_SUCCESS,
  GRAY_LIGHT_X,
  GRAY_LIGHT_XX
} from "../../../../../native-base-theme/variables/config";
import {Radio} from "native-base";
import {GatewayType} from "../../../../Typescript/Types";

type propsType = {
  gateway: GatewayType,
  selected: boolean,
  onSelect: () => void,
}

const Gateway: FC<propsType> = ({gateway, selected, onSelect}) => {
  return (
    <TouchableNativeFeedback onPress={onSelect}>
      <View style={[Style.flex__row, Style.align__items_center, Style.mb__2, Style.p__2,
        {
          borderColor: selected ? COLOR_SUCCESS : GRAY_LIGHT_XX,
          borderRadius: BORDER_RADIUS_SM,
          borderWidth: 1,
        }]}>
        <Image resizeMode={"contain"} style={[{width: 24, height: 24,}, Style.mr__3]}
               source={{uri:gateway.image}}/>
        <AppText style={[Style.f__14, Style.text__muted_d_X]}>
          {gateway.label}</AppText>
        <View style={[Style.ml__auto, Style.flex__grow__1, Style.flex__row__reverse,]}>
          <Radio
            style={[Style.ml__auto, Style.ml__auto,]}
            color={GRAY_LIGHT_XX}
            selectedColor={COLOR_SUCCESS}
            selected={selected}
          />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Gateway;
