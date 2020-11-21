import React, {FunctionComponent} from 'react';
import {StyleSheet, TouchableHighlight, TouchableNativeFeedback, View} from 'react-native';
import {AppText} from '../../../Containers';
import {Style} from '../../../Styles';
import {Conditional, If} from '../../../Components';
import {
  BORDER_RADIUS_SM,
  COLOR_MINT,
  COLOR_PURPLE,
  MUTED_LIGHT_XX,
} from '../../../../native-base-theme/variables/config';
import {Button, Icon} from 'native-base';

type propsType = {
  room_name: string,
  board_type: string,
  nonrefundable: boolean,
  cancellation_policies: string[] | null,
  nights_count: number;
  discount: boolean;
  price: number;
  currency: string;
  onCopy: () => void;
  onRules: () => void;
  onReserve: () => void;
};

const RoomCard: FunctionComponent<{ data: propsType }> = (props) => {
  return (
    <TouchableHighlight>
      <View style={[Style.bg__white]}>

        {/*room name*/}
        <View style={[Style.mb__3, Style.px__3, Style.pt__3]}>
          <AppText style={[Style.text__bold, Style.f__16, Style.text__primary]}>
            {props.data.room_name}</AppText>
        </View>

        {/*outlined badges*/}
        <Conditional>
          <If condition={!!props.data.board_type || props.data.nonrefundable}>
            <View style={[Style.flex__row, Style.mb__3, Style.px__3]}>
              <Conditional>
                <If condition={!!props.data.board_type}>
                  <AppText style={[styles.badge, Style.px__2, Style.py__1, Style.f__12, Style.mr__1, Style.mb__1]}
                           firstLetter>{props.data.board_type}</AppText>
                </If>
                <If condition={props.data.nonrefundable}>
                  <AppText
                    style={[styles.nonRefundable, Style.px__2, Style.py__1, Style.f__12, Style.mr__1, Style.mb__1]}
                    firstLetter>Nonrefundable</AppText>
                </If>
              </Conditional>
            </View>
          </If>
        </Conditional>

        {/*cancellation policies*/}
        <Conditional>
          <If condition={!!props.data.cancellation_policies?.length}>
            <View style={[Style.mb__3, Style.px__3]}>
              {props.data.cancellation_policies?.map((item, index) =>
                <View style={[Style.flex__row, Style.align__items_center, Style.mb__1]} key={index}>
                  <Icon style={[Style.f__12, Style.mr__1]} name={'check'} type={'Feather'}/>
                  <AppText firstLetter style={[Style.f__14, Style.text__light]}>{item}</AppText>
                </View>)}
            </View>
          </If>
        </Conditional>

        {/*price*/}
        <View style={[Style.flex__row, Style.px__3, Style.mb__3]}>
          <View style={[Style.flex__grow__1]}>
            <View style={[Style.flex__row]}>
              <AppText style={[Style.text__light, Style.f__12, Style.text__muted_d_X]}
                       firstLetter>price for </AppText>
              <AppText style={[Style.text__light, Style.f__12, Style.text__muted_d_X]}>
                {props.data.nights_count} {props.data.nights_count > 1 ? 'nights' : 'night'}</AppText>
            </View>
            <View style={[Style.flex__row]}>
              <AppText
                style={[Style.f__16, Style.text__bold, Style.text__important, Style.mr__1]}>{props.data.currency}</AppText>
              <AppText style={[Style.f__16, Style.text__bold, Style.text__important]}>{props.data.price}</AppText>
            </View>
            <View>
              <AppText style={[Style.text__light, Style.f__10, Style.text__muted_d_X]} firstLetter>
                tax and charges included</AppText>
            </View>
          </View>
          <View style={[Style.flex__shrink__0, Style.flex__grow__0]}>
            <Button onPress={() => props.data.onReserve()}
                    style={[Style.bg__important, Style.px__3, Style.mt__auto]}>
              <AppText style={[Style.text__white, Style.text__upperCase, Style.f__14, Style.text__bold]}>
                reserve</AppText>
            </Button>
          </View>
        </View>

        {/*rules and copy*/}
        <View style={[Style.flex__row, Style.px__2]}>
          <View style={[Style.col__6]}>
            <TouchableNativeFeedback onPress={() => props.data.onRules()}>
              <View style={[Style.m__1, {backgroundColor: MUTED_LIGHT_XX}, Style.p__2]}>
                <AppText style={[Style.text__muted_d_X, Style.text__capitalize, Style.text__center, Style.f__14]}>
                  Rules</AppText></View>
            </TouchableNativeFeedback>
          </View>
          <View style={[Style.col__6]}>
            <TouchableNativeFeedback onPress={() => props.data.onCopy()}>
              <View style={[Style.m__1, {backgroundColor: MUTED_LIGHT_XX}, Style.p__2]}>
                <AppText style={[Style.text__muted_d_X, Style.text__capitalize, Style.text__center, Style.f__14]}>
                  Copy data</AppText></View>
            </TouchableNativeFeedback>
          </View>
        </View>

      </View>
    </TouchableHighlight>
  );
};

export default RoomCard;
const styles = StyleSheet.create({
  badge: {
    borderColor: COLOR_MINT,
    borderWidth: 0.5,
    borderRadius: BORDER_RADIUS_SM,
    color: COLOR_MINT,
  },
  nonRefundable: {
    borderColor: COLOR_PURPLE,
    borderWidth: 0.5,
    borderRadius: BORDER_RADIUS_SM,
    color: COLOR_PURPLE,
  },
});
