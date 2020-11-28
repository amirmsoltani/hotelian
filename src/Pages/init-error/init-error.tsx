import React from 'react';
import {View} from "react-native";
import {SearchFormError} from "../../Components";
import {MUTED_LIGHT_XXX} from "../../../native-base-theme/variables/config";
import {Style} from "../../Styles";

const InitError = () => {
  return (
    <View style={[{flex: 1, backgroundColor: MUTED_LIGHT_XXX}]}>
      <View style={[Style.justify__content_center, Style.mt__5, Style.align__items_center]}>
        <SearchFormError/>
      </View>
    </View>
  );
};

export default InitError;
