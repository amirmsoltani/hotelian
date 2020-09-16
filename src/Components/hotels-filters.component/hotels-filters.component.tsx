import React from 'react';
import {Text} from 'react-native';
import {CardItem, Header} from 'native-base';
import Conditional, {If, Else} from '../conditional.component';
import HotelsFiltersStars from './hotels-filters-stars.component';
import HotelsFiltersAll from './hotels-filters-all.componnent';

type Props = {
  name: string, structure: {[key: string]: number[]}, length?: any, actives: {[key: string]: {indexes: number[], name: string}};
  ChangeFilters: (filters: {[key: string]: {indexes: number[], name: string}}) => void
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
    <CardItem style={{
      width: '100%',
      backgroundColor: 'rgba(10,20,30,.2)',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginBottom: 15,
    }}>
      <Header>
        <Text style={{width: '100%'}}>{name}</Text>
      </Header>

      <Conditional>
        <If condition={name === 'stars'}>
          {
            Object.keys(structure).map(item => <HotelsFiltersStars item={item} structure={structure} length={length}
                                                                   key={item} actives={actives}
                                                                   onPressFilters={() => Change(item)}/>)
          }
        </If>
        <Else>
          {
            Object.keys(structure).map(item => <HotelsFiltersAll item={item} structure={structure} actives={actives}
                                                                 name={name} key={item} length={length}
                                                                 onPressFilters={() => Change(item)}
            />)
          }
        </Else>
      </Conditional>


    </CardItem>
  );
};
