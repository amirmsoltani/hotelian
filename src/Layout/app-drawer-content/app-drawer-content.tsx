import React, {FunctionComponent} from 'react';
import {DrawerContentComponentProps} from "@react-navigation/drawer";
import {Alert, ScrollView, View} from "react-native";

import {Style} from "../../Styles";
import ProfileCard from "./profile-card/profile-card";
import {AppText} from "../../Containers";
import {DrawerLinkType} from "../../Typescript/Types";
import DrawerItem from "./drawer-item/drawer-item";
import {translate} from "../../Lib/Languages";
import {navigate} from "../../Lib/navigation/navigate";

const AppDrawerContent: FunctionComponent<DrawerContentComponentProps> = (props) => {
  const user_info = {
    first_name: 'Akbar',
    last_name: 'TNT',
    title: 'Front-End Developer',
    email: 'Elon_mask@tesla.ir',
    clicked: () => Alert.alert('profile'),
  }
  const drawer_links = {
    'Useful links': [
      {
        label: translate('my-bookings'),
        icon_name: 'calendar-check-o',
        icon_type: 'FontAwesome',
        clicked: () => navigate('banished', 'my-bookings'),
      },
      {
        label: translate('my-invoices'),
        icon_name: 'receipt-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('my-invoices'),
      },
      {
        label: translate('my-transactions'),
        icon_name: 'credit-card',
        icon_type: 'SimpleLineIcons',
        clicked: () => Alert.alert('my-transactions'),
      },
      {
        label: translate('my-refund-requests'),
        icon_name: 'calendar-times-o',
        icon_type: 'FontAwesome',
        clicked: () => Alert.alert('my-refund-requests'),
      },
      {
        label: translate('my-reviews'),
        icon_name: 'comment-discussion',
        icon_type: 'Octicons',
        clicked: () => Alert.alert('my-reviews'),
      },
    ],
    'Help and support': [
      {
        label: translate('support'),
        icon_name: 'md-headset-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('support'),
      },
      {
        label: translate('terms-and-conditions'),
        icon_name: 'md-list-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('terms-and-conditions'),
      },
      {
        label: translate('privacy-and-policies'),
        icon_name: 'ios-shield-checkmark-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('privacy-and-policies'),
      },
      {
        label: translate('Help'),
        icon_name: 'question',
        icon_type: 'SimpleLineIcons',
        clicked: () => Alert.alert('Help'),
      },
    ],
    'Settings and legal': [
      {
        label: 'settings',
        icon_name: 'md-settings-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('settings'),
      },
      {
        label: 'share-the-app',
        icon_name: 'ios-share-social-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('share-the-app'),
      },
      {
        label: 'rate-this-app',
        icon_name: 'star-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('rate-this-app'),
      },
    ],
  }
  return (
    <View style={[Style.bg__white, {flex: 1}]}>

      {/*profile*/}
      <View>
        <ProfileCard data={user_info}/>
      </View>

      {/*items*/}
      <ScrollView>
        {Object.keys(drawer_links).map((item, index) => (
          <View style={[Style.mb__3]} key={`drw_key_${index}`}>
            <AppText style={[Style.text__bold, Style.f__15, Style.px__3, Style.pt__3]}>
              {item}</AppText>
            <View>
              {(Object.values(drawer_links)[index] as DrawerLinkType[]).map((item_i, index_i) => (
                <DrawerItem key={`drw_item_${index_i}`} data={item_i}/>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

    </View>
  );
};

export default AppDrawerContent;
