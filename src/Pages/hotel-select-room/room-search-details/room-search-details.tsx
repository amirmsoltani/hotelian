import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {Style} from '../../../Styles';
import {AppText} from '../../../Containers';

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
          <View style={[Style.mb__1]}><AppText style={[Style.text__bold]}>Check in</AppText></View>
          <View><AppText style={[Style.text__light, Style.f__12]}>{props.data.checkIn}</AppText></View>
        </View>
        <View style={[Style.col__6]}>
          <View style={[Style.mb__1]}><AppText style={[Style.text__bold]}>Check out</AppText></View>
          <View><AppText style={[Style.text__light, Style.f__12]}>{props.data.checkout}</AppText></View>
        </View>
      </View>

      {/*passengers*/}
      <View>
        <View>
          <View><AppText style={[Style.f__12]}>
            Your group
            : {props.data.adults_count} {props.data.adults_count > 1 ? 'adults' : 'adult'}, {props.data.children_count} children
            {props.data.children_count > 0 ? ` (${props.data.children_ages.sort().join(', ')} years old)` : null}
          </AppText>
          </View>
          <View><AppText style={[Style.f__12]}>
           3 rooms /  3 nights (hard-coded)
          </AppText>
          </View>
        </View>
      </View>

    </View>
  );
};

export default RoomSearchDetails;
