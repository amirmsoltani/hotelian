import React from 'react';
import Datepicker from '../../Components/DatePicker/Datepicker';
import {connect, ConnectedProps} from 'react-redux';
import {ChangeSearchData} from '../../Store/Actions';
import {RootStateInterface} from '../../Typescript';
import {LinkProps} from 'react-router-native';
import {Actions} from 'react-native-router-flux';

const mapStateToProps = (state: RootStateInterface) => ({
  checkIn: state.searchReducer.form_data.checkIn,
  checkOut: state.searchReducer.form_data.checkOut,
});
const mapDispatchToProps = {ChangeSearchData};
const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector> & LinkProps;

const SearchSelectDate = ({ChangeSearchData, checkIn, checkOut}: Props) => {
  const datepicker: {defaultValue?: {checkIn: string, checkOut: string}} = {};
  if (checkIn && checkOut)
    datepicker['defaultValue'] = {checkIn, checkOut};
  return (
    <Datepicker
      onSelect={({checkIn, checkOut}) => {
        ChangeSearchData({checkIn: checkIn.value, checkOut: checkOut.value});
        Actions.pop();
      }}
      format={'YYYY-MM-DD'}
      {...datepicker}
    />
  );

};

export default connector(SearchSelectDate);
