import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {Style} from '../../../Styles';
import {AppText} from '../../../Containers';
import {translate} from "../../../Lib/Languages";

type propsType = {
  checkIn: string;
  checkout: string;
  nights_count: number;
  rooms_count: number;
  children_count: number;
  adults_count: number;
  children_ages: number[];
};
const RoomSearchDetails: FunctionComponent<{ data: propsType }> = (props) => {
  return (
    <View style={[Style.bg__white, Style.p__3]}>

      {/*checkin checkout*/}
      <View style={[Style.flex__row, Style.mb__3]}>
        <View style={[Style.col__6]}>
          <View style={[Style.mb__1]}><AppText style={[Style.text__bold]}>{translate('check-in')}</AppText></View>
          <View><AppText style={[Style.text__light, Style.f__12]}>{props.data.checkIn}</AppText></View>
        </View>
        <View style={[Style.col__6]}>
          <View style={[Style.mb__1]}><AppText style={[Style.text__bold]}>{translate('check-out')}</AppText></View>
          <View><AppText style={[Style.text__light, Style.f__12]}>{props.data.checkout}</AppText></View>
        </View>
      </View>

      {/*passengers*/}
      <View>

        {/*for */}
        <View style={[Style.flex__row, Style.mb__1]}>
          <AppText firstLetter style={[Style.f__12]}>{translate('for')} : </AppText>
          <AppText style={[Style.f__12, Style.text__light]}>
            {props.data.nights_count} {translate('night_s')} / {props.data.rooms_count} {translate('room_s')}
          </AppText>
        </View>

        {/*your group*/}
        <View style={[Style.flex__row, Style.mb__1]}>
          <AppText firstLetter style={[Style.f__12]}>{translate('your-group')} : </AppText>
          <AppText style={[Style.f__12, Style.text__light]}>
            {props.data.adults_count} {props.data.adults_count > 1 ? 'adults' : 'adult'}, {props.data.children_count} {translate('children')}
            {props.data.children_count > 0 ? ` (${props.data.children_ages.sort().join(', ')} ${translate('years-old')})` : null}
          </AppText>
        </View>
      </View>

    </View>
  );
};

export default RoomSearchDetails;
