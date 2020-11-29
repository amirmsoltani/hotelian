import React, {FunctionComponent} from 'react';
import {TouchableNativeFeedback, View} from "react-native";
import {Style} from "../../../Styles";
import {AppText} from "../../../Containers";
import {MUTED_DARK_X, MUTED_LIGHT_XXX} from "../../../../native-base-theme/variables/config";

type propsType = {
  first_name: string;
  last_name: string;
  email: string;
  title?: string;
  clicked?: () => void;
}
const ProfileCard: FunctionComponent<{ data: propsType }> = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.data.clicked}>
      <View style={[Style.flex__row, Style.p__3, {backgroundColor: MUTED_LIGHT_XXX}]}>

        {/*avatar*/}
        <View style={[Style.flex__row, Style.justify__content_center, Style.align__items_center, Style.mr__2,
          {
            backgroundColor: MUTED_DARK_X,
            width: 48,
            height: 48,
            borderRadius: 24,
          }]}>
          <AppText style={[Style.f__18, Style.text__bold, Style.p__0, Style.text__white,
            {letterSpacing: 1,}]}>{props.data.first_name.charAt(0)}</AppText>
          <AppText style={[Style.f__18, Style.text__bold, Style.p__0, Style.text__white,
            {letterSpacing: 1,}]}>{props.data.last_name.charAt(0)}</AppText>
        </View>

        <View style={[Style.flex__column, Style.justify__content_center,]}>
          <AppText numberOfLines={1} firstLetter style={[Style.f__14, Style.text__bold,]}>
            {props.data.first_name} {props.data.last_name}</AppText>
          <AppText numberOfLines={1} style={[Style.f__12,]}>
            {props.data.email}</AppText>
        </View>


      </View>
    </TouchableNativeFeedback>
  );
};

export default ProfileCard;
