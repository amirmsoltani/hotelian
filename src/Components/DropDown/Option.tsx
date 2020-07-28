import React, {FunctionComponent} from 'react';
import {TouchableHighlight} from 'react-native';
import DropDownContext from './Context';

type Props = {value: any, text: string};
const Option: FunctionComponent<Props> = ({value, text, children}) => {
  const {onSelect} = React.useContext(DropDownContext);


  return (
    <TouchableHighlight onPress={() => onSelect ? onSelect(text, value) : ''}>
      {children}
    </TouchableHighlight>
  );
};

export default Option;
