import React, {useState} from 'react';
import {Switch, View} from "react-native";
import {Icon, Item, Picker, Textarea} from "native-base";

import {Style} from "../../../Styles";
import {AppText} from "../../../Containers";
import {translate} from "../../../Lib/Languages";
import {Conditional, If} from "../../../Components";

type stateType = {
  switch: boolean;
  late_checkin: number;
}
const LateCheckin = () => {

  //for activating / inactivating late checking
  const [state, setState] = useState<stateType>({switch: false, late_checkin: 0});

  return (
    <View style={[Style.bg__white, Style.p__3]}>

      {/*switch*/}
      <View style={[Style.flex__row, Style.justify__content_between, Style.mb__1]}>
        <AppText firstLetter style={[Style.text__bold, Style.f__14]}>
          {translate('late-checking')}</AppText>
        <Switch
          value={state.switch}
          onValueChange={(value: boolean) => setState({...state, switch: value})}
        />
      </View>

      {/*picker*/}
      <Conditional>
        <If condition={state.switch}>
          <View style={[Style.mb__2]}>
            <Item disabled picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down"/>}
                style={{width: undefined}}
                placeholder={translate('title')}
                placeholderStyle={{color: "blue"}}
                placeholderIconColor="red"
                selectedValue={state.late_checkin}
                onValueChange={(itemValue: any, itemPosition: number) =>
                  setState({...state, late_checkin: itemValue})}
              >
                <Picker.Item label='14:00 - 18:00' value={0}/>
                <Picker.Item label='18:00 - 21:00' value={1}/>
                <Picker.Item label='21:00 - 00:00' value={2}/>
              </Picker>
            </Item>
          </View>
        </If>
      </Conditional>

      {/*textarea*/}
      <View>
        <Textarea
          underline={false} rowSpan={5} bordered
          placeholder={translate('enter-request-about-your-booking')}/>
      </View>

    </View>
  );
};

export default LateCheckin;
