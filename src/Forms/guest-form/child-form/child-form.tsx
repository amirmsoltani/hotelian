import React, {FunctionComponent} from 'react';
import {View} from 'react-native';

import {AppText, FormInput} from '../../../Containers';
import {translate} from '../../../Lib/Languages';
import {Style} from '../../../Styles';
import {BORDER_RADIUS_SM} from '../../../../native-base-theme/variables/config';
import {FormContext} from '../form-context';


type propsType = {
  room_number: number;
  person_number: number;
  child_age: number;
}

const ChildForm: FunctionComponent<{ data: propsType }> = ({data: {person_number, room_number, child_age}}) => {
  const {state, methods} = React.useContext(FormContext);
  const {focus, blur} = methods!;
  const self = state.rooms[room_number].persons[person_number];
  const {first_name, last_name} = self;
  return (
    <View style={[Style.p__3, Style.bg__white, {borderRadius: BORDER_RADIUS_SM}]}>

      {/*form header*/}
      <View style={[Style.mb__3]}>
        <View style={[Style.flex__row, Style.align__items_center]}>
          <AppText style={[Style.f__14]}>{translate('child')} </AppText>
          <AppText style={[Style.f__14, Style.text__light]}>
            ({child_age} {child_age > 1 ? translate('years-old') : translate('year-old')})</AppText>
        </View>
      </View>

      {/*inputs*/}
      <View>
        <View style={[Style.mb__3]}>
          <FormInput data={{
            label: translate('first-name'), input_state: self.field_state.first_name.status,
            message: state.rooms[room_number].persons[person_number].field_state['first_name'].message,
          }}
                     onFocus={() => {
                       focus(room_number, person_number, 'first_name');
                     }}
                     onEndEditing={(e) => {
                       blur(room_number, person_number, 'first_name', e.nativeEvent.text);
                     }}
                     defaultValue={first_name}
          />
        </View>
        <View>
          <FormInput data={{
            label: translate('last-name'), input_state: self.field_state.last_name.status,
            message: state.rooms[room_number].persons[person_number].field_state['last_name'].message,
          }}
                     onFocus={() => {
                       focus(room_number, person_number, 'last_name');
                     }}
                     onEndEditing={(e) => {
                       blur(room_number, person_number, 'last_name', e.nativeEvent.text);
                     }}
                     defaultValue={last_name}
          />
        </View>
      </View>

    </View>
  );


};

export default ChildForm;
