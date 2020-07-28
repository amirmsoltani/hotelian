import React, {FunctionComponent, ReactElement} from 'react';
import {contextType} from './Context';
import {SafeAreaView, ScrollView} from 'react-native';
import DropDownContext from './Context';
import {TextStyle} from 'react-native';

type Props = {
  defaultText?: string, defaultValue?: any, onSelect: (data: any) => void,
  style?: TextStyle, boxItem: <T>(value: T) => ReactElement
};
type State = {open: boolean, text: string, value: any};


const ListDropDown: FunctionComponent<Props> = ({defaultValue, defaultText, ...props}) => {
  const [status, setStatus] = React.useState<State>({
    open: false,
    text: defaultText ? defaultText : '',
    value: defaultValue ? defaultValue : null,
  });

  const contextValue: contextType = {
    value: status.value,
    onSelect(text, value) {
      setStatus({text, value, open: false});
      props.onSelect(value);
    },
  };

  return (
    <DropDownContext.Provider value={contextValue}>
      {
        props.boxItem(status.value)
      }
      <SafeAreaView style={[props.style]}>
        <ScrollView>
          {
            props.children
          }
        </ScrollView>
      </SafeAreaView>
    </DropDownContext.Provider>
  );

};


export default ListDropDown;
