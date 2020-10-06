import React from 'react';
import {View} from "react-native";

import {Style} from "Styles";
import ModifyRow from "./modify-row/modify-row";
import {Button} from "native-base";
import {AppText} from "../../Containers";
import {translate} from "../../Lib/Languages";

const ModifySearchFrom = () => {

  return (
    <View style={[Style.w__100, Style.bg__white, Style.py__3]}>

      {/*destination*/}
      <ModifyRow
        iconName={'location'} iconType={'Octicons'}
        text={'Madrid, Spain Madrid, Spain Madrid, Spain Madrid, Spain Madrid, Spain'}/>

      {/*checkin-out*/}
      <ModifyRow
        iconName={'calendar'} iconType={'Octicons'}
        text={`${'05 September 2020'}  |  ${'05 September 2020'}`}/>

      {/*guests*/}
      <ModifyRow
        iconName={'person-add-outline'} iconType={'Ionicons'}
        text={`${1} Room  |  ${2} Adults  |  ${0} Children`}/>

      <View style={[
        Style.p__3,
      ]}>
        <Button block>
          <AppText style={[Style.text__white, Style.text__upperCase]}>{translate('search')}</AppText>
        </Button>
      </View>
    </View>
  );
};

export default ModifySearchFrom;
