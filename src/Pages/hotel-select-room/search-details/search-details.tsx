import {RootStateInterface} from 'Typescript';
import {View} from 'react-native';
import {RoomHotelCard, RoomSearchDetails} from '../../index';
import {Style} from 'Styles';
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = (
  {
    hotelReducer: {
      hotel: {result},
      rooms,
    },
    searchReducer: {form_data: {checkIn, checkOut, adultCounts, childCounts, ...form_data}},
  }: RootStateInterface) => (
  {
    hotel: result!.hotel,
    checkIn,
    checkOut,
    adultCounts,
    childCounts,
    nights_count: rooms.result?.night_count,
    get children_ages() {
      const child: number[] = [];
      rooms.result?.req_rooms.forEach(room => {
        if (room.children) {
          child.push(...room.children);
        }
      });
      return child;
    },
    rooms_count: form_data.rooms!.length,
  });

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

const SearchDetails = ({hotel, ...props}: Props) => {

  return (
    <>
      {/*hotel details*/}
      <View style={[Style.mb__1]}><RoomHotelCard data={{
        hotel_name: hotel!.name,
        score: 10, // TODO after add change here
        star: +hotel!.star,
        address: hotel!.address,
        image_source: hotel!.image,
        reviews_count: Infinity,
      }}/></View>

      {/*search details*/}
      <View style={[Style.mb__1]}><RoomSearchDetails data={{
        nights_count: +(props.nights_count ? props.nights_count : 0),
        adults_count: props.adultCounts!,
        children_count: props.childCounts!,
        checkIn: props.checkIn!.formatted,
        checkout: props.checkOut!.formatted,
        children_ages: props.children_ages,
        rooms_count: props.rooms_count!,
      }}/></View>
    </>
  );

};

export default connector(SearchDetails);
