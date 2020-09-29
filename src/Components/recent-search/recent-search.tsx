import React from 'react';
import {Icon} from "native-base";
import {View} from "react-native";

import {Style} from "../../Styles";
import {AppRow, AppText} from "../../Containers";
import recentSearchStyles from './recent-search.styles';

type propType = {
  dest: string,
  checkin: string,
  checkout: string,
  adult: number,
  room: number,
  children: number,
}

const RecentSearch = ({dest, checkin, checkout, adult, room, children}: propType) =>
  <View style={recentSearchStyles.container}>
    <View>
      <AppText style={recentSearchStyles.title}>{dest}</AppText>
    </View>
    <View>
      <AppText style={recentSearchStyles.checking}>{checkin} - {checkout}</AppText>
    </View>
    <View style={[Style.mx__auto, Style.justify__content_center]}>
      <AppRow style={[Style.align__items_center, Style.justify__content_center, {width: 200,}]}>
        <Icon style={recentSearchStyles.icon} name={'bed'} type={'FontAwesome5'}/>
        <AppText style={recentSearchStyles.passenger}>x{room}</AppText>
        <Icon style={recentSearchStyles.icon} name={'users'} type={'Entypo'}/>
        <AppText style={recentSearchStyles.passenger}>x{adult}</AppText>
        {
          children ?
            <>
              <Icon style={recentSearchStyles.icon} name={'child-friendly'} type={'MaterialIcons'}/>
              <AppText style={recentSearchStyles.passenger}>x{children}</AppText>
            </>
            : null
        }
      </AppRow>
    </View>
  </View>;

export default RecentSearch;
