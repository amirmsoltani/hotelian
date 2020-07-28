import React from 'react';
import {View, TextInput, ScrollView, Text, TouchableHighlight} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {ChangeNationality, setSearchData} from '../../../Actions/SearchActions';
import RootState from '../../../Types/RootState';
import {Nationality} from '../../../Types/SearchTypes';
import {LinkProps} from 'react-router-native';
import style from './SearchNationalityStyles';


const mapStateToProps = (state: RootState) => ({
  nationalities: state.search.nationalities,
});

const mapDispatchToProps = {
  ChangeNationality,
  setSearchData,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector> & LinkProps;

const SearchNationality = ({nationalities, setSearchData, ChangeNationality, history}: Props) => {

  const selectNationality = (nationality: Nationality) => {
    setSearchData({nationality});
    history.push('/');
  };


  return (
    <View style={style.container}>
      <TextInput style={style.input} placeholder="enter Nationality"
                 onChangeText={(text) => ChangeNationality(text)}
      />
      <ScrollView>
        {
          nationalities?.map((nation, index) => (
            <TouchableHighlight onPress={() => selectNationality(nation)} key={index}>
              <Text>{nation.name}</Text>
            </TouchableHighlight>
          ))
        }
      </ScrollView>
    </View>
  );
};

export default connector(SearchNationality);
