import {View} from "react-native";
import React, {FunctionComponent} from 'react';
import {Header, Tab, Tabs} from "native-base";
import {StackScreenProps} from "@react-navigation/stack";

import {AppText, AppTitle, BackNavigation} from "../../../Containers";
import {Style} from "../../../Styles";
import {translate} from "../../../Lib/Languages";
import {MUTED_LIGHT_XXX} from "../../../../native-base-theme/variables/config";
import GuestsTab from "./guests-tab/gursts-tab";
import FacilitiesTab from "./facilities-tab/facilities-tab";
import PoliciesTab from "./policies-tab/policies-tab";

type navigation_params = {
  tab_number: number;
  hotel_name: string;
  //TODO :
  // remove search-route screen (BoMore)
}
const BoMore: FunctionComponent<StackScreenProps<Record<string, navigation_params>>> = (props) => {

  const hotel_name = 'Hotel darvishi new york';
  const rooms_name = ['kings and queen bed', 'ECMA 2016', 'eslint Vs tslint']
  const facilities = [
    'parking', 'wifi', 'dog', 'sandis', 'pool', 'door',
    'bedroom', 'windows', 'photoshop', 'alignItems', 'kotlet', 'boom boom',
  ];
  const guest_information = [
    [
      {first_name: 'ali', last_name: 'alizade', title: 'MR', age: null},
      {first_name: 'sanaz', last_name: 'sanaz zade', title: 'MS', age: null},
      {first_name: 'ali', last_name: 'alizade', title: null, age: 6},
    ],
    [
      {first_name: 'akbar', last_name: 'misaqiyan', title: 'MR', age: null},
      {first_name: 'hazrat', last_name: 'mohamad', title: null, age: 9},
      {first_name: 'ali', last_name: 'khameneyi', title: null, age: 6},
    ],
    [
      {first_name: 'darkmoon', last_name: 'faire', title: 'MR', age: null},
      {first_name: 'spectrum', last_name: 'coordination', title: 'MS', age: null},
    ]
  ];
  const policies= {
      cancellation_policies: ['az 99/99/99 ta 99/99/99 zelzele miyad', 'drum dum dum umuddmdudm d'],
      alerts: 'aaaa llllll eeeeee rrrrrr tttttt sssssss',
      restrictions: 'rrr eee sss tttt rrr iii cccc ttt iii ooo nnn ssss',
      boardType: 'bed and breakfast',
  };

  return (
    <>
      <Header hasTabs
              style={[Style.flex__row, Style.bg__primary, Style.align__items_center, Style.px__0]}>
        <View><BackNavigation/></View>
        <View style={[Style.flex__grow__1]}><AppTitle>{hotel_name}</AppTitle></View>
      </Header>
      <Tabs initialPage={props.route.params.tab_number}>

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


export default BoMore;
