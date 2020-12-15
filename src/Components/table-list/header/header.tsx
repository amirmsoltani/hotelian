import React, {FC} from 'react';
import {View} from "react-native";
import {Header as H} from "native-base";

import {Style} from "../../../Styles";
import {AppTitle, BackNavigation} from "../../../Containers";

const Header: FC<{ title: string }> = ({title}) => {
  return (
    <H style={[Style.flex__row, Style.bg__primary, Style.align__items_center, Style.px__0]}>
      <View>
        <BackNavigation/>
      </View>
      <View style={[Style.flex__grow__1]}>
        <AppTitle>{title}</AppTitle>
      </View>
    </H>
  );
};

export default Header;
