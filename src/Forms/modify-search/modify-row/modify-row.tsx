import React from 'react';
import {Icon} from "native-base";
import {StyleSheet, TouchableOpacity, View} from "react-native";

import {Style} from "../../../Styles";
import {AppText} from "../../../Containers";
import {BORDER_RADIUS_SM, MUTED_LIGHT_XX, MUTED_LIGHT_XXX} from "../../../../native-base-theme/variables/config";

type propTypes = {
  onPress: () => void;
  text?: string;
  iconName: string;
  iconType: "AntDesign" | "Entypo" | "EvilIcons" | "Feather" | "FontAwesome" |
    "FontAwesome5" | "Foundation" | "Ionicons" | "MaterialCommunityIcons" |
    "MaterialIcons" | "Octicons" | "SimpleLineIcons" | "Zocial";
}
const ModifyRow: React.FC<propTypes> = (props) => {

  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={1}>
      <View style={[
        Style.flex__row,
        Style.p__3,
        Style.mx__3,
        Style.mb__2,
        Style.align__items_center,
        styles.inputStyles,
      ]}>
        <Icon name={props.iconName} type={props.iconType} style={[Style.mr__2, Style.text__muted_d, Style.f__14,]}/>
        <AppText
          numberOfLines={1}
          style={[
            {flex: 1,},
            Style.flex__grow__1,
            Style.text__muted_d,
          ]}>{props.text}</AppText>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  inputStyles: {
    backgroundColor: MUTED_LIGHT_XXX,
    borderColor: MUTED_LIGHT_XX,
    borderWidth: .5,
    borderRadius: BORDER_RADIUS_SM,
  },
});

export default ModifyRow;
