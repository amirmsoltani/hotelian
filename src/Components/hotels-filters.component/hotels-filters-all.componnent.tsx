import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {BORDER_RADIUS_SM, COLOR_PRIMARY} from "../../../native-base-theme/variables/config";
import {Style} from "../../Styles";
import {AppText} from "../../Containers";
import Conditional, {If} from "../conditional.component";
import {Icon} from "native-base";

type Props = {
  item: string;
  structure: { [key: string]: number[] };
  length?: any;
  actives: { [key: string]: { indexes: number[], name: string } } | undefined,
  name: string;
  onPressFilters: () => void
};

const boardNames: any = {
  breakfast: 'Breakfast',
  roomOnly: 'Room Only',
  other: 'Others',
  halfBoard: 'Half board',
  fullBoard: 'Full board',
  allInclusive: 'All Inclusive',
}


const HotelsFiltersAll = ({item, length, structure, name, actives, onPressFilters}:
                            Props) => {
  const isActivated = !!(actives?.hasOwnProperty(item));
  return <TouchableOpacity key={item} onPress={onPressFilters}>
    <View style={[{borderWidth: 1, borderColor: COLOR_PRIMARY, borderRadius: BORDER_RADIUS_SM,},
      Style.mr__2, Style.mb__2, Style.p__2, isActivated ? Style.bg__primary : Style.bg__white]}>
      <View style={[Style.flex__row, Style.align__items_center,]}>
        <AppText
          style={[isActivated ? Style.text__white : Style.text__primary, Style.mr__1, Style.f__14]}>
          {item === '' ? 'Unknown' : (name === 'boardTypes' ? boardNames[item] : item)}</AppText>
        <AppText
          style={[isActivated ? Style.text__muted_l_X : Style.text__muted_d_X, Style.f__14]}>
          {`(${length ? length[name][item].length : structure[item].length})`}
        </AppText>
        <Conditional>
          <If condition={isActivated}>
            <Icon name={'close'} type={'EvilIcons'} style={[Style.f__16, Style.ml__2,Style.text__white]}/>
          </If>
        </Conditional>
      </View>
    </View>
  </TouchableOpacity>
}


export default HotelsFiltersAll;
