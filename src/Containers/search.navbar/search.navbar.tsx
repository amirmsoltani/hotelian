import React from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {RootStateInterface} from '../../Typescript';
import {View, Text, Button, Icon} from 'native-base';
import {TabSceneProps, TabsProps, Actions} from 'react-native-router-flux';
import {} from '@react-navigation/native'
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    marginBottom: 30,
    backgroundColor: 'red',
  },
  backIcon: {
    textAlignVertical:'center',
  },
});

const mapStateToProps = (state: RootStateInterface) => state.searchReducer.form_data;
const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector> & TabsProps & TabSceneProps;

const SearchNavBar = (props: Props): React.FunctionComponentElement<View> => {
  console.log(props);
  return <View style={style.container}>
    <Icon name={'arrow-left'} type={'Foundation'} onPress={() => Actions.pop({animated:true})} style={style.backIcon}/>
  </View>;
};

export default connector(SearchNavBar);
