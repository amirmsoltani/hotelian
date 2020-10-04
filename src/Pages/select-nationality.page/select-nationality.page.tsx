import React, {useState} from 'react';
import {ScrollView, TextInput, TouchableOpacity, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {Body, Container, Header, Icon, Left, List, ListItem, Right} from 'native-base';

import {ChangeSearchData, GetNationality} from 'Store/Actions';
import {NationalityType, RootStateInterface} from 'Typescript';
import style from './../select-destination.page/select-destination-page.style';
import {AppRow, AppText, BackNavigation} from 'Containers';
import {
  Conditional,
  ElIf,
  If,
  SearchFormError,
  SearchFormIdle,
  SearchFormInit,
  SearchPageSkeletonLoader,
} from 'Components';
import {Style} from 'Styles';
import {translate} from 'Lib/Languages';


const mapStateToProps = (state: RootStateInterface) => ({
  nationalities: state.searchReducer.nationality.list,
  status: state.searchReducer.nationality.GET,
});

const mapDispatchToProps = {
  GetNationality,
  ChangeSearchData,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector> & StackScreenProps<{}>;

const SelectNationalityPage = ({nationalities, ChangeSearchData, GetNationality, status, navigation}: Props) => {

  const selectNationality = (nationality: NationalityType) => {
    if (navigation.canGoBack()) {
      ChangeSearchData({nationality});
      navigation.goBack();
    }
  };
  const [inputStyle, setStyle] = useState(style.blurredInput);

  return (
    <Container>
      <Header style={[Style.bg__primary]}>
        <Left>
          <BackNavigation/>
        </Left>
        <Body>
          <AppText style={[Style.f__18, Style.text__white, Style.text__capitalize]}>
            {translate('nationality')}</AppText>
        </Body>
        <Right/>
      </Header>
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        style={style.container}>
        <View style={style.inputContainer}>
          <TextInput
            autoFocus={true}
            style={[style.input, Style.input__align, inputStyle]}
            placeholder={translate('e.g-united-kingdom')}
            onChangeText={(text) => GetNationality(text)}
            onFocus={() => setStyle(style.focusedInput)}
            onBlur={() => setStyle(style.blurredInput)}
          />
        </View>
        <View>
          <Conditional>
            <If condition={status === 'loading'}>
              <View style={style.contentContainer}>
                <SearchPageSkeletonLoader/>
                <SearchPageSkeletonLoader/>
                <SearchPageSkeletonLoader/>
                <SearchPageSkeletonLoader/>
              </View>
            </If>
            <ElIf condition={status === 'ok'}>
              <View style={style.contentContainer}>
                <List>
                  {nationalities?.map((nation, index) => (
                    <ListItem style={style.listItem} key={nation.code}>
                      <TouchableOpacity
                        style={style.touchableOp}
                        onPress={() => selectNationality(nation)}
                        key={index}>
                        <AppRow>
                          <Icon style={style.icon} name={'flag'} type={'FontAwesome'}/>
                          <View>
                            <AppText style={[style.appText, Style.f__14]}>{nation.code}</AppText>
                            <AppText style={[Style.f__14]}>{nation.name}</AppText>
                          </View>
                        </AppRow>
                      </TouchableOpacity>
                    </ListItem>
                  ))}
                </List>
              </View>
            </ElIf>
            <ElIf condition={status === 'notFound'}>
              <View style={style.idleContainer}>
                <SearchFormIdle mode={'nationality'}/>
              </View>
            </ElIf>
            <ElIf condition={status === 'error'}>
              <View style={style.idleContainer}>
                <SearchFormError/>
              </View>
            </ElIf>
            <ElIf condition={status === 'idle'}>
              <View style={style.idleContainer}>
                <SearchFormInit
                  mode={'nationality'}
                />
              </View>
            </ElIf>
          </Conditional>
        </View>
      </ScrollView>
    </Container>
  );
};

export default connector(SelectNationalityPage);
