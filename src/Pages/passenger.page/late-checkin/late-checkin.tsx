import React from 'react';
import {Switch, View} from 'react-native';
import {Icon, Item, Picker, Textarea} from 'native-base';

import {Style} from '../../../Styles';
import {AppText} from '../../../Containers';
import {translate} from '../../../Lib/Languages';
import {Conditional, If} from '../../../Components';
import {FormContext} from '../../../Forms/guest-form/form-context';

type stateType = {
  switch: boolean;
  late_checkin: number;
}
const LateCheckin = () => {

  //for activating / inactivating late checking
  // const [state, setState] = useState<stateType>({switch: false, late_checkin: 0});
  const {state: {lateCheckin: {active, date_time, description}}, methods} = React.useContext(FormContext);
  return (
    <View style={[Style.bg__white, Style.p__3]}>

      {/*switch*/}
      <View style={[Style.flex__row, Style.justify__content_between, Style.mb__1]}>
        <AppText firstLetter style={[Style.text__bold, Style.f__14]}>
          {translate('late-checking')}</AppText>
        <Switch
          value={active}
          onValueChange={(value: boolean) => methods!.switch(value)}
        />
      </View>

      {/*picker*/}
      <Conditional>
        <If condition={active}>
          <View style={[Style.mb__2]}>
            <Item disabled picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down"/>}
                style={{width: undefined}}
                placeholder={translate('title')}
                placeholderStyle={{color: 'blue'}}
                placeholderIconColor="red"
                selectedValue={date_time}
                onValueChange={(itemValue: string) =>
                  methods!.late_change('date_time', itemValue)
                }
              >
                <Picker.Item label="14:00 - 18:00" value={'1'}/>
                <Picker.Item label="18:00 - 21:00" value={'2'}/>
                <Picker.Item label="21:00 - 00:00" value={'3'}/>
              </Picker>
            </Item>
          </View>
        </If>
      </Conditional>

      {/*textarea*/}
      <View>
        <Textarea
          underline={false} rowSpan={5} bordered
          placeholder={translate('enter-request-about-your-booking')}
          defaultValue={description}
          onEndEditing={(e) => {
            methods?.late_change('description', e.nativeEvent.text);
          }}
        />
      </View>

    </View>
  );
};

export default LateCheckin;
