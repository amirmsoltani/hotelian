import React from 'react';
import {Alert, View} from 'react-native';
import {Body, Button, Content, Footer, Header, Left, Right} from 'native-base';

import {Style} from 'Styles';
import {AppText, AppTitle, BackNavigation} from 'Containers';
import {translate} from 'Lib/Languages';
import {Conditional, If} from 'Components';
import style from '../search.page/search-page.styles';
import HotelsFiltersAll from '../../Containers/hotels-filters.component/hotels-filters-all.componnent';
import {RootStateInterface} from '../../Typescript/Interfaces';
import {connect, ConnectedProps} from 'react-redux';
import {ObjectLen, ObjectMapToArray} from '../../Lib/ObjectTool';
import {HotelOptionFilter} from '../../Store/Actions/hotel.actions/hotel-option-filter.action';
import {StackScreenProps} from '@react-navigation/stack';


const mapStateToProps = ({hotelReducer: {rooms: {result}}}: RootStateInterface) => ({
  structure: result!.filter.structure,
  actives: result!.filter.actives,
  len: result!.filter.rooms.length,
});
const connector = connect(mapStateToProps, {filter: HotelOptionFilter});

const SelectRoomFilter = ({len, actives, structure, filter, navigation}: ConnectedProps<typeof connector> & StackScreenProps<any>) => {
  const filter_len = ObjectLen(actives);
  return (
    <>
      {/*header*/}
      <Header style={[Style.bg__primary]}>
        <Left>
          <BackNavigation/>
        </Left>
        <Body>
          <AppTitle>{translate('set-your-filters')}</AppTitle>
        </Body>
        <Right>
          <Conditional>
            <If condition={filter_len > 0}>
              <Button transparent onPress={()=>filter()}>
                <AppText style={[Style.text__white, Style.text__upperCase]}>{translate('reset')}</AppText>
              </Button>
            </If>
          </Conditional>
        </Right>
      </Header>

      {/*content*/}
      <Content>
        <View style={[Style.bg__white]}>
          <View style={[style.wrapper, Style.mb__0]}>
            <AppText>board type</AppText>
            {
              ObjectMapToArray(structure.boardTypes, (key, value) => (
                <HotelsFiltersAll item={key} structure={value!} actives={actives} name={'boardTypes'}
                                  onPressFilters={() => {
                                    filter({[key]: {name: 'boardTypes', indexes: value!}});
                                  }} key={key}/>
              ))
            }
          </View>
          <View style={[style.wrapper, Style.mb__0]}>
            <AppText>price</AppText>
            {
              ObjectMapToArray(structure.rangePrice, (key, value) => (
                <HotelsFiltersAll item={key} structure={value!} actives={actives} name={'rangePrice'}
                                  onPressFilters={() => {
                                    filter({[key]: {name: 'rangePrice', indexes: value!}});
                                  }} key={key}/>
              ))
            }
          </View>
        </View>
      </Content>

      {/*footer*/}
      <Footer>
        <View style={[Style.p__1, Style.w__100, Style.bg__white]}>
          <Button
            block style={[Style.bg__primary, Style.w__100]}
            onPress={() => navigation.goBack()}>
            <AppText style={[Style.text__white, Style.text__bold]}>
              {translate('show-results') + ` (${len})`}
            </AppText>
          </Button>
        </View>
      </Footer>
    </>
  );
};

export default connector(SelectRoomFilter);
