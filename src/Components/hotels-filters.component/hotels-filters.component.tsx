import React from 'react';
import {View} from 'react-native';

import Conditional, {ElIf, Else, If} from '../conditional.component';
import HotelsFiltersStars from './hotels-filters-stars.component';
import HotelsFiltersAll from './hotels-filters-all.componnent';
import {GRAY_LIGHT_XX} from "../../../native-base-theme/variables/config";
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
      style={[(name !== 'rangePrice' ? {borderBottomColor: GRAY_LIGHT_XX, borderBottomWidth: 1} : {}), Style.py__5]}>
      <AppText style={[Style.text__bold, Style.f__16, Style.mb__2]}>{filterNames[name]}</AppText>
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
          <ElIf condition={name === 'locations'}>
            {
              Object.keys(structure).map((item, index) => index < 5 ?
                <HotelsFiltersAll
                  item={item} structure={structure} actives={actives}
                  name={name} key={item} length={length}
                  onPressFilters={() => Change(item)}
                /> : null)
            }
          </ElIf>
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


{/*active*/
}
{/*<View style={[{borderWidth: 1, borderColor: COLOR_PRIMARY, borderRadius: 3,},*/
}
{/*  Style.mr__1, Style.mb__1, Style.p__2, Style.bg__primary]}>*/
}
{/*  <View style={[Style.flex__row, Style.align__items_center]}>*/
}
{/*    <AppText style={[Style.text__white, Style.mr__1, Style.f__14]}>5 Stars</AppText>*/
}
{/*    <AppText style={[Style.text__muted_l_XXX, Style.mr__2, Style.f__14]}>(255)</AppText>*/
}
{/*    <Icon name={'close'} type={'EvilIcons'} style={[Style.f__16]}/>*/
}
{/*  </View>*/
}
{/*</View>*/
}
