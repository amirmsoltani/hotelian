import React from 'react';
import {Icon} from 'native-base';
import {Text, TouchableOpacity, View} from 'react-native';

import {Style} from 'Styles';
import {AppText} from '../index';
import Conditional, {Else, If} from 'Components/conditional.component';
import {BORDER_RADIUS_SM, COLOR_PRIMARY} from '../../../native-base-theme/variables/config';
import {HotelsFilterInterface} from 'Typescript/Interfaces';

type Props = {
  item: keyof HotelsFilterInterface['stars'];
  structure: number[]
  length?: number[];
  actives: {[key: string]: {indexes: number[], name: string}} | undefined;
  onPressFilters: () => void
};
const HotelsFiltersStars = ({item, length, structure, actives, onPressFilters}: Props) => {
  const isActivated = !!(actives?.hasOwnProperty(item));

  return <TouchableOpacity activeOpacity={1} key={item} onPress={onPressFilters}>
    <View style={[{borderWidth: .5, borderColor: COLOR_PRIMARY, borderRadius: BORDER_RADIUS_SM},
      Style.mr__2, Style.mb__2, Style.p__1, isActivated ? Style.bg__primary : Style.bg__white]}>
      <View style={[Style.flex__row, Style.align__items_center]}>
        <AppText style={[Style.text__primary, Style.mr__1, Style.f__10]}>
          <Conditional>
            <If condition={+item === 0}>
              <Icon type={'AntDesign'} name={isActivated ? 'star' : 'staro'}
                    style={[Style.f__16, isActivated ? Style.text__white : Style.text__primary]}/>
              <Text>{`(${length ? length.length : structure.length})`}</Text>
            </If>
            <Else>
              {
                [...(new Array(+item))].map((_, index) => (
                  <Icon type={'AntDesign'} name={isActivated ? 'star' : 'staro'} key={index}
                        style={[Style.f__12, isActivated ? Style.text__white : Style.text__primary]}/>
                ))
              }
            </Else>
          </Conditional>
        </AppText>
        {/*<AppText*/}
        {/*  style={[isActivated ? Style.text__muted_l_X : Style.text__muted_d_X, Style.f__10]}>*/}
        {/*  {`(${length ? length.length : structure.length})`}*/}
        {/*</AppText>*/}
      </View>
    </View>
  </TouchableOpacity>;
};

export default HotelsFiltersStars;
