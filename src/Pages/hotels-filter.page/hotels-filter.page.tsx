import React, {PureComponent} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {FlatList, ScrollView, View} from 'react-native';
import {Body, Button, Header, Left, Right} from 'native-base';
import {StackScreenProps} from '@react-navigation/stack';

import {HotelsFilterInterface, RootStateInterface} from 'Typescript';
import {ApplyHotelsFilters} from 'Store/Actions';
import {Conditional, HotelsFilters, If} from 'Components';
import {Style} from 'Styles';
import style from '../search.page/search-page.styles';
import {AppText, AppTitle, BackNavigation} from 'Containers';
import {translate, translate as t} from 'Lib/Languages';
import {BORDER_RADIUS_SM, COLOR_PRIMARY, SHADOW_LG_XX} from '../../../native-base-theme/variables/config';
import {ObjectKeys, ObjectLen, ObjectMapToArray} from 'Lib/ObjectTool';

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

class HotelsFilterPage extends PureComponent<Props, {filters: {[key: string]: {indexes: number[], name: string}}}> {
  static readonly filters = ['stars', 'boardTypes', 'locations', 'rangePrice'];

  //=======================================
  // Hooks
  //=======================================
  constructor(props: Props) {
    super(props);
    if (props.structure === undefined)
      props.navigation.replace('hotels');
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.props.ApplyHotelsFilters({});
  }

  render() {
    const activesArray = !this.props.actives || !Object.keys(this.props.actives).length ? [] :
      ObjectMapToArray(this.props.actives, (key, value) => ({key: key, value: value}));
    const {structure} = this.props;
    return (
      <>
        <Header style={[Style.bg__primary]}>
          <Left><BackNavigation/></Left>
          <Body><AppTitle>{t('set-your-filters')}</AppTitle></Body>
          <Right>
            <Conditional>
              <If condition={ObjectLen(ac)}>
                <Button transparent onPress={this.reset}>
                  <AppText style={[Style.text__white]}>{t('RESET')}</AppText>
                </Button>
              </If>
            </Conditional>
          </Right>
        </Header>
        <ScrollView style={[Style.bg__white]}>
          <View style={[style.wrapper, Style.mb__0]}>

            {ObjectKeys(structure).filter(name => HotelsFilterPage.filters.includes(name)).map(name =>
              <HotelsFilters
                name={name as keyof HotelsFilterInterface}
                key={name}/>)
            }
          </View>
        </ScrollView>
        <Conditional>
          <If condition={ObjectLen(this.props.actives) > 1}>
            {/*<If condition={true}>*/}
            <View style={[Style.p__1, Style.bg__white, Style.flex__column, SHADOW_LG_XX]}>
              <FlatList
                data={activesArray}
                horizontal={true}
                keyExtractor={item => item.key}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  return <Button
                    transparent style={[Style.pr__1]}
                    activeOpacity={1}>
                    <View style={[{borderWidth: .5, borderColor: COLOR_PRIMARY, borderRadius: BORDER_RADIUS_SM},
                      Style.mr__1, Style.p__1, Style.bg__white]}>
                      <View style={[Style.flex__row, Style.align__items_center]}>
                        <AppText style={[Style.text__primary, Style.mr__1, Style.f__10]}>
                          {item.key} {item.value.name === 'stars' ? (+item.key > 1 ? 'stars' : 'star') : ''}
                        </AppText>
                      </View>
                    </View>
                  </Button>;
                }}/>
              <Button block style={[Style.bg__primary, Style.w__100]}
                      onPress={() => this.props.navigation.navigate('hotels')}>
                <AppText style={[Style.text__white, Style.text__bold]}>{translate('show-results')}</AppText>
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

  setstate(filters: {[key: string]: {indexes: number[], name: string}}) {
    this.setState({filters: {...this.state.filters, ...filters}});
  }

}

export default connector(HotelsFilterPage);
