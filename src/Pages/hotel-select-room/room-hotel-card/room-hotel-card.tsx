import React, {FunctionComponent} from 'react';
import {ImageSourcePropType, StyleSheet, View} from 'react-native';
import {AppText} from '../../../Containers';
import {BORDER_RADIUS} from '../../../../native-base-theme/variables/config';
import {Conditional, If, ProgressiveImage} from '../../../Components';
import {Style} from '../../../Styles';
import {Icon} from 'native-base';
import {translate} from '../../../Lib/Languages';

type propsType = {
  star?: number;
  score?: number;
  address?: string;
  hotel_name: string;
  reviews_count?: number;
  image_source?: ImageSourcePropType | null | string;
};
const hotelImage = require('Assets/Images/no-image.png');

const RoomHotelCard: FunctionComponent<{data: propsType}> = (props) => {
  return (
    <View>

      {/*image*/}
      <View>
        <View><ProgressiveImage
          source={props.data.image_source ? {uri: props.data.image_source} : hotelImage}
          resizeMode="cover" style={styles.image}/></View>
      </View>

      {/*details*/}
      <View style={[Style.p__3, Style.bg__white]}>

        {/*name*/}
        <View style={[Style.mb__1]}>
          <AppText style={[Style.text__bold, Style.f__16]} firstLetter>{props.data.hotel_name}</AppText>
        </View>

        {/*star*/}
        <View style={[Style.flex__row, Style.mb__2]}>
          {[...Array(props.data.star)].map(_ => <Icon key={'star' + _} style={[Style.f__12, Style.text__warning]}
                                                      name={'star'} type={'AntDesign'}/>)}
        </View>

        {/*address*/}
        <View style={[Style.flex__row, Style.align__items_center, Style.mb__1]}>
          <Icon style={[Style.f__12, Style.mr__1, Style.text__gray_d_XXX]}
                name={'md-location-outline'}
                type={'Ionicons'}/>
          <AppText style={[Style.text__gray_d_XXX, Style.text__light, Style.f__12]}>
            {props.data.address}
          </AppText>
        </View>

        {/*review*/}
        <Conditional>
          <If condition={!!(props.data.score && props.data.reviews_count)}>
            <View style={[Style.flex__row]}>
              <AppText style={[Style.f__12, Style.text__light]} firstLetter>{translate('score')} </AppText>
              <AppText style={[Style.f__12]}>{props.data.score} </AppText>
              <AppText style={[Style.f__12, Style.text__light]}>{translate('from')} </AppText>
              <AppText style={[Style.f__12]}>{props.data.reviews_count} </AppText>
              <AppText style={[Style.f__12, Style.text__light]}>{translate('reviews')}.</AppText>
            </View>
          </If>
        </Conditional>
      </View>
    </View>
  );
};

export default RoomHotelCard;

const styles = StyleSheet.create({
  image: {
    height: 180,
    width: undefined,
    minWidth: 240,
    flex: 1,
    borderRadius: BORDER_RADIUS,
  },
});
