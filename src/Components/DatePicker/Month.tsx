import React, {Component} from 'react';
import {Month as monthType} from 'src/Types/DatepickerTypes';
import {View, Text, TouchableHighlight} from 'react-native';
import style from './DatepickerStyles';
import IF from '../../Lib/IF';

type Props = monthType & {checkIn: number, checkOut: number, onSelect: (unix: number) => void}
type State = {};

class Month extends Component<Props, State> {

  shouldComponentUpdate(nextProps: Readonly<Props>) {
    const {days, time} = this.props;
    const {checkIn, checkOut} = nextProps;
    if (checkIn >= time && checkIn <= days[days.length - 1].time)
      return true;
    else if (checkOut >= time && checkOut <= days[days.length - 1].time)
      return true;
    else if (checkIn < time && checkOut > days[days.length - 1].time)
      return true;
    else if (this.props.checkIn < time && this.props.checkOut > days[days.length - 1].time)
      return true;
    else if (this.props.checkIn >= time && this.props.checkIn <= days[days.length - 1].time)
      return true;
    else if (this.props.checkOut >= time && this.props.checkOut <= days[days.length - 1].time)
      return true;
    else if (checkIn < days[days.length - 1].time && checkOut === -1)
      return true;
    else if (this.props.checkIn < days[days.length - 1].time && this.props.checkOut === -1)
      return true;
    console.log('false');
    return false;
  }


  render() {
    const {checkIn, checkOut, name, onSelect} = this.props;
    const justCheckIn = !!checkIn && checkOut === -1;
    const biggerCheckIn = checkIn + 2592000;
    return (
      <View style={style.monthBox}>
        <Text style={style.monthName}>{name}</Text>
        {
          this.props.days.map(({time, text}, index) => (
            <TouchableHighlight key={index} disabled={text === '' || (time > biggerCheckIn && justCheckIn)}
                                style={[style.day,
                                  IF.O(checkIn === time, style.firstDay)
                                    .O(checkOut === time, style.endDay)
                                    .O(time > checkIn && time < checkOut, style.midDay)
                                    .O(time > biggerCheckIn && justCheckIn, style.disabledDay)
                                    .OR,
                                ]} onPress={() => text === '' ? '' : onSelect(time)}>
              <Text style={style.dayText}>
                {text}
              </Text>
            </TouchableHighlight>
          ))
        }
      </View>
    );
  }
}

export default Month;
