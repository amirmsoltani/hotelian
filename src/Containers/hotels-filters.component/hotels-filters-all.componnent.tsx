import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {BORDER_RADIUS_SM, COLOR_PRIMARY} from '../../../native-base-theme/variables/config';
import {Style} from '../../Styles';
import {AppText} from '../index';
import {HotelsFilterInterface} from '../../Typescript/Interfaces';
import {HotelsActivesFilterType} from '../../Typescript/Types';

type Props = {
  item: keyof HotelsFilterInterface[keyof HotelsFilterInterface];
  structure: number[];
  actives: HotelsActivesFilterType | undefined,
  name: keyof HotelsFilterInterface;
  onPressFilters: () => void
};

const boardNames: any = {
  breakfast: 'Breakfast',
  roomOnly: 'Room Only',
  other: 'Others',
  halfBoard: 'Half board',
  fullBoard: 'Full board',
  allInclusive: 'All Inclusive',
};


const HotelsFiltersAll = ({item, structure, name, actives, onPressFilters}:
                            Props) => {
  const isActivated = !!(actives?.hasOwnProperty(item));
  return <TouchableOpacity activeOpacity={1} key={item} onPress={onPressFilters}>
    <View style={[{borderWidth: 0.5, borderColor: COLOR_PRIMARY, borderRadius: BORDER_RADIUS_SM},
      Style.mr__2, Style.mb__2, Style.p__1, isActivated ? Style.bg__primary : Style.bg__white]}>
      <View style={[Style.flex__row, Style.align__items_center]}>
        <AppText
          style={[isActivated ? Style.text__white : Style.text__primary, Style.mr__1, Style.f__10]}>
          {item === '' || item === 'Null' ? 'Unknown' : (name === 'boardTypes' ? boardNames[item] : item)}</AppText>
        <AppText
          style={[isActivated ? Style.text__muted_l_X : Style.text__muted_d_X, Style.f__10]}>
          {`(${structure.length})`}
        </AppText>
      </View>
    </View>
  </TouchableOpacity>;
};


export default HotelsFiltersAll;
