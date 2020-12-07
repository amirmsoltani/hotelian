import React from 'react';
import {Switch, View} from 'react-native';
import {Style} from '../../Styles';
import {AppText} from '../index';
import {HotelsFilterInterface} from '../../Typescript/Interfaces';

type Props = {
  item: keyof HotelsFilterInterface[keyof HotelsFilterInterface];
  structure: number[];
  length?: number[];
  actives: { [key: string]: { indexes: number[], name: string } } | undefined,
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


const HotelsFiltersOther = ({item, structure, name, actives, onPressFilters}:
                              Props) => {
  const isActivated = !!(actives?.hasOwnProperty(item));
  return (
    <View style={[Style.w__100, Style.py__1, isActivated ? Style.bg__primary : Style.bg__white]}>
      <View style={[Style.flex__row, Style.align__items_center, Style.justify__content_between]}>
        <View style={[Style.flex__row,]}>
          <AppText
            style={[isActivated ? Style.text__white : Style.text__primary, Style.mr__1, Style.f__13]}>
            {item === '' ? 'Unknown' : (name === 'boardTypes' ? boardNames[item] : item)}</AppText>
          <AppText
            style={[isActivated ? Style.text__muted_l_X : Style.text__muted_d_X, Style.f__13]}>
            {`(${structure.length})`}
          </AppText>
        </View>
        <Switch value={isActivated} onValueChange={onPressFilters}/>
      </View>
    </View>);
};


export default HotelsFiltersOther;
