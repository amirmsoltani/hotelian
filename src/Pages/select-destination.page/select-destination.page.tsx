import React, {Component} from 'react';
import {ScrollView, StatusBar, TextInput, TouchableOpacity, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {Body, Button, Container, Header, Icon, Left, List, ListItem, Right} from 'native-base';
import {StackScreenProps} from '@react-navigation/stack';
import style from './select-destination-page.style';
import {ChangeSearchData, GetDestination} from 'Store/Actions';
import {DestinationType, RootStateInterface} from 'Typescript';
import {
  Conditional,
  ElIf,
  If,
  SearchFormError,
  SearchFormIdle,
  SearchFormInit,
  SearchPageSkeletonLoader,
} from 'Components';
import {AppRow, AppText} from 'Containers';
import {Style} from 'Styles';
import {translate, translate as t} from 'Lib/Languages';


const mapStateToProps = (state: RootStateInterface) => ({
  destinations: state.searchReducer.destination.list,
  status: state.searchReducer.destination.GET,
});
const mapDispatchToProps = {
  ChangeSearchData,
  GetDestination,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector> & StackScreenProps<{}>;

class SelectDestinationPage extends Component<Props> {

  state = {

    //add style when focusing on <TextInput />
    inputStyle: style.blurredInput,
  };


  //=======================================
  // Hooks
  //=======================================
  render() {
    const {destinations, GetDestination, navigation} = this.props;
    return (
      <Container>
        <Header style={[Style.bg__primary]}>
          <StatusBar hidden={true}/>
          <Left>
            <Button onPress={() => navigation.pop()} transparent>
              <Icon
                type={'SimpleLineIcons'}
                name='arrow-left'
                style={[Style.f__18, Style.text__white,]}/>
            </Button>
          </Left>
          <Body>
            <AppText style={[Style.f__18, Style.text__white,Style.text__capitalize]}>
              {translate('destination')}</AppText>
          </Body>
          <Right/>
        </Header>
        <ScrollView
          keyboardShouldPersistTaps={'always'}
          style={style.container}>
          <View style={style.inputContainer}>
            <TextInput
              style={[style.input, this.state.inputStyle]}
              autoFocus={true}
              placeholder={`${t('city')}, ${t('hotel')}, ${t('landmarks')}`}
              onChangeText={(text) => GetDestination(text)}
              onFocus={() => this.setState({inputStyle: {...style.focusedInput}})}
              onBlur={() => this.setState({inputStyle: {...style.blurredInput}})}
            />
          </View>
          <View>
            <Conditional>
              <If condition={this.props.status === 'loading'}>
                <View style={style.contentContainer}>
                  <SearchPageSkeletonLoader/>
                  <SearchPageSkeletonLoader/>
                  <SearchPageSkeletonLoader/>
                  <SearchPageSkeletonLoader/>
                </View>
              </If>
              <ElIf condition={this.props.status === 'ok'}>
                <View style={style.contentContainer}>
                  <List>
                    {destinations?.map((des, index) => (
                      <ListItem style={style.listItem}
                                key={des.dest_code}>
                        <TouchableOpacity style={style.touchableOp}
                                          onPress={() => this.selectDestination(des)}
                                          key={index}>
                          <AppRow>
                            <Icon
                              style={style.icon}
                              name={des.dest_type === 'hotel' ? 'bed' : 'city'}
                              type={des.dest_type === 'hotel' ? 'Ionicons' : 'FontAwesome5'}
                            />
                            <View>
                              <AppText style={[style.appText, Style.f__14]}>{des.label}</AppText>
                              <AppText style={[Style.f__14]}>{des.text}</AppText>
                            </View>
                          </AppRow>
                        </TouchableOpacity>
                      </ListItem>
                    ))}
                  </List>
                </View>
              </ElIf>
              <ElIf condition={this.props.status === 'notFound'}>
                <View style={style.idleContainer}>
                  <SearchFormIdle
                    mode={'destination'}
                  />
                </View>
              </ElIf>
              <ElIf condition={this.props.status === 'error'}>
                <View style={style.idleContainer}>
                  <SearchFormError/>
                </View>
              </ElIf>

              {/*initial state*/}
              <ElIf condition={this.props.status === 'idle'}>
                <View style={style.idleContainer}>
                  <SearchFormInit
                    mode={'destination'}
                  />
                </View>
              </ElIf>
            </Conditional>
          </View>
        </ScrollView>
      </Container>
    );
  }


  //=======================================
  // Methods
  //=======================================
  selectDestination(destination: DestinationType) {
    this.props.ChangeSearchData({destination});
    this.props.navigation.pop();
  }

}

export default connector(SelectDestinationPage);
