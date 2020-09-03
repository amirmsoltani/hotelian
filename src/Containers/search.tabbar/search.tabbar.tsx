import React from 'react';
import {TabsProps} from 'react-native-router-flux';
import {StyleSheet, Text} from 'react-native';
import {Tabs, Tab, Container, View} from 'native-base';

const style = StyleSheet.create({
  view: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: 50,
    backgroundColor: 'red',
  },
  active: {
    backgroundColor: 'green',
  },
  dActive: {
    backgroundColor: 'yellow',
  },

});

export const SearchTabBar = (props: TabsProps): React.FunctionComponentElement<Tabs> => {
  console.log(props);
  return (
    <View style={style.view}>
      <Tabs>
        <Tab heading='tab1' tabStyle={style.dActive} activeTabStyle={style.active}/>
        <Tab heading='tab2'/>

      </Tabs>
    </View>
  );
};
