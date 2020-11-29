import React, {FunctionComponent} from 'react';
import {View} from 'react-native';

import {AppText} from '../../Containers';
import {Style} from '../../Styles';
import {Badge} from '../../Components';
import AdultForm from './adult-form/adult-form';
import ChildForm from './child-form/child-form';

import {FormContext} from './form-context';
import {translate} from '../../Lib/Languages';

const GuestForm: FunctionComponent = () => {
  const {state} = React.useContext(FormContext);
  return (
    <View>
      {state.rooms.map((item, room_number) => (
        <View key={(room_number * 100).toString(16)} style={[Style.pt__3]}>

          {/*room name*/}
          <View style={[Style.mb__1, Style.px__3]}>
            <AppText firstLetter style={[Style.text__bold, Style.f__14]}>#{room_number + 1} {item.room_name}</AppText>
          </View>

          {/*room board type*/}
          <View style={[Style.flex__row, Style.mb__3, Style.px__3]}>
            <Badge size={'sm'}
                   text={`${item.adults} ${translate(item.adults > 1 ? 'adults' : 'adult')}`}
                   type={'info'}/>
            {item.child ? <Badge size={'sm'}
                                 text={`${item.child} ${translate(item.child > 1 ? 'children' : 'child')}`}
                                 type={'info'}/> : null}
          </View>

          {/*room guests*/}
          <View>

            {/*adults input*/}
            {item.persons.map((person, person_number) => (
              <View key={person_number + 'person'} style={[Style.mb__1]}>
                {person.age ?
                  <ChildForm data={{room_number, person_number, child_age: person.age}}/> :
                  <AdultForm data={{room_number, person_number}}/>
                }
              </View>))}


          </View>

        </View>))
      }
    </View>
  );
};

export default GuestForm;
