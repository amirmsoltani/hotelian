import React, {FunctionComponent} from 'react';
import {DrawerContentComponentProps} from "@react-navigation/drawer";
import {Alert, ScrollView, View} from "react-native";
import {Style} from "../../Styles";
import ProfileCard from "./profile-card/profile-card";
import {AppText} from "../../Containers";
import {DrawerLinkType} from "../../Typescript/Types";
import DrawerItem from "./drawer-item/drawer-item";

const AppDrawerContent: FunctionComponent<DrawerContentComponentProps> = (props) => {
  const user_info = {
    first_name: 'Akbar',
    last_name: 'TNT',
    title: 'Front-End Developer',
    email: 'Elon_mask@tesla.ir',
    clicked: () => Alert.alert('profile'),
  }
  const drawer_links = {
    'Group one drawer list': [
      {
        label: 'Help',
        icon_name: 'ios-help-circle-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('help'),
      },
      {
        label: 'Settings',
        icon_name: 'md-settings-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('settings'),
      },
      {
        label: 'Share',
        icon_name: 'ios-share-social-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('share'),
      },
      {
        label: 'construct-outline',
        icon_name: 'construct-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('construct-outline'),
      },
      {
        label: 'file-tray-stacked-outline',
        icon_name: 'file-tray-stacked-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('file-tray-stacked-outline'),
      },
    ],
    'Group two drawer list': [
      {
        label: 'game-controller-outline',
        icon_name: 'game-controller-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('game-controller-outline'),
      },
      {
        label: 'images-outline',
        icon_name: 'images-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('images-outline'),
      },
      {
        label: 'logo-closed-captioning',
        icon_name: 'logo-closed-captioning',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('logo-closed-captioning'),
      },
      {
        label: 'logo-twitch',
        icon_name: 'logo-twitch',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('logo-twitch'),
      },
      {
        label: 'megaphone-outline',
        icon_name: 'megaphone-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('megaphone-outline'),
      },
    ],
    'Group Three drawer list': [
      {
        label: 'rocket-outline',
        icon_name: 'rocket-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('rocket-outline'),
      },
      {
        label: 'trophy-outline',
        icon_name: 'trophy-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('trophy-outline'),
      },
      {
        label: 'sunny-outline',
        icon_name: 'sunny-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('sunny-outline'),
      },
      {
        label: 'ios-bar-chart-outline',
        icon_name: 'ios-bar-chart-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('ios-bar-chart-outline'),
      },
      {
        label: 'ios-cloud-upload-outline',
        icon_name: 'ios-cloud-upload-outline',
        icon_type: 'Ionicons',
        clicked: () => Alert.alert('ios-cloud-upload-outline'),
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
