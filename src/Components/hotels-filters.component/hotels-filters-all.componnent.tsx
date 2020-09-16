import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type Props = {
  item: string;
  structure: {[key: string]: number[]};
  length?: any;
  actives: {[key: string]: {indexes: number[], name: string}}|undefined,
  name: string;
  onPressFilters: () => void
};
const HotelsFiltersAll = ({item, length, structure, name, actives, onPressFilters}:
                            Props) => (
  <TouchableOpacity
    style={[{
      flexDirection: 'row',
      marginVertical: 5,
      marginLeft: 15,
    }, actives && actives[item] ? {backgroundColor: 'green'} : {}]}
    key={item}
    onPress={onPressFilters}
  >
    <Text>{item === '' ? 'Unknown' : item}</Text>
    <Text>{`(${length ? length[name][item] : structure[item].length})`}</Text>
  </TouchableOpacity>);

export default HotelsFiltersAll;
