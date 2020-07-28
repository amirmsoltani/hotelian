import React, {PureComponent} from 'react';
import {View, TextInput, ScrollView, Text, TouchableHighlight} from 'react-native';
import style from './SearchDestinationStyles';
import {connect, ConnectedProps} from 'react-redux';
import {ChangeDestination, setSearchData} from '../../../Actions/SearchActions';
import RootState from '../../../Types/RootState';
import {Destination} from '../../../Types/SearchTypes';
import {LinkProps} from 'react-router-native';

const mapStateToProps = (state: RootState) => ({
  destinations: state.search.destinations,
});

const mapDispatchToProps = {
  ChangeDestination,
  setSearchData,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector> & LinkProps;

class SearchDestination extends PureComponent<Props> {

  selectDestination(destination: Destination) {
    this.props.setSearchData({destination});
    this.props.history.push('/');
  }

  render() {
    const {destinations, ChangeDestination} = this.props;
    return (
      <View style={style.container}>
        <TextInput style={style.input} placeholder="enter destination"
                   onChangeText={(text) => ChangeDestination(text)}
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
