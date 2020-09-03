import React, {Component} from 'react';
import {View, FlatList, Text, TouchableHighlight, SafeAreaView} from 'react-native';
import moment, {Moment, MomentInput} from 'moment';
import style from './DatepickerStyles';
import {DateType, Month as MonthType} from '../../Typescript/Types/DatepickerTypes';
import Month from './Month';
import IF from '../../Lib/IF';


interface Props {
  defaultValue?: {
    checkIn: MomentInput;
    checkOut: MomentInput;
  };
  onSelect: (data: {
    checkIn: DateType;
    checkOut: DateType;
    closeAfter?: boolean;
  }) => void;
  format: string;
};

interface State {
  checkIn: number;
  checkOut: number;


}

class Datepicker extends Component<Props, State> {
  year: MonthType[];
  static defaultProps = {
    defaultValue: {
      checkIn: moment().format('YYYY-MM-DD'),
      checkOut: moment().add(1, 'day').format('YYYY-MM-DD'),
    },
    format: 'YYYY-MM-DD',
  };

  convertToZero(date: Moment): Moment {
    date.startOf('hour');
    date.startOf('minute');
    date.startOf('second');
    date.startOf('millisecond');
    return date;
  }

  constructor(props: Props) {
    super(props);
    const checkIn = this.convertToZero(moment(this.props.defaultValue?.checkIn, this.props.format)).unix();
    const checkOut = this.convertToZero(moment(this.props.defaultValue?.checkOut, this.props.format)).unix();
    this.state = {checkIn, checkOut};
    this.year = this.createOneYear();
    this.selectDay = this.selectDay.bind(this);
    this.doneCheck = this.doneCheck.bind(this);
  }

  createOneMonth(date: Moment): MonthType {
    const month: MonthType = {name: date.format('MMMM YYYY'), time: date.unix(), days: []};
    const weekDay = date.day();
    for (let i = 1; i <= date.daysInMonth() + weekDay; i++) {
      month.days.push({
        text: weekDay >= i ? '' : i - weekDay,
        time: weekDay >= i ? 0 : date.unix(),
      });
      if (i > weekDay)
        date.add(1, 'day');
    }
    return month;
  }

  createOneYear(): MonthType[] {
    const date = moment();
    date.startOf('month');
    this.convertToZero(date);
    const oneYear: MonthType[] = [];
    for (let month = 0; month < 12; month++)
      oneYear.push(this.createOneMonth(date));
    return oneYear;
  }

  selectDay(unix: number) {
    const {checkIn, checkOut} = this.state;
    if ((checkIn + 1 && checkOut + 1) || checkIn > unix)
      this.setState({checkIn: unix, checkOut: -1});
    else if (checkIn + 1 && unix > checkIn)
      this.setState({checkOut: unix});
  }

  doneCheck() {
    const checkIn = moment.unix(this.state.checkIn);
    const checkOut = moment.unix(this.state.checkOut);
    this.props.onSelect({
      checkIn: {formatted: checkIn.format('YYYY MMMM DD'), value: checkIn.format(this.props.format)},
      checkOut: {formatted: checkOut.format('YYYY MMMM DD'), value: checkOut.format(this.props.format)},
    });
  }

  render() {
    const {checkOut, checkIn} = this.state;
    return (
      <View style={style.container}>
        <View></View>
        <SafeAreaView style={{flex: 1}}>
          <FlatList data={this.year}
                    initialNumToRender={3}
                    renderItem={({item}) => (<Month
                      onSelect={this.selectDay}
                      checkOut={checkOut}
                      checkIn={checkIn}
                      {...item}/>)}
                    keyExtractor={(month) => month.time.toString()}
          />
        </SafeAreaView>
        {IF.IF(!!checkIn && checkOut !== -1, () =>
          <TouchableHighlight style={{height: 50, backgroundColor: 'yellow'}}
                              onPress={this.doneCheck}>
            <Text style={style.dayText}>
              done
            </Text>
          </TouchableHighlight>).RES
        }
      </View>
    );
  }
}


export default Datepicker;
