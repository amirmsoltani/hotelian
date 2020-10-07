import React from 'react';
import {View} from 'react-native';

import Conditional, {ElIf, Else, If} from '../conditional.component';
import HotelsFiltersStars from './hotels-filters-stars.component';
import HotelsFiltersAll from './hotels-filters-all.componnent';
import {GRAY_LIGHT_X, GRAY_LIGHT_XX, GRAY_LIGHT_XXX} from "../../../native-base-theme/variables/config";
import {Style} from "../../Styles";
import {AppText} from "../../Containers";

type Props = {
  name: string,
  structure: { [key: string]: number[] }, length?: any, actives: { [key: string]: { indexes: number[], name: string } };
  ChangeFilters: (filters: { [key: string]: { indexes: number[], name: string } }) => void
}

const filterNames: any = {
  boardTypes: 'Board Types',
  stars: 'Star Rating',
  locations: 'Locations',
  rangePrice: 'Price',
}

export default function HotelsFilter({actives, length, structure, name, ChangeFilters}: Props) {
  const Change = (item: string) => {
    if (actives[item]) {
      delete actives[item];
      ChangeFilters({...actives});
    } else
      ChangeFilters({[item]: {indexes: structure[item], name}});
  };
  return (
    <View
      style={[(name !== 'rangePrice' ? {borderBottomColor: GRAY_LIGHT_XX, borderBottomWidth: .5} : {}), Style.py__2]}>
      <AppText style={[Style.text__bold, Style.f__14, Style.mb__1]}>{filterNames[name]}</AppText>
      <View style={[Style.flex__row, Style.flex__wrap]}>

        <Conditional>
          <If condition={name === 'stars'}>
            {
              Object.keys(structure).map(item =>
                <HotelsFiltersStars
                  item={item} structure={structure} length={length}
                  key={item} actives={actives}
                  onPressFilters={() => Change(item)}/>)
            }
          </If>
          <Else>
            {
              Object.keys(structure).map(item => {
                return <HotelsFiltersAll
                  item={item} structure={structure} actives={actives}
                  name={name} key={item} length={length}
                  onPressFilters={() => Change(item)}
                />
              })
            }
          </Else>
        </Conditional>

      </View>
    </View>
  );
};

