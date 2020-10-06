import React from 'react';
import {Switch, TouchableOpacity, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {Button, Form, Right} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {RootStateInterface} from 'Typescript';
import {AcceptSearchForm} from 'Store/Actions';
import FormRow from './form-row/form-row';
import searchFromStyles from './searchFormStyles';
import {COLOR_IMPORTANT, GRAY_LIGHT_XXX} from '../../../native-base-theme/variables/config';
import {AppText} from 'Containers/index';
import {translate} from 'Lib/Languages';
import {Style} from "../../Styles";

declare var global: {};
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
const SearchFrom = ({rooms, nationality, checkOut, checkIn, destination, adultCounts, childCounts, ...props}: Props) => {
  const navigation = useNavigation();
  return (
    <Form style={searchFromStyles.container}>

      {/*inputs*/}
      <View>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('destination')}>
          <FormRow
            text={destination ?
              destination.dest_type === 'city' ? destination.text : `${destination.label}, ${destination.text}`
              : translate('where-are-you-going?')
            }
            isFilled={!!destination}
            hasError={false}
            type={'destination'}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('datepicker')}>
          <FormRow
            text={checkIn ? `${checkIn} - ${checkOut}` : translate('check-in') + ' - ' + translate('check-out')}
            isFilled={!!checkIn}
            hasError={false}
            type={'checkin-out'}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('nationality')}>
          <FormRow
            text={nationality ? nationality.name : translate('enter-your-nationality')}
            isFilled={!!nationality}
            hasError={false}
            type={'nationality'}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('rooms')}>
          <FormRow
            text={
              `${rooms?.length} ${translate('room')}${!!rooms && rooms?.length > 1 ? 's' : ''} / ` +
              `${adultCounts} ${translate('adult')}${!!adultCounts && adultCounts > 1 ? 's' : ''} / ` +
              `${childCounts} ${translate('children')}`
            }
            isFilled={!!nationality}
            hasError={false}
            type={'passenger'}
          />
        </TouchableOpacity>
      </View>

      {/*buttons*/}
      <View>
        <View style={[searchFromStyles.btnSection, Style.flex__row]}>
          <View style={{paddingRight: 10, width: 100,}}>
            <Button rounded block style={[{backgroundColor: GRAY_LIGHT_XXX,}]}>
              <AppText style={[
                Style.text__primary,
                Style.text__center,
                Style.text__upperCase,
              ]}>{translate('map')}</AppText>
            </Button>
          </View>
          <View style={[{paddingLeft: 10,}, Style.flex__grow__1]}>
            <Button rounded block onPress={props.AcceptSearchForm} style={{backgroundColor: COLOR_IMPORTANT}}>
              <AppText style={[
                Style.text__white,
                Style.text__center,
                Style.text__upperCase,
              ]}>{translate('search')}</AppText>
            </Button>
          </View>
        </View>
      </View>
    </Form>
  );
};

export default connector(SearchFrom);
