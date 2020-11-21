import React, {FunctionComponent} from 'react';
import {Style} from "../../Styles";
import {AppText} from "../../Containers";
import {
  BORDER_RADIUS_SM,
  COLOR_DANGER,
  COLOR_INFO,
  COLOR_PRIMARY,
  COLOR_SUCCESS,
  COLOR_WARNING
} from "../../../native-base-theme/variables/config";

type propsType = {
  type?: 'success' | 'danger' | 'warning' | 'primary' | 'info';
  size?: 'sm' | 'md' | 'lg';
  text: string;
};

const color_map = {
  danger: COLOR_DANGER,
  success: COLOR_SUCCESS,
  warning: COLOR_WARNING,
  info: COLOR_INFO,
  primary: COLOR_PRIMARY,
}

const size_map = {
  sm: [Style.f__10, Style.px__1, Style.py__0],
  md: [Style.f__12, Style.px__3, Style.py__1],
  lg: [Style.f__16, Style.px__5, Style.py__3],
}

const Badge: FunctionComponent<propsType> = (props) => {
  const styles = {
    badge: {
      borderColor: color_map[props?.type || 'primary'],
      borderWidth: .5,
      borderRadius: BORDER_RADIUS_SM,
      color: color_map[props?.type || 'primary'],
    },
  };
  return (
    <AppText style={[styles.badge, size_map[props?.size || 'md'], Style.mr__1, Style.mb__1]}
             firstLetter>{props.text}</AppText>
  );
};

export default Badge;
