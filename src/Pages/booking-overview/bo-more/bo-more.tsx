import {View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {Header, Tab, Tabs} from 'native-base';
import {StackScreenProps} from '@react-navigation/stack';

import {AppText, AppTitle, BackNavigation} from '../../../Containers';
import {Style} from '../../../Styles';
import {translate} from '../../../Lib/Languages';
import {MUTED_LIGHT_XXX} from '../../../../native-base-theme/variables/config';
import GuestsTab from './guests-tab/gursts-tab';
import FacilitiesTab from './facilities-tab/facilities-tab';
import PoliciesTab from './policies-tab/policies-tab';
import {RootStateInterface} from '../../../Typescript/Interfaces';
import {connect, ConnectedProps} from 'react-redux';

type navigation_params = {
  tab_number: number;
  hotel_name: string;
  //TODO :
  // remove search-route screen (BoMore)
}
const mapStateToProps = ({hotelReducer: {hotel, rooms}, bookReducer: {passenger}}: RootStateInterface) => {
  const room = rooms.result!.options.find(option => option.option_id === passenger!.option_id);
  return {
    hotel_name: hotel.result!.hotel.name,
    rooms_name: room!.rooms.map(r => r.room_name!),
    facilities: hotel.result!.nsg_facilities.hotel_facilities!.values,
    guest_information: passenger!.rooms!.map(room => room.persons.map(person => ({
      first_name: person.first_name!,
      last_name: person.last_name!,
      title: person.gender ?? null,
      age: person.age ?? null,
    }))),
    policies: {
      cancellation_policies: ['TODO fix here'],//room!.cancellation!.policies,
      alerts: room!.cancellation!.alerts.map((alert, index) => `${index + 1} - ${alert}`).join('\n'),
      restrictions: 'TODO Fix Here',//room!.cancellation!.restrictions,
    },
  };
};
const connector = connect(mapStateToProps);
const BoMore: FunctionComponent<StackScreenProps<Record<string, navigation_params>> & ConnectedProps<typeof connector>> = (
  {facilities, guest_information, hotel_name, policies, rooms_name, route}) => {
  return (
    <>
      <Header hasTabs
              style={[Style.flex__row, Style.bg__primary, Style.align__items_center, Style.px__0]}>
        <View><BackNavigation/></View>
        <View style={[Style.flex__grow__1]}><AppTitle>{hotel_name}</AppTitle></View>
      </Header>
      <Tabs initialPage={route.params.tab_number}>

        {/*guests tab*/}
        <Tab heading={(
          <View style={[Style.bg__primary]}>
            <AppText style={[Style.text__white]} firstLetter>{translate('guests')}</AppText>
          </View>)}>
          <View style={[{flex: 1, backgroundColor: MUTED_LIGHT_XXX}]}>
            <GuestsTab data={{room_guests: guest_information, room_names: rooms_name}}/>
          </View>
        </Tab>

        {/*facilities tab*/}
        <Tab heading={(
          <View style={[Style.bg__primary]}>
            <AppText style={[Style.text__white]} firstLetter>{translate('facilities')}</AppText>
          </View>)}>
          <View style={[{flex: 1, backgroundColor: MUTED_LIGHT_XXX}]}>
            <FacilitiesTab data={facilities}/>
          </View>
        </Tab>

        {/*policies tab*/}
        <Tab heading={(
          <View style={[Style.bg__primary]}>
            <AppText style={[Style.text__white]} firstLetter>{translate('policies')}</AppText>
          </View>)}>
          <View style={[{flex: 1, backgroundColor: MUTED_LIGHT_XXX}]}>
            <PoliciesTab data={policies}/>
          </View>
        </Tab>
      </Tabs>
    </>
  );
};


export default connector(BoMore);
