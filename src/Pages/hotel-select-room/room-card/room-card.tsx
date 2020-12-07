import React, {FunctionComponent} from 'react';
import {Image, StyleSheet, TouchableHighlight, TouchableNativeFeedback, View} from 'react-native';
import {AppText} from 'Containers';
import {Style} from 'Styles';
import {Conditional, ElIf, If} from 'Components';
import {
  BORDER_RADIUS_SM,
  COLOR_MINT,
  COLOR_PRIMARY,
  COLOR_PURPLE,
  MUTED_LIGHT_XX,
} from '../../../../native-base-theme/variables/config';
import {Button, Icon, Spinner} from 'native-base';
import {PoliciesType} from '../../../Typescript/Types';
import {translate} from "../../../Lib/Languages";

type propsType = {
  room_name: string[],
  board_type: string,
  nonrefundable: boolean,
  cancellation_policies?: PoliciesType[] | null | undefined,
  nights_count: number;
  discount: boolean;
  price: number;
  currency: string;
  onCopy: () => void;
  onRules: () => void;
  onReserve: () => void;
  [key: string]: any
};

const image = require('Assets/Images/unavailable.png');
const RoomCard: FunctionComponent<{ data: propsType }> = (props) => {
  let state = '';
  switch (props.data.cancellation_policies) {
    case undefined:
      state = 'loading';
      break;
    case null:
      state = 'error';
      break;
    default:
      state = 'ok';
  }
  return (
    <TouchableHighlight>
      <>
        <View style={[Style.bg__white]}>

          {/*room name*/}
          <View style={[Style.mb__3, Style.px__3, Style.pt__3]}>
            {props.data.room_name.map((item, index) => (
              <AppText style={[Style.text__bold, Style.f__16, Style.text__primary]} key={item + index}>
                {index + 1} - {item}</AppText>
            ))}
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
                      firstLetter>{translate('nonrefundable')}</AppText>
                  </If>
                </Conditional>
              </View>
            </If>
          </Conditional>

          {/*cancellation policies*/}
          <Conditional>
            <If condition={state === 'ok'}>
              <View style={[Style.mb__3, Style.px__3]}>
                {props.data.cancellation_policies?.map((item, index) =>
                  <View style={[Style.flex__row, Style.align__items_center, Style.mb__1]}
                        key={item.from + item.type + item.from + index}>
                    <Icon style={[Style.f__12, Style.mr__1]} name={'check'} type={'Feather'}/>
                    <AppText firstLetter style={[Style.f__14, Style.text__light]}>{item.from + 'test test'}</AppText>
                  </View>)}
              </View>
            </If>
            <ElIf condition={state === 'loading'}>
              <View style={[Style.align__items_center, Style.justify__content_center, Style.mb__3]}>
                <Spinner color={COLOR_PRIMARY}/>
                <AppText style={[Style.f__12, Style.text__light, Style.ml__3]}>
                  {translate('getting-room-options')}
                </AppText>
              </View>
            </ElIf>
          </Conditional>

          {/*price*/}
          <View style={[Style.flex__row, Style.px__3, Style.mb__3]}>
            <View style={[Style.flex__grow__1]}>
              <View style={[Style.flex__row]}>
                <AppText style={[Style.text__light, Style.f__12, Style.text__muted_d_X]}
                         firstLetter>{translate('price-for')}</AppText>
                <AppText style={[Style.text__light, Style.f__12, Style.text__muted_d_X]}>
                  {props.data.nights_count} {props.data.nights_count > 1 ? 'nights' : 'night'}</AppText>
              </View>
              <View style={[Style.flex__row]}>
                <AppText
                  style={[Style.f__16, Style.text__bold, Style.text__important, Style.mr__1]}>
                  {props.data.currency}</AppText>
                <AppText style={[Style.f__16, Style.text__bold, Style.text__important]}>{props.data.price}</AppText>
              </View>
              <View>
                <AppText style={[Style.text__light, Style.f__10, Style.text__muted_d_X]} firstLetter>
                  {translate('tax-and-charges-included')}
                </AppText>
              </View>
            </View>
            <View style={[Style.flex__shrink__0, Style.flex__grow__0]}>
              <Button onPress={() => props.data.onReserve()} disabled={state !== 'ok'}
                      style={[Style.bg__important, Style.px__3, Style.mt__auto]}>
                <AppText style={[Style.text__white, Style.text__upperCase, Style.f__14, Style.text__bold]}>
                  {translate('reserve')}</AppText>
              </Button>
            </View>
          </View>

          {/*rules and copy*/}
          <View style={[Style.flex__row, Style.px__2]}>
            <View style={[Style.col__6]}>
              <TouchableNativeFeedback disabled={state !== 'ok'} onPress={() => props.data.onRules()}>
                <View style={[Style.m__1, {backgroundColor: MUTED_LIGHT_XX}, Style.p__2]}>
                  <AppText style={[Style.text__capitalize, Style.text__muted_d_X, Style.text__capitalize,
                    Style.text__center, Style.f__14]}>{translate('rules')}
                  </AppText></View>
              </TouchableNativeFeedback>
            </View>
            <View style={[Style.col__6]}>
              <TouchableNativeFeedback disabled={state !== 'ok'} onPress={() => props.data.onCopy()}>
                <View style={[Style.m__1, {backgroundColor: MUTED_LIGHT_XX}, Style.p__2]}>
                  <AppText style={[Style.text__capitalize, Style.text__muted_d_X, Style.text__capitalize,
                    Style.text__center, Style.f__14]}>{translate('copy-data')}
                  </AppText></View>
              </TouchableNativeFeedback>
            </View>
          </View>

        </View>

        {/*unavailable overlay*/}
        {state === 'error' ? (
          <View style={[{
            backgroundColor: 'rgba(255,255,255,.8)', position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0, zIndex: 1,
          }, Style.justify__content_center]}>
            <Image source={image} style={{width: undefined, height: 95,}}
                   resizeMode={"contain"}/>
          </View>
        ) : null}
      </>
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
