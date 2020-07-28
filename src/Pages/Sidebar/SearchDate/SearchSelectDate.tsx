import React from 'react';
import Datepicker from '../../../Components/DatePicker/Datepicker';
import {connect, ConnectedProps} from 'react-redux';
import {setSearchData} from '../../../Actions/SearchActions';
import RootState from '../../../Types/RootState';
import {LinkProps} from 'react-router-native';

const mapStateToProps = (state: RootState) => ({
  checkIn: state.search.searchData?.checkIn,
  checkOut: state.search.searchData?.checkOut,
});
const mapDispatchToProps = {setSearchData};
const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector> & LinkProps;

const SearchSelectDate = ({setSearchData, checkIn, checkOut,...props}: Props) => {
  const datepicker: {defaultValue?: {checkIn: string, checkOut: string}} = {};
  if (checkIn && checkOut)
    datepicker['defaultValue'] = {checkIn, checkOut};
  return (
    <>
      <Datepicker
        onSelect={({checkIn, checkOut}) => {
          setSearchData({checkIn: checkIn.value, checkOut: checkOut.value});
          props.history.push('/');
        }}
        format={'YYYY-MM-DD'}
        {...datepicker}
      />
    </>
  );

};

export default connector(SearchSelectDate);
