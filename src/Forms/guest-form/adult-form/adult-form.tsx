import React, {FunctionComponent, useState} from 'react';
import {View} from "react-native";
import {Icon, Item, Picker} from "native-base";

import {AppText, FormInput} from "../../../Containers";
import {translate} from "../../../Lib/Languages";
import {Style} from "../../../Styles";
import {BORDER_RADIUS_SM} from "../../../../native-base-theme/variables/config";


type propsType = {
  room_number: number;
}

const AdultForm: FunctionComponent<{ data: propsType }> = (props) => {

  //for changing guest's title
  const [title, changeTitle] = useState('male');

  return (
    <View style={[Style.p__3, Style.bg__white, {borderRadius: BORDER_RADIUS_SM,}]}>

      {/*form header*/}
      <View style={[Style.mb__3]}>
        <View style={[Style.flex__row, Style.align__items_center]}>
          <AppText style={[Style.f__14]}>{translate('adult')} </AppText>
          <AppText style={[Style.f__14]}>(</AppText>
          <Icon style={[Style.f__14]} name='man-outline' type={"Ionicons"}/>
          <AppText style={[Style.f__14]}> | </AppText>
          <Icon style={[Style.f__14]} name='woman-outline' type={"Ionicons"}/>
          <AppText style={[Style.f__14]}>)</AppText>
        </View>
      </View>

      {/*inputs*/}
      <View>
        <View style={[Style.mb__3]}>
          <FormInput data={{label: translate('first-name')}}/>
        </View>
        <View>
          <FormInput data={{label: translate('last-name')}}/>
        </View>
      </View>

      {/*picker*/}
      <View>
        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down"/>}
            style={{width: undefined}}
            placeholder={translate('title')}
            placeholderStyle={{color: "blue"}}
            placeholderIconColor="red"
            selectedValue={title}
            onValueChange={(itemValue: any, itemPosition: number) => {
              changeTitle(itemValue);
            }}
          >
            <Picker.Item label={translate('male')} value="male"/>
            <Picker.Item label={translate('female')} value="female"/>
            <Picker.Item label={translate('other')} value="other"/>
          </Picker>
        </Item>
      </View>

    </View>
  );


};

export default AdultForm;
