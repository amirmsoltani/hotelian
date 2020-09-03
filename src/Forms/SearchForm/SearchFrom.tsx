import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import style from './searchFormStyles';
import {connect, ConnectedProps} from 'react-redux';
import {RootStateInterface} from 'src/Typescript';
import {AcceptSearchForm} from '../../Store/Actions';
import {Actions} from 'react-native-router-flux';
import {Form, Icon} from 'native-base';

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
type Props = ConnectedProps<typeof connector>;
const SearchFrom = ({rooms, nationality, checkOut, checkIn, destination, adultCounts, childCounts, ...props}: Props) => {
  return (
    <Form>
      <View style={style.container}>
        {/*Destination*/}
        <TouchableHighlight style={style.bigBox} onPress={Actions.destination}>
          <Text style={style.textInBox}>
            {destination ? destination.label : 'Select destination'}
          </Text>
        </TouchableHighlight>

        {/*CheckIN*/}
        <TouchableHighlight style={[style.smallBox, {alignSelf: 'flex-start'}]} onPress={Actions.datepicker}>
          <Text style={[style.textInBox]}>{checkIn ? checkIn : 'check - in'}</Text>
        </TouchableHighlight>

        {/*CheckOut*/}
        <TouchableHighlight style={style.smallBox} onPress={Actions.datepicker}>
          <Text style={style.textInBox}>{checkOut ? checkOut : 'check - out'}</Text>
        </TouchableHighlight>

        {/*Nationality*/}
        <TouchableHighlight style={style.bigBox} onPress={Actions.nationality}>
          <Text style={style.textInBox}>{nationality ? nationality.name : 'Select Nationality'}</Text>
        </TouchableHighlight>

        {/*Rooms*/}
        <TouchableHighlight style={style.bigBox} onPress={Actions.rooms}>
          <Text style={style.textInBox}>
            {`${rooms?.length} Rooms / ${adultCounts} Adults / ${childCounts} Children`}
          </Text>
        </TouchableHighlight>
      </View>
      <TouchableHighlight style={style.searchButton} onPress={props.AcceptSearchForm}>
        <>
          <Icon name='search1' type={'AntDesign'} style={{color: 'white', marginRight: 10, fontSize: 18}}/>
          <Text style={{color: 'white'}}>
            Search
          </Text>
        </>
      </TouchableHighlight>
    </Form>
  );
};

export default connector(SearchFrom);
