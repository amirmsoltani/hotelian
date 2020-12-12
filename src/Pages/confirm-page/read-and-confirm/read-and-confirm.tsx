import React, {FC} from 'react';
import {Body, CheckBox, ListItem} from "native-base";
import {TouchableOpacity, View} from "react-native";
import {useNavigation} from '@react-navigation/native';

import {AppText} from "../../../Containers";
import {Style} from "../../../Styles";
import {translate} from "../../../Lib/Languages";


type propsType = {
  onCheckbox: (box_key: string) => void
  booking_itinerary: boolean;
  terms_policies: boolean;
}
const ReadAndConfirm: FC<propsType> = ({booking_itinerary, terms_policies, onCheckbox}) => {
  const navigation = useNavigation();

  return (
    <View>
      <View>
        <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>
          {translate('please-read-and-confirm-to-continue')}</AppText>
      </View>
      <View>
        <ListItem onPress={() => onCheckbox('booking_itinerary')}
                  noBorder style={[Style.m__0]}>
          <CheckBox checked={booking_itinerary} style={[Style.mr__3]}/>
          <Body>
            <AppText firstLetter style={[Style.f__12,]}>
              {translate('confirm-cb-1')}</AppText>
          </Body>
        </ListItem>
        <ListItem onPress={() => onCheckbox('terms_policies')}
                  noBorder style={[Style.m__0]}>
          <CheckBox checked={terms_policies} style={[Style.mr__3]}/>
          <Body>
            <AppText firstLetter style={[Style.f__12,]}>
              {translate('confirm-cb-2')}</AppText>
          </Body>
        </ListItem>
      </View>
      <TouchableOpacity style={[Style.py__2,]} onPress={() => navigation.navigate('terms-and-policies')}>
        <AppText style={[Style.f__12, Style.text__info]} firstLetter>
          {translate('read-more')}</AppText>
      </TouchableOpacity>
    </View>
  );
};

export default ReadAndConfirm;
