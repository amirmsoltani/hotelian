import React, {PureComponent} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {FlatList, ScrollView, View} from 'react-native';
import {Body, Button, Header, Icon, Left, Right} from 'native-base';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStateInterface} from 'Typescript';
import {ApplyHotelsFilters} from 'Store/Actions';
import {Conditional, HotelsFilters, If} from 'Components';
import {Style} from 'Styles';
import style from '../search.page/search-page.styles';
import {AppText, AppTitle, BackNavigation} from 'Containers';
import {translate, translate as t} from "../../Lib/Languages";
import {COLOR_PRIMARY, SHADOW_LG_XX} from "../../../native-base-theme/variables/config";

const mapStateToProps = ({hotelsReducer: {filter, change_filter}}: RootStateInterface) => ({
  structure: filter!.structure,
  numbers: filter!.numbers,
  actives: filter!.actives,
  change_filter: change_filter,
});
const mapDispatchToProps = {
  ApplyHotelsFilters,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector> & StackScreenProps<any>;

class HotelsFilterPage extends PureComponent<Props, { filters: { [key: string]: { indexes: number[], name: string } } }> {
  static readonly filters = ['stars', 'boardTypes', 'locations', 'rangePrice'];
  change_filter: number;

  //=======================================
  // Hooks
  //=======================================
  constructor(props: Props) {
    super(props);
    if (props.structure === undefined)
      props.navigation.replace('hotels');
    this.state = {filters: props.actives || {}};
    this.reset = this.reset.bind(this);
    this.setstate = this.setstate.bind(this);
    this.change_filter = this.props.change_filter;
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: any) {
    this.change_filter = prevProps.change_filter;
    if (this.state !== prevState)
      this.props.ApplyHotelsFilters(this.state.filters, this.props.structure);
  }

  render() {
    const activesArray = !this.props.actives || !Object.keys(this.props.actives).length ? [] :
      Object.keys(this.props.actives).map(item => ({key: item, value: this.props.actives![item]}));
    console.log(activesArray);
    const {numbers, structure} = this.props;
    const canReset = Object.keys(this.state.filters).length > 0;
    return (
      <>
        <Header style={[Style.bg__primary]}>
          <Left><BackNavigation/></Left>
          <Body><AppTitle>{t('set-your-filters')}</AppTitle></Body>
          <Right>
            <Conditional>
              <If condition={canReset}>
                <Button transparent onPress={this.reset}>
                  <AppText style={[Style.text__white]}>RESET</AppText>
                </Button>
              </If>
            </Conditional>
          </Right>
        </Header>
        <ScrollView style={[Style.bg__white]}>
          <View style={[style.wrapper, Style.mb__0]}>

            {Object.keys(structure).filter(name => HotelsFilterPage.filters.includes(name)).map(name =>
              <HotelsFilters
                // @ts-ignore
                structure={structure[name]} actives={this.state.filters} length={numbers} name={name}
                key={name} ChangeFilters={this.setstate}/>)
            }
          </View>
        </ScrollView>
        <Conditional>
          {/*<If condition={this.props.change_filter !== this.change_filter}>*/}
          <If condition={true}>
            <View style={[Style.p__1, Style.bg__white, Style.flex__column, SHADOW_LG_XX]}>
              <FlatList
                style={[Style.mb__1,]}
                data={activesArray}
                horizontal={true}
                keyExtractor={item => item.key}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  return <Button
                    transparent style={[Style.px__2]}
                    activeOpacity={1}>
                    <View style={[
                      {borderWidth: .5, borderColor: COLOR_PRIMARY, borderRadius: 25},
                      Style.bg__white,
                      Style.px__2,
                      Style.py__1,
                    ]}>
                      <View style={[Style.flex__row, Style.align__items_center, Style.p__1, Style.align__items_center]}>
                        <Icon style={[Style.f__12, Style.px__0, Style.ml__0, Style.mr__1]} name='close'
                              type='Ionicons'/>
                        {/*<Conditional>*/}
                        {/*  <If condition={item.value.name === 'stars'}>*/}
                        {/*    {new Array(+item.key).map(_ =>*/}
                        {/*      <Icon type='AntDesign' name='staro'*/}
                        {/*            style={[Style.f__16, Style.text__primary]}/>)}*/}
                        {/*  </If>*/}
                        {/*  <Else>*/}
                        <AppText style={[Style.text__primary, Style.mr__1, Style.f__10]}>
                          {item.key} {item.value.name}
                        </AppText>
                        {/*  </Else>*/}
                        {/*</Conditional>*/}
                      </View>
                    </View>
                  </Button>
                }
                }
              />
              <Button block style={[Style.bg__primary, Style.w__100]}
                      onPress={() => this.props.navigation.navigate('hotels')}>
                <AppText style={[Style.text__white, Style.text__bold]}>{translate('apply')}</AppText>
              </Button>
            </View>
          </If>
        </Conditional>
      </>
    );
  }


  //=======================================
  // Handlers
  //=======================================
  reset() {
    this.setState({filters: {}});
  }

  setstate(filters: { [key: string]: { indexes: number[], name: string } }) {
    this.setState({filters: {...this.state.filters, ...filters}});
  }

}

export default connector(HotelsFilterPage);
