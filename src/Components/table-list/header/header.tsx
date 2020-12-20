import React, {useContext} from 'react';
import {View} from "react-native";

import {Style} from "../../../Styles";
import {AppTitle, BackNavigation} from "../../../Containers";
import {TableContext} from "../table-list";

const Header = () => {
  const {title}=useContext(TableContext)

  return (
    <View style={[Style.flex__row, Style.bg__primary, Style.align__items_center, Style.px__0]}>
      <View>
        <BackNavigation/>
      </View>
      <View style={[Style.flex__grow__1]}>
        <AppTitle>{title}</AppTitle>
      </View>
    </View>
  );
};

export default Header;
