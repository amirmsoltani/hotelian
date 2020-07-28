import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import style from './searchFormStyles';
import {Link} from 'react-router-native';
import {connect, ConnectedProps} from 'react-redux';
import RootState from 'src/Types/RootState';

declare var global: {};
const mapStateToProps = ({search: {searchData}}: RootState) => ({
  rooms: searchData?.rooms,
  nationality: searchData?.nationality,
  checkIn: searchData?.checkIn,
  checkOut: searchData?.checkOut,
  destination: searchData?.destination,
  adultCounts: searchData?.adultCounts,
  childCounts: searchData?.childCounts,
});


const connector = connect(mapStateToProps);
type Props = ConnectedProps<typeof connector>;
const SearchFrom = ({rooms, nationality, checkOut, checkIn, destination, adultCounts, childCounts}: Props) => {
  return (
    <View style={style.container}>
      {/*Destination*/}
      <TouchableHighlight style={style.bigBox}>
        <Link to="/sidebar/selectDestination">
          <Text style={style.textInBox}>{destination ? destination.label : 'Select destination'}</Text>
        </Link>
      </TouchableHighlight>

      {/*CheckIN*/}
      <TouchableHighlight style={[style.smallBox, {alignSelf: 'flex-start'}]}>
        <Link to="/sidebar/searchSelectDate">
          <Text style={[style.textInBox]}>{checkIn ? checkIn : 'check - in'}</Text>
        </Link>
      </TouchableHighlight>

      {/*CheckOut*/}
      <TouchableHighlight style={style.smallBox}>
        <Link to="/sidebar/searchSelectDate">
          <Text style={style.textInBox}>{checkOut ? checkOut : 'check - out'}</Text>
        </Link>
      </TouchableHighlight>

      {/*Nationality*/}
      <TouchableHighlight style={style.bigBox}>
        <Link to="/sidebar/searchNationality">
          <Text style={style.textInBox}>{nationality ? nationality.name : 'Select Nationality'}</Text>
        </Link>
      </TouchableHighlight>

      {/*Rooms*/}
      <TouchableHighlight style={style.bigBox}>
        <Text
          style={style.textInBox}>{`${rooms?.length} Rooms / ${adultCounts} Adults / ${childCounts} Children`}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default connector(SearchFrom);
