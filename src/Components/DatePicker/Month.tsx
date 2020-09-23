import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import IF from 'Lib/IF';
import style from './DatepickerStyles';
import {Month as monthType} from 'Typescript/Types/DatepickerTypes';
import {COLOR_MUTED, COLOR_WHITE, MUTED_LIGHT_XXX} from '../../../native-base-theme/variables/config';

type Props = monthType & {checkIn: number, checkOut: number, today: number, onSelect: (unix: number) => void}
type State = {};

class Month extends Component<Props, State> {

  // shouldComponentUpdate(nextProps: Readonly<Props>) {
  //     const {days, time} = this.props;
  //     const {checkIn, checkOut} = nextProps;
  //     if (checkIn >= time && checkIn <= days[days.length - 1].time)
  //         return true;
  //     else if (checkOut >= time && checkOut <= days[days.length - 1].time)
  //         return true;
  //     else if (checkIn < time && checkOut > days[days.length - 1].time)
  //         return true;
  //     else if (this.props.checkIn < time && this.props.checkOut > days[days.length - 1].time)
  //         return true;
  //     else if (this.props.checkIn >= time && this.props.checkIn <= days[days.length - 1].time)
  //         return true;
  //     else if (this.props.checkOut >= time && this.props.checkOut <= days[days.length - 1].time)
  //         return true;
  //     else if (checkIn < days[days.length - 1].time && checkOut === -1)
  //         return true;
  //     else if (this.props.checkIn < days[days.length - 1].time && this.props.checkOut === -1)
  //         return true;
  //     return false;
  // }


  render() {
    const {checkIn, checkOut, name, onSelect, today} = this.props;
    const justCheckIn = !!checkIn && checkOut === -1;
    const biggerCheckIn = checkIn + 2592000;
    return (
      <View style={style.monthBox}>
        <Text style={style.monthName}>{name}</Text>
        {
          this.props.days.map(({time, text}, index) => {
              const res = IF
                .O(checkIn === time, {
                  button: style.firstDay,
                  text: {color: COLOR_WHITE, fontWeight: 'bold'},
                })
                .O(checkOut === time, {
                  button: style.endDay,
                  text: {color: COLOR_WHITE, fontWeight: 'bold'},
                })
                .O(time > checkIn && time < checkOut, {
                  button: style.midDay,
                  text: {color: COLOR_WHITE},
                })
                .O((time > biggerCheckIn && justCheckIn) || (today > time && text !== ''), {
                  text: {
                    color: COLOR_MUTED,
                    backgroundColor: MUTED_LIGHT_XXX,
                  },
                  button: style.disabledDay,
                }).OR;
              return (
                <TouchableOpacity
                  key={index}
                  disabled={text === '' || (time > biggerCheckIn && justCheckIn)}
                  style={[style.day, res !== IF.empty ? res.button : {}]}
                  onPress={() => text === '' ? '' : onSelect(time)}>
                  <Text style={[style.dayText, res === IF.empty ? {} : res.text]}>
                    {text}
                  </Text>
                </TouchableOpacity>);
            },
          )
        }
      </View>
    );
  }
}

export default Month;
