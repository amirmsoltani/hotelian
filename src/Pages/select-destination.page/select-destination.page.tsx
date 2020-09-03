import React, {PureComponent} from 'react';
import {View, TextInput, ScrollView, Text, TouchableHighlight} from 'react-native';
import style from './SearchDestinationStyles';
import {connect, ConnectedProps} from 'react-redux';
import {GetDestination, ChangeSearchData} from '../../Store/Actions';
import {LinkProps} from 'react-router-native';
import {RootStateInterface, DestinationType} from '../../Typescript';
import {Actions} from 'react-native-router-flux';

const mapStateToProps = (state: RootStateInterface) => ({
  destinations: state.searchReducer.destination.list,
});

const mapDispatchToProps = {
  ChangeSearchData,
  GetDestination,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector> & LinkProps;

class SearchDestination extends PureComponent<Props> {

  selectDestination(destination: DestinationType) {
    this.props.ChangeSearchData({destination});
    Actions.pop();
  }

  render() {
    const {destinations, GetDestination} = this.props;
    return (
      <View style={style.container}>
        <TextInput style={style.input} placeholder="enter destination"
                   onChangeText={(text) => GetDestination(text)}
        />
        <ScrollView>
          {
            destinations?.map((des, index) => (
              <TouchableHighlight onPress={() => this.selectDestination(des)} key={index}>
                <Text>{des.text}</Text>
              </TouchableHighlight>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

export default connector(SearchDestination);
