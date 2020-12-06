import React from 'react';
import {TouchableNativeFeedback, View} from 'react-native';
import {MUTED_LIGHT_XX, SHADOW_SM_X} from '../../../../native-base-theme/variables/config';
import {Style} from '../../../Styles';
import {Icon} from 'native-base';
import {AppText} from '../../../Containers';
import {translate} from '../../../Lib/Languages';
import {Conditional, If} from '../../../Components';
import {HotelType} from '../../../Typescript/Types';
import {useNavigation} from '@react-navigation/native';

const HotelRoomAction = ({hotel}: { hotel: HotelType }) => {
  const navigation = useNavigation();
  return (
    <View style={[{height: 50}, SHADOW_SM_X, Style.bg__white, Style.flex__row,
      Style.justify__content_between, Style.align__items_center]}>

      {/*divider*/}
      <View style={{width: 1, height: '70%', backgroundColor: MUTED_LIGHT_XX}}/>

      {/*filter*/}
      <TouchableNativeFeedback>
        <View style={[Style.col__6, Style.h__100, Style.flex__row,
          Style.justify__content_center, Style.align__items_center]}>
          <Icon type="AntDesign" name="filter" style={[Style.f__16, Style.text__info]}/>
          <AppText style={[Style.ml__2, Style.text__primary]}>{translate('filter')}</AppText>
          <Conditional>
            <If condition={true}>
              <View style={[Style.bg__danger, {
                width: 6, height: 6, borderRadius: 3,
                position: 'absolute', top: 15, right: 15,
              }]}/>
            </If>
          </Conditional>
        </View>
      </TouchableNativeFeedback>

      {/*divider*/}
      <View style={{width: 1, height: '70%', backgroundColor: MUTED_LIGHT_XX}}/>

      {/*map*/}
      <TouchableNativeFeedback onPress={() => navigation.navigate('map', hotel)}>
        <View style={[Style.col__6, Style.h__100, Style.flex__row,
          Style.justify__content_center, Style.align__items_center]}>
          <Icon type="SimpleLineIcons" name="map" style={[Style.f__16, Style.text__info]}/>
          <AppText style={[Style.ml__2, Style.text__primary]}>{translate('map')}</AppText>
        </View>
      </TouchableNativeFeedback>

    </View>
  );
};

export default HotelRoomAction;
