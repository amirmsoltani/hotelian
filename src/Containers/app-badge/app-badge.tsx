import React from 'react';
import {StyleSheet, View} from "react-native";
import {RnViewStyleProp} from "native-base";

import {AppText} from "../index";
import {Style} from "../../Styles";
import {BORDER_RADIUS_SM, COLOR_PRIMARY} from "../../../native-base-theme/variables/config";

type propTypes = {
  color?: string;
  styles?: RnViewStyleProp;
}

const AppBadge: React.FC<propTypes> = (props) => {
  const color = props.color || COLOR_PRIMARY;
  const styles = StyleSheet.create({
    container: {
      borderWidth: .75,
      borderColor: color,
      borderRadius: BORDER_RADIUS_SM,
    }
  });
  return (
    <View style={[
      Style.px__1,
      styles.container,
      props.styles
    ]}>
      <AppText style={[
        Style.f__10,
        Style.text__light,
        {color: color}
      ]}>{props.children}</AppText>
    </View>
  );
}

export default AppBadge;
