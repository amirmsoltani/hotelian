import React, {FunctionComponent, useState} from 'react';
import {View} from 'react-native';
import {Icon, Item, Picker} from 'native-base';

import {AppText, FormInput} from '../../../Containers';
import {translate} from '../../../Lib/Languages';
import {Style} from '../../../Styles';
import {BORDER_RADIUS_SM} from '../../../../native-base-theme/variables/config';
import {FormContext} from '../form-context';


type propsType = {
  room_number: number;
  person_number: number;
}

const AdultForm: FunctionComponent<{ data: propsType }> = ({data: {person_number, room_number}}) => {

  //for changing guest's title
  const [title, changeTitle] = useState('male');
  const {state, methods} = React.useContext(FormContext);
  const {focus, blur} = methods!;
  const self = state.rooms[room_number].persons[person_number];
  const {first_name, gender, last_name} = self;
  return (
    <View style={[Style.p__3, Style.bg__white, {borderRadius: BORDER_RADIUS_SM}]}>

      {/*form header*/}
      <View style={[Style.mb__3]}>
        <View style={[Style.flex__row, Style.align__items_center]}>
          <AppText style={[Style.f__14]}>{translate('adult')} </AppText>
          <AppText style={[Style.f__14]}>(</AppText>
          <Icon style={[Style.f__14]} name="man-outline" type={'Ionicons'}/>
          <AppText style={[Style.f__14]}> | </AppText>
          <Icon style={[Style.f__14]} name="woman-outline" type={'Ionicons'}/>
          <AppText style={[Style.f__14]}>)</AppText>
        </View>
      </View>

      {/*inputs*/}
      <View>
        <View style={[Style.mb__3]}>
          <FormInput
            data={{
              label: translate('first-name'),
              input_state: self.field_state.first_name.status,
              message: state.rooms[room_number].persons[person_number].field_state['first_name'].message,
            }}
            onFocus={() => focus(room_number, person_number, 'first_name')}
            onEndEditing={(event) => blur(room_number, person_number, 'first_name', event.nativeEvent.text)}
            defaultValue={first_name}
          />
        </View>
        <View>
          <FormInput
            data={{
              label: translate('last-name'),
              input_state: self.field_state.last_name.status,
              message: state.rooms[room_number].persons[person_number].field_state['last_name'].message,
            }}
            onFocus={() => focus(room_number, person_number, 'last_name')}
            onEndEditing={event => blur(room_number, person_number, 'last_name', event.nativeEvent.text)}
            defaultValue={last_name}
          />
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
            placeholderStyle={{color: 'blue'}}
            placeholderIconColor="red"
            selectedValue={title}
            onValueChange={(itemValue: string) => {
              changeTitle(itemValue);
              blur(room_number, person_number, 'gender', itemValue);
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
