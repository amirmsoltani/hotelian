import React, {FunctionComponent} from 'react';
import {View} from "react-native";
import {Style} from "../../../../Styles";
import {AppText} from "../../../../Containers";
import {Conditional, ElIf, Else, If} from "../../../../Components";
import {Icon} from "native-base";
import {translate} from "../../../../Lib/Languages";

type guest = {
  first_name: string;
  last_name: string;
  title: string | null;
  age: number | null;
}
type room_guests = guest[];
type propsType = {
  room_guests: room_guests[],
  room_names: string[],
}

const GuestsTab: FunctionComponent<{ data: propsType }> = (props) => {
  return (
    <>
      {props.data.room_guests.map((room, index) => (
        <View key={index} style={[Style.bg__white, Style.p__3, Style.mb__1]}>
          <AppText style={[Style.text__bold, Style.f__14, Style.mb__3]}>
            {props.data.room_names[index]}</AppText>
          <View>
            {room.map((guest, index_i) => (
              <Conditional>

                {/*child*/}
                <If condition={!!guest.age}>
                  <View key={index_i} style={[Style.flex__row, Style.align__items_center]}>
                    <Icon style={[Style.f__14, Style.mr__1]} name={'ios-man-outline'} type={'Ionicons'}/>
                    <AppText firstLetter style={[Style.text__light]}>
                      {`${guest.first_name} ${guest.last_name} (${guest.age} ${translate('year_sold')})`}</AppText>
                  </View>
                </If>

                {/*man*/}
                <ElIf condition={guest.title === 'MR'}>
                  <View key={index_i} style={[Style.flex__row, Style.align__items_center]}>
                    <Icon style={[Style.f__14, Style.mr__1]} name={'man'} type={'Ionicons'}/>
                    <AppText firstLetter style={[Style.text__light]}>
                      {`Mr ${guest.first_name} ${guest.last_name}`}</AppText>
                  </View>
                </ElIf>

                {/*woman*/}
                <ElIf condition={guest.title === 'MS'}>
                  <View key={index_i} style={[Style.flex__row, Style.align__items_center]}>
                    <Icon style={[Style.f__14, Style.mr__1]} name={'ios-woman'} type={'Ionicons'}/>
                    <AppText firstLetter style={[Style.text__light]}>
                      {`Ms ${guest.first_name} ${guest.last_name}`}</AppText>
                  </View>
                </ElIf>

                {/*other*/}
                <Else>
                  <View key={index_i} style={[Style.flex__row, Style.align__items_center]}>
                    <Icon style={[Style.f__14, Style.mr__1]} name={'ios-man-outline'} type={'Ionicons'}/>
                    <AppText firstLetter style={[Style.text__light]}>
                      {`${guest.first_name} ${guest.last_name}`}</AppText>
                  </View>
                </Else>
              </Conditional>
            ))}
          </View>
        </View>
      ))}
    </>
  );
};

export default GuestsTab;
