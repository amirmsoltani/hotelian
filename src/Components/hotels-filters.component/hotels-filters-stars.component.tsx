import React from 'react';
import {Icon} from "native-base";
import {Text, TouchableOpacity, View} from 'react-native';

import {Style} from "../../Styles";
import {AppText} from "../../Containers";
import Conditional, {Else, If} from "../conditional.component";
import {BORDER_RADIUS_SM, COLOR_PRIMARY} from "../../../native-base-theme/variables/config";

type Props = {
  item: string;
  structure: { [key: string]: number[] };
  length?: any;
  actives: { [key: string]: { indexes: number[], name: string } } | undefined;
  onPressFilters: () => void
};
const HotelsFiltersStars = ({item, length, structure, actives, onPressFilters}: Props) => {
  const isActivated = !!(actives?.hasOwnProperty(item));

  return <TouchableOpacity key={item} onPress={onPressFilters}>
    <View style={[{borderWidth: 1, borderColor: COLOR_PRIMARY, borderRadius: BORDER_RADIUS_SM,},
      Style.mr__2, Style.mb__2, Style.p__2, isActivated ? Style.bg__primary : Style.bg__white]}>
      <View style={[Style.flex__row, Style.align__items_center]}>
        <AppText style={[Style.text__primary, Style.mr__1, Style.f__14]}>
          <Conditional>
            <If condition={+item === 0}>
              <Icon type={'AntDesign'} name={isActivated ? 'star' : 'staro'}
                    style={[Style.f__16, isActivated ? Style.text__white : Style.text__primary]}/>
              <Text>{`(${length ? length.stars[item] : structure[item].length})`}</Text>
            </If>
            <Else>
              {
                [...(new Array(+item))].map((_, index) => (
                  <Icon type={'AntDesign'} name={isActivated ? 'star' : 'staro'} key={index}
                        style={[Style.f__16, isActivated ? Style.text__white : Style.text__primary]}/>
                ))
              }
            </Else>
          </Conditional>
        </AppText>
        <AppText
          style={[isActivated ? Style.text__muted_l_X : Style.text__muted_d_X, Style.f__14]}>
          {`(${length ? length.stars[item].length : structure[item].length})`}
        </AppText>
        <Conditional>
          <If condition={isActivated}>
            <Icon name={'close'} type={'EvilIcons'} style={[Style.f__16, Style.ml__2, Style.text__white]}/>
          </If>
        </Conditional>
      </View>
    </View>
  </TouchableOpacity>
}

export default HotelsFiltersStars;
