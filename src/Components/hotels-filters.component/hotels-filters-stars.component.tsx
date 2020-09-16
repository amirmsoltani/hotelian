import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Conditional, {Else, If} from '../conditional.component';
import {Icon} from 'native-base';

type Props = {
  item: string;
  structure: {[key: string]: number[]};
  length?: any;
  actives: {[key: string]: {indexes: number[], name: string}} | undefined;
  onPressFilters: () => void
};
const HotelsFiltersStars = ({item, length, structure, actives, onPressFilters}: Props) => (
  <TouchableOpacity style={[{
    flexDirection: 'row',
    marginVertical: 5,
    marginLeft: 20,
  }, actives && actives[item] ? {backgroundColor: 'green'} : {}]} key={item}
                    onPress={onPressFilters}
  >

    <Conditional>
      <If condition={+item === 0}>
        <Icon type={'AntDesign'} name="star" style={{fontSize: 16, color: '#102030'}}/>
        <Text>{`(${length ? length.stars[item] : structure[item].length})`}</Text>
      </If>
      <Else>
        {
          [...(new Array(+item))].map((_, index) => (
            <Icon type={'AntDesign'} name="star" key={index} style={{fontSize: 16, color: '#efb300'}}/>

          ))
        }
        <Text>{`(${length ? length.stars[item] : structure[item].length})`}</Text>
      </Else>
    </Conditional>
  </TouchableOpacity>);

export default HotelsFiltersStars;
