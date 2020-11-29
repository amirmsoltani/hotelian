import React, {FunctionComponent} from 'react';
import {TouchableNativeFeedback, View} from "react-native";

import {DrawerLinkType} from "../../../Typescript/Types";
import {Style} from "../../../Styles";
import {Icon} from "native-base";
import {AppText} from "../../../Containers";

const DrawerItem: FunctionComponent<{ data: DrawerLinkType }> = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.data?.clicked}>
      <View style={[Style.flex__row, Style.p__3,]}>
        <View style={[Style.flex__row, Style.align__items_center]}>
          <View style={{width: 32}}>
            <Icon style={[Style.f__18,]}
                  type={props.data.icon_type || 'Ionicons'}
                  name={props.data.icon_name || 'checkmark'}/>
          </View>
          <AppText style={[Style.f__13,]} firstLetter>
            {props.data.label}
          </AppText>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default DrawerItem;
