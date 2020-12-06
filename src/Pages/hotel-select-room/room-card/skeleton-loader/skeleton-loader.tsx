import React from 'react';
import {View} from "react-native";

import Sk from "../../../../Components/skeleton-loader/skeleton-loader";
import {GRAY_LIGHT_XXX} from "../../../../../native-base-theme/variables/config";
import {Style} from "../../../../Styles";

const SkeletonLoader = () => {
  return (
    <View style={[Style.w__100, Style.bg__white, Style.mb__1, Style.p__3]}>
      <Sk type={'rect'} width={'60%'} height={20} backgroundColor={GRAY_LIGHT_XXX} style={[Style.mb__4]}/>
      <Sk type={'rect'} width={'100%'} height={15} backgroundColor={GRAY_LIGHT_XXX} style={[Style.mb__1]}/>
      <Sk type={'rect'} width={'100%'} height={15} backgroundColor={GRAY_LIGHT_XXX} style={[Style.mb__1]}/>
      <Sk type={'rect'} width={'100%'} height={15} backgroundColor={GRAY_LIGHT_XXX} style={[Style.mb__4]}/>
      <View style={[Style.flex__row, Style.justify__content_between]}>
        <Sk
          type={'rect'}
          width={'45%'}
          height={35}
          backgroundColor={GRAY_LIGHT_XXX}
        />
        <Sk
          type={'rect'}
          width={'45%'}
          height={35}
          backgroundColor={GRAY_LIGHT_XXX}
        />
      </View>
    </View>
  );
};

export default SkeletonLoader;
