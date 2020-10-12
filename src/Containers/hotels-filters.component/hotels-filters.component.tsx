import React from 'react';
import {View} from 'react-native';

import Conditional, {Else, If} from 'Components/conditional.component';
import HotelsFiltersStars from './hotels-filters-stars.component';
import HotelsFiltersAll from './hotels-filters-all.componnent';
import {GRAY_LIGHT_XX} from '../../../native-base-theme/variables/config';
import {Style} from 'Styles';
import {AppText} from '../index';
import {connect, ConnectedProps} from 'react-redux';
import {HotelsFilterInterface, RootStateInterface} from 'Typescript/Interfaces';
import {ObjectMapToArray} from 'Lib/ObjectTool';
import {ApplyHotelsFilters} from 'Store/Actions';

const mapStateToProps = (state: RootStateInterface) => ({
  structure: state.hotelsReducer.filter!.structure!,
  length: state.hotelsReducer.filter!.numbers!,
  actives: state.hotelsReducer.filter!.actives!,

});
const connector = connect(mapStateToProps, {ApplyHotelsFilters});

type Props = ConnectedProps<typeof connector> & {
  name: keyof HotelsFilterInterface,
}

const filterNames: any = {
  boardTypes: 'Board Types',
  stars: 'Star Rating',
  locations: 'Locations',
  rangePrice: 'Price',
};

function HotelsFilter({actives, length, structure, name, ApplyHotelsFilters}: Props) {
  return (
    <View
      style={[(name !== 'rangePrice' ? {borderBottomColor: GRAY_LIGHT_XX, borderBottomWidth: .5} : {}), Style.py__2]}>
      <AppText style={[Style.text__bold, Style.f__14, Style.mb__1]}>{filterNames[name]}</AppText>
      <View style={[Style.flex__row, Style.flex__wrap]}>

        <Conditional>
          <If condition={name === 'stars'}>
            {
              ObjectMapToArray(structure.stars, (key, value) => (
                  <HotelsFiltersStars item={key}
                                      structure={value!}
                                      actives={actives}
                                      onPressFilters={() => ApplyHotelsFilters({[key]: {name, indexes: value!}})}
                                      length={length?.stars[key]}
                                      key={key}
                  />
                ),
              )
            }
          </If>
          <Else>
            {
              ObjectMapToArray(structure[name], (key, value) =>
                <HotelsFiltersAll
                  item={key} structure={value} actives={actives}
                  name={name} key={key} length={length ? length[name][key] : undefined}
                  onPressFilters={() => ApplyHotelsFilters({[key]: {name, indexes: value!}})}/>,
              )
            }
          </Else>
        </Conditional>

      </View>
    </View>
  );
};

export default connector(HotelsFilter);
