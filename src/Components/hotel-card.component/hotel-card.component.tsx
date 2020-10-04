import React from 'react';
import {Icon, View} from 'native-base';
import {I18nManager, Image, TouchableNativeFeedback} from 'react-native';

import {Style} from 'Styles';
import style from './hotel-card-component.style';
import {HotelInterface} from 'Typescript';
import {AppText} from '../../Containers';
import {BORDER_RADIUS_SM, COLOR_SUCCESS, SHADOW_SM_X} from '../../../native-base-theme/variables/config';
import {translate} from '../../Lib/Languages';
import AppBadge from "../../Containers/app-badge/app-badge";

const hotelImage = require('../../Assets/Images/no-image.png');
type Props = {
  hotel: HotelInterface,
  hotelFacilities: string[],
  currency: string,
  book: (id: number, name: string) => void,
  nights: number,
};
export default ({hotel: {hotel_id, image, name, location, address, price, star, room}, nights, hotelFacilities, book, currency}: Props) => {


  return (
    <View style={[Style.px__2, Style.pt__2, Style.w__100]}>
      <View style={[Style.bg__white, SHADOW_SM_X, {borderRadius: BORDER_RADIUS_SM}]}>
        <TouchableNativeFeedback onPress={() => book(hotel_id, name)}>
          <View style={[Style.flex__column, Style.w__100]}>

            {/*image*/}
            <View style={[Style.p__1, Style.mb__2]}>
              <Image style={[style.image]}
                     source={image ? {uri: image} : hotelImage} resizeMode='cover'/>
            </View>

            {/*name*/}
            <View style={[Style.px__3,]}>
              <AppText style={[Style.text__bold, Style.f__14]}>{name}</AppText>
            </View>

            {/*star*/}
            <View style={[Style.px__3, Style.flex__row, Style.mb__2]}>
              {[...(new Array(star).keys())].map(index =>
                <Icon type={'AntDesign'} name="star" key={index} style={[Style.f__10, Style.text__warning]}/>)}
            </View>

            {/*location and address*/}
            <View style={[Style.px__3, Style.mb__1]}>
              <View style={[Style.flex__row, Style.align__items_center]}>
                <Icon type='SimpleLineIcons' name='location-pin'
                      style={[Style.text__black, Style.ml__0, Style.mr__1, Style.f__12]}/>
                <AppText style={[Style.f__12]}>{location}</AppText>
              </View>
              <View style={[Style.mb__1]}>
                <AppText style={[Style.f__10, Style.text__wrap, Style.text__gray_d_X]}>{address}</AppText>
              </View>
            </View>

            {/*facilities*/}
            <View style={[Style.px__3, Style.mb__1, Style.flex__row]}>
              <View style={[Style.flex__row, Style.flex__wrap, Style.align__items_center]}>
                {hotelFacilities.slice(0, 4).map(facility => (
                  <View style={[Style.flex__row, Style.mr__3, Style.mb__1, Style.align__items_center]} key={facility}>
                    <Icon type='Entypo' name="check" style={[Style.f__14, Style.text__mint]}/>
                    <AppText style={[Style.text__mint]}>{facility}</AppText>
                  </View>
                ))}
                <View>
                  <AppText style={[Style.f__14, Style.text__primary, Style.f__10, Style.text__underline]}>
                    {hotelFacilities.length - 4} more</AppText>
                </View>
              </View>
            </View>

            {/*badge and price*/}
            <View style={[Style.px__3, Style.mb__1, Style.flex__row, Style.mb__3, Style.flex__wrap]}>
              <View style={[Style.flex__row, Style.flex__wrap, Style.mb__1, Style.align__self_center]}>
                {room.breakfast ?
                  <AppBadge color={COLOR_SUCCESS}>{translate('breakfast-included')}</AppBadge>
                  : <></>
                }
              </View>
              <View style={[Style.justify__content_end, Style.ml__auto, Style.mb__1,
                Style.flex__row, Style.flex__grow__1, Style.align__items_center]}>
                <View style={[Style.flex__column__reverse, Style.align__items_center]}>
                  <AppText style={[Style.text__important, Style.text__bold, Style.f__18]}>
                    {price.total} {currency}</AppText>
                  <AppText style={[Style.text__important, Style.f__12]}>
                    {translate('for')} {nights} {translate('night')}{(!I18nManager.isRTL && nights > 1) ? 's' : ''}</AppText>
                </View>
                <View style={[]}>
                  <Icon type='Entypo' name={I18nManager.isRTL ? 'chevron-left' : 'chevron-right'}
                        style={[Style.f__20, Style.text__important, Style.text__right]}/>
                </View>
              </View>
            </View>

          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};
