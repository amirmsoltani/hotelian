import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from "react-native";
import {Style} from "../../../Styles";
import {Conditional, If, ProgressiveImage} from "../../../Components";
import {AppText} from "../../../Containers";
import {Icon} from "native-base";
import {BORDER_RADIUS} from "../../../../native-base-theme/variables/config";


type hdt = {
  hotel_name: string;
  hotel_star: number | null;
  hotel_address: string | null;
  hotel_location: string | null;
  hotel_image: string | null;
};
const styles = StyleSheet.create({
  image: {
    height: 180,
    width: undefined,
    minWidth: 240,
    flex: 1,
    borderRadius: BORDER_RADIUS,
  },
});
const hotelImage = require('Assets/Images/no-image.png');
const BoHotelDetails: FunctionComponent<{ data: hdt }> = (props) => {
  return (
    <View>
      <View style={[Style.mb__1]}>
        <View><ProgressiveImage source={props.data.hotel_image ? {uri: props.data.hotel_image} : hotelImage}
                                resizeMode="cover" style={styles.image}/></View>
      </View>
      <View style={[Style.bg__white, Style.p__3]}>

        {/*name*/}
        <View style={[Style.bg__white, Style.mb__1]}>
          <AppText firstLetter style={[Style.text__bold, Style.f__14]}>{props.data.hotel_name}</AppText>
        </View>

        {/*star*/}
        <Conditional>
          <If condition={!!(props.data.hotel_star && props.data.hotel_star > 0)}>
            <View style={[Style.flex__row, Style.mb__2]}>
              {[...(new Array(props.data.hotel_star).keys())].map(index =>
                <Icon type={'AntDesign'} name="star" key={index} style={[Style.f__10, Style.text__warning]}/>)}
            </View>
          </If>
        </Conditional>

        {/*location and address*/}
        <View style={[Style.mb__1]}>
          <Conditional>
            <If condition={!!props.data.hotel_location}>
              <View style={[Style.flex__row, Style.align__items_center]}>
                <Icon type="SimpleLineIcons" name="location-pin"
                      style={[Style.text__black, Style.ml__0, Style.mr__1, Style.f__12]}/>
                <AppText firstLetter style={[Style.f__12]}>{props.data.hotel_location}</AppText>
              </View>
            </If>
          </Conditional>
          <Conditional>
            <If condition={!!props.data.hotel_address}>
              <View style={[Style.mb__1]}>
                <AppText firstLetter
                         style={[Style.f__10, Style.text__wrap, Style.text__gray_d_X]}>{props.data.hotel_address}</AppText>
              </View>
            </If>
          </Conditional>
        </View>

      </View>
    </View>
  );
};

export default BoHotelDetails;
