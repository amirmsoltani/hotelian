import React from 'react';
import {TextInput, ScrollView, Text, TouchableHighlight} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {ChangeSearchData, GetNationality} from '../../Store/Actions';
import {NationalityType, RootStateInterface} from '../../Typescript';
import {LinkProps} from 'react-router-native';
import style from './select-nationality-page.style';
import {Actions} from 'react-native-router-flux';
import {Container, Content} from 'native-base';


const mapStateToProps = (state: RootStateInterface) => ({
  nationalities: state.searchReducer.nationality.list,
});

const mapDispatchToProps = {
  GetNationality,
  ChangeSearchData,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector> & LinkProps;

const SelectNationalityPage = ({nationalities, ChangeSearchData, GetNationality}: Props) => {

  const selectNationality = (nationality: NationalityType) => {
    ChangeSearchData({nationality});
    Actions.pop();
  };


  return (
    <Container>
      <Content>
        {/*<View style={style.container}>*/}
        <TextInput style={style.input} placeholder="enter Nationality"
                   onChangeText={(text) => GetNationality(text)}
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
        {/*</View>*/}
      </Content>
    </Container>
  );
};

export default connector(SelectNationalityPage);
