import {View} from "react-native";
import React, {FunctionComponent} from 'react';
import {Header, Tab, Tabs} from "native-base";
import {StackScreenProps} from "@react-navigation/stack";

import {AppText, AppTitle, BackNavigation} from "../../../Containers";
import {Style} from "../../../Styles";
import {translate} from "../../../Lib/Languages";

type navigation_params = {
  tab_number: number;
  hotel_name: string;
  //TODO :
  // change this types
  // bg muted for tab content
  // dynamic props to tab content
  // remove search-route screen (BoMore)

  guest_information: any;
  cancellation_policies: any,
  facilities: any,
}
const BoMore: FunctionComponent<StackScreenProps<Record<string, navigation_params>>> = (props) => {
  console.log(props);
  return (
    <>
      <Header hasTabs
              style={[Style.flex__row, Style.bg__primary, Style.align__items_center, Style.px__0]}>
        <View>
          <BackNavigation/>
        </View>
        <View style={[Style.flex__grow__1]}>
          <AppTitle>{props.route.params.hotel_name}</AppTitle>
        </View>
      </Header>
      <Tabs initialPage={props.route.params.tab_number}>
        <Tab tabStyle={[Style.bg__primary]} heading={(
          <View style={[Style.bg__primary]}>
            <AppText style={[Style.text__white]} firstLetter>{translate('guests')}</AppText>
          </View>
        )}>
          <AppText>tab 1</AppText>
        </Tab>
        <Tab tabStyle={[Style.bg__primary]} heading={(
          <View style={[Style.bg__primary]}>
            <AppText style={[Style.text__white]} firstLetter>{translate('facilities')}</AppText>
          </View>
        )}>
          <AppText>tab 2</AppText>
        </Tab>
        <Tab tabStyle={[Style.bg__primary]} heading={(
          <View style={[Style.bg__primary]}>
            <AppText style={[Style.text__white]} firstLetter>{translate('policies')}</AppText>
          </View>
        )}>
          <AppText>tab 3</AppText>
        </Tab>
      </Tabs>
    </>
  );
};


export default BoMore;
