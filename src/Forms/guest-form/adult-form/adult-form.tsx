import React, {FunctionComponent} from 'react';
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
            // selectedValue={}
            // onValueChange={}
          >
            <Picker.Item label={translate('male')} value="0"/>
            <Picker.Item label={translate('female')} value="1"/>
            <Picker.Item label={translate('other')} value="2"/>
          </Picker>
        </Item>
      </View>

    </View>
  );


};

export default AdultForm;
