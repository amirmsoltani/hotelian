import React from 'react';
import {Icon} from "native-base";
import {View} from "react-native";

import {Style} from "../../Styles";
import {AppText} from "../../Containers";
import {NsgFacilitiesType} from "../../Typescript/Types";


const HotelFacilities = (props: NsgFacilitiesType) => {
  let icon: { name: string, type: "AntDesign" | "Entypo" | "EvilIcons" | "Feather" | "FontAwesome" | "FontAwesome5" | "Foundation" | "Ionicons" | "MaterialCommunityIcons" | "MaterialIcons" | "Octicons" | "SimpleLineIcons" | "Zocial" };
  switch (props.name) {
    case'Business Facilities':
      icon = {name: 'briefcase-outline', type: 'Ionicons'}
      break;
    case'Complimentary Amenities':
      icon = {name: 'badge', type: 'SimpleLineIcons'}
      break;
    case'Hotel Facilities':
      icon = {name: 'fast-food-outline', type: 'Ionicons'}
      break;
    case'Hotel Information':
      icon = {name: 'carryout', type: 'AntDesign'}
      break;
    case'Leisure Facilities':
      icon = {name: 'cart-outline', type: 'Ionicons'}
      break;
    case'Nearby Locations':
      icon = {name: 'navigate-outline', type: 'Ionicons'}
      break;
    case'Room Facilities':
      icon = {name: 'bed-outline', type: 'Ionicons'}
      break;
    default:
      icon = {name: 'md-information-circle-outline', type: 'Ionicons'}
  }

  return (
    <View style={[Style.mb__1, Style.bg__white, Style.py__2, Style.px__3]}>
      <View style={[Style.flex__row, Style.align__items_center, Style.mb__2]}>
        <Icon style={[Style.f__16, Style.mr__1]}
              name={icon.name} type={icon.type}/>
        <AppText style={[Style.text__bold, Style.f__14, Style.text__capitalize]}>
          {props.name}</AppText>
      </View>
      {props.values.map((item, index) =>
        <AppText style={[Style.f__12,]} key={index}>{item}</AppText>)}
    </View>
  );
}

export default HotelFacilities;
