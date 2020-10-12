import React, {Component, PureComponent} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {FlatList, ScrollView, View} from 'react-native';
import {Body, Button, Header, Left, Right} from 'native-base';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStateInterface} from 'Typescript';
import {ApplyHotelsFilters} from 'Store/Actions';
import {Conditional, HotelsFilters, If} from 'Components';
import {Style} from 'Styles';
import style from '../search.page/search-page.styles';
import {AppText, AppTitle, BackNavigation} from 'Containers';
import {translate, translate as t} from 'Lib/Languages';
import {BORDER_RADIUS_SM, COLOR_PRIMARY, SHADOW_LG_XX} from '../../../native-base-theme/variables/config';
import {ObjectKeys, ObjectLen, ObjectMapToArray} from 'Lib/ObjectTool';

const mapStateToProps = ({hotelsReducer: {filter}}: RootStateInterface) => ({
  structure: filter!.structure,
  actives: filter!.actives,
});
const mapDispatchToProps = {
  ApplyHotelsFilters,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector> & StackScreenProps<any>;

class HotelsFilterPage extends PureComponent<Props> {
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
    const {structure} = this.props;
    const al = ObjectLen(this.props.actives);
    const activesArray = al > 1 ? ObjectMapToArray(this.props.actives!, (key, value) => (value.name === 'sort' ? 'jump' : {
      key: key,
      value: value,
    })) : [];
    return (
      <>
        <Header style={[Style.bg__primary]}>
          <Left><BackNavigation/></Left>
          <Body><AppTitle>{t('set-your-filters')}</AppTitle></Body>
          <Right>
            <Conditional>
              <If condition={al > 1}>
                <Button transparent onPress={this.reset}>
                  <AppText style={[Style.text__white]}>{t('RESET')}</AppText>
                </Button>
              </If>
            </Conditional>
          </Right>
        </Header>
        <View style={[style.wrapper, Style.mb__0]}>
          <ScrollView style={[Style.bg__white]}>
            {
              ObjectMapToArray(structure, (key) => {
                if (!HotelsFilterPage.filters.includes(key))
                  return 'jump';
                return <HotelsFilters
                  name={key}
                  key={key}/>;
              })
            }
          </ScrollView>
        </View>
        <Conditional>
          <If condition={al > 1}>
            <View style={[Style.p__1, Style.bg__white, Style.flex__column, SHADOW_LG_XX]}>
              <FlatList
                data={activesArray}
                horizontal={true}
                keyExtractor={item => item.key.toString()}
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





}

export default connector(HotelsFilterPage);
