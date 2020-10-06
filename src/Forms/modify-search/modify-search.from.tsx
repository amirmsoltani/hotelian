import React from 'react';
import {View} from "react-native";
import {Button, Form} from "native-base";
import {useNavigation} from '@react-navigation/native';

import {Style} from "Styles";
import ModifyRow from "./modify-row/modify-row";
import {AppText} from "Containers";
import {translate} from "Lib/Languages";
import {RootStateInterface} from "../../Typescript/Interfaces";
import {connect, ConnectedProps} from "react-redux";
import {AcceptSearchForm} from "../../Store/Actions/search.actions";

const mapStateToProps = ({searchReducer: {form_data}}: RootStateInterface) => ({
  rooms: form_data.rooms,
  nationality: form_data.nationality,
  checkIn: form_data.checkIn?.formatted,
  checkOut: form_data.checkOut?.formatted,
  destination: form_data.destination,
  adultCounts: form_data.adultCounts,
  childCounts: form_data.childCounts,
});
const connector = connect(mapStateToProps, {AcceptSearchForm});
type Props = ConnectedProps<typeof connector>


const ModifySearchFrom = ({rooms, nationality, checkOut, checkIn, destination, adultCounts, childCounts, ...props}: Props) => {

  const navigation = useNavigation();
  return (
    <Form style={[Style.w__100, Style.bg__white, Style.py__3]}>

      {/*destination*/}
      <ModifyRow
        onPress={() => navigation.navigate('destination')}
        iconName={'location'} iconType={'Octicons'}
        text={destination ?
          destination.dest_type === 'city' ? destination.text : `${destination.label}, ${destination.text}`
          : translate('where-are-you-going?')
        }/>

      {/*checkin-out*/}
      <ModifyRow
        onPress={() => navigation.navigate('datepicker')}
        iconName={'calendar'} iconType={'Octicons'}
        text={checkIn ? `${checkIn}  |  ${checkOut}` : `${translate('check-in')}  |  ${translate('check-out')}`}/>

      {/*nationality*/}
      <ModifyRow
        onPress={() => navigation.navigate('nationality')}
        iconName={'flag-outline'} iconType={'Ionicons'}
        text={nationality ? nationality.name : translate('enter-your-nationality')}/>

      {/*guests*/}
      <ModifyRow
        onPress={() => navigation.navigate('rooms')}
        iconName={'person-add-outline'} iconType={'Ionicons'}
        text={
          `${rooms?.length} ${translate('room')}${!!rooms && rooms?.length > 1 ? 's' : ''}  |  ` +
          `${adultCounts} ${translate('adult')}${!!adultCounts && adultCounts > 1 ? 's' : ''}  |  ` +
          `${childCounts} ${translate('children')}`}/>

      <View style={[Style.p__3,]}>
        <Button block onPress={props.AcceptSearchForm}>
          <AppText style={[Style.text__white, Style.text__upperCase]}>{translate('search')}</AppText>
        </Button>
      </View>
    </Form>
  );
};

export default connector(ModifySearchFrom);
