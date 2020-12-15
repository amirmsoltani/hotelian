import React, {FC} from 'react';
import {RnTextStyleProp} from "native-base";

import {Style} from "../../Styles";
import {AppText} from "../../Containers";
import {BORDER_RADIUS_SM, COLOR_WHITE} from "../../../native-base-theme/variables/config";
import {ThemeType} from "../../Typescript/Types";
import {colorMap} from "../../Lib/chen";

type propsType = {
  type?: ThemeType;
  size?: 'sm' | 'md' | 'lg';
  text: string;
  style?: RnTextStyleProp;
  bordered?: boolean;
};

const size_map = {
  sm: [Style.f__10, Style.px__1, Style.py__0],
  md: [Style.f__12, Style.px__3, Style.py__1],
  lg: [Style.f__16, Style.px__5, Style.py__3],
}

const Badge: FC<propsType> = (props) => {
  const color = colorMap(props?.type!!)!!;
  const styles = {
    badge: {
      borderColor: color,
      borderWidth: .5,
      borderRadius: BORDER_RADIUS_SM,
      color: !props.bordered ? COLOR_WHITE : color,
      backgroundColor: props.bordered ? COLOR_WHITE : color,
    },
  };
  return (
    <AppText style={[styles.badge, size_map[props?.size!!], props?.style]}
             firstLetter>{props.text}</AppText>
  );
};

Badge.defaultProps = {
  bordered: false,
  size: 'md',
  type: 'black',
}

export default Badge;
