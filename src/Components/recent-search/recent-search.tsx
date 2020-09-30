import React from 'react';
import {Icon} from "native-base";
import {View} from "react-native";

import {Style} from "../../Styles";
import {AppText} from "../../Containers";
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
    <View><AppText style={recentSearchStyles.title}>{dest}</AppText></View>
    <View><AppText style={[recentSearchStyles.checking, Style.text__light]}>{checkin} - {checkout}</AppText></View>
    <View style={[Style.align__items_center, Style.flex__row, Style.justify__content_center,]}>
      <Icon style={[recentSearchStyles.icon, Style.f__10]} name={'bed'} type={'FontAwesome5'}/>
      <AppText style={recentSearchStyles.passenger}>x{room}</AppText>
      <Icon style={[recentSearchStyles.icon, Style.f__10]} name={'users'} type={'Entypo'}/>
      <AppText style={recentSearchStyles.passenger}>x{adult}</AppText>
      {children ?
        <>
          <Icon style={[recentSearchStyles.icon, Style.f__10]} name={'child-friendly'}
                type={'MaterialIcons'}/>
          <AppText style={[recentSearchStyles.passenger, Style.mr__0]}>x{children}</AppText>
        </>
        : null}
    </View>
  </View>;

export default RecentSearch;
