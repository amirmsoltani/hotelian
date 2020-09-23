import React from 'react';
import Datepicker from 'Components/DatePicker/Datepicker';
import {connect, ConnectedProps} from 'react-redux';
import {ChangeSearchData} from 'Store/Actions';
import {RootStateInterface} from 'Typescript';
import {LinkProps} from 'react-router-native';
import {Actions} from 'react-native-router-flux';

const mapStateToProps = (state: RootStateInterface) => ({
  checkIn: state.searchReducer.form_data.checkIn?.value,
  checkOut: state.searchReducer.form_data.checkOut?.value,
  today: state.appReducer.today.unix,
});
const mapDispatchToProps = {ChangeSearchData};
const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector> & LinkProps;

const SelectDataPage = ({ChangeSearchData, checkIn, checkOut, today}: Props) => {
  const datepicker: {defaultValue?: {checkIn: string, checkOut: string}} = {};
  if (checkIn && checkOut)
    datepicker['defaultValue'] = {checkIn, checkOut};
  return (
    <Datepicker
      onSelect={({checkIn, checkOut}) => {
        ChangeSearchData({checkIn: checkIn, checkOut: checkOut});
        Actions.pop();
      }}
      today={today}
      format={'DD-MM-YYYY'}
      {...datepicker}
    />
  );

};

export default connector(SelectDataPage);
