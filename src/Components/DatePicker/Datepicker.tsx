import React, {Component} from 'react';
import moment, {Moment, MomentInput} from 'moment';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {Button} from 'native-base';

import style from './DatepickerStyles';
import {DateType, Month as MonthType} from 'Typescript/Types/DatepickerTypes';
import Month from './Month';
import IF from 'Lib/IF';
import {AppText} from 'Containers';
import {Style} from 'Styles';
import {translate} from 'Lib/Languages';

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
  today: number
}

interface State {
  checkIn: number;
  checkOut: number;
}

class Datepicker extends Component<Props, State> {
  year: MonthType[];
  nights = 1;
  static defaultProps = {
    defaultValue: {
      checkIn: moment().format('DD-MM-YYYY'),
      checkOut: moment().add(1, 'day').format('DD-MM-YYYY'),
    },
    format: 'DD-MM-YYYY',
  };
  today: Moment;

  constructor(props: Props) {
    super(props);
    this.today = this.convertToZero(moment(props.today));
    const checkIn = this.convertToZero(moment(props.defaultValue!.checkIn, props.format)).unix();
    const checkOut = this.convertToZero(moment(props.defaultValue!.checkOut, props.format)).unix();
    this.state = {checkIn, checkOut};
    this.year = this.createOneYear();
    this.selectDay = this.selectDay.bind(this);
    this.doneCheck = this.doneCheck.bind(this);
  }

  convertToZero(date: Moment): Moment {
    date.startOf('hour');
    date.startOf('minute');
    date.startOf('second');
    date.startOf('millisecond');
    return date;
  }

  createOneMonth(date: Moment): MonthType {
    const month: MonthType = {name: date.format('MMMM YYYY'), time: date.unix(), days: []};
    const weekDay = date.day();
    const days = date.daysInMonth() + weekDay;
    for (let i = 1; i <= days; i++) {
      month.days.push({
        text: weekDay >= i ? '' : i - weekDay,
        time: weekDay >= i ? 0 : date.unix(),
      });
      if (i > weekDay)
        date.add(1, 'day');
    }
    const ss = (7 - date.day()) % 7;
    for (let i = 1; i <= ss; i++) {
      month.days.push({
        text: '',
        time: 0,
      });
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
    else if (checkIn + 1 && unix > checkIn) {
      this.setState({checkOut: unix});
      this.nights = Math.floor((unix - this.state.checkIn) / 86400);
    }
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
        <View style={Style.bg__primary}>
          <View style={[Style.pb__3, Style.flex__row]}>
            <View style={[Style.p__2, Style.w__50]}>
              <AppText style={
                [
                  {fontSize: 18},
                  Style.text__center,
                  Style.text__bold,
                  Style.text__white,
                ]}>{translate('check-in')}</AppText>
              <AppText style={
                [
                  {fontSize: 14},
                  Style.text__center,
                  Style.text__white,
                ]}>{moment(checkIn * 1000).format('YYYY MMMM DD')}</AppText>
            </View>
            <View style={[Style.p__2, Style.w__50]}>
              <AppText style={
                [
                  {fontSize: 18},
                  Style.text__center,
                  Style.text__bold,
                  Style.text__white,
                ]}>{translate('check-out')}</AppText>
              <AppText style={
                [
                  {fontSize: 14},
                  Style.text__center,
                  Style.text__white,
                ]}>{checkOut !== -1 ? moment(checkOut * 1000).format('YYYY MMMM DD') : '-'}</AppText>
            </View>
          </View>
          <View style={style.dayLabelContainer}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(item => <Text
              key={item} style={style.dayLabel}>{item}</Text>)}</View>
        </View>
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            data={this.year}
            initialNumToRender={3}
            windowSize={2}
            renderItem={({item}) => (<Month
              onSelect={this.selectDay}
              checkOut={checkOut}
              checkIn={checkIn}
              today={this.today.unix()}
              {...item}/>)}
            keyExtractor={(month) => month.time.toString()}
          />
        </SafeAreaView>
        {IF.IF(!!checkIn && checkOut !== -1, () =>
          <View style={style.doneContainer}>
            <Button style={style.doneBtn}
                    onPress={this.doneCheck}>
              <AppText style={[style.doneText, Style.text__capitalize]}>
                {translate('done')}
                <AppText style={style.dontNightText}>
                  {` (${this.nights} ${(`night${this.nights > 1 ? 's' : ''})`)}`}
                </AppText>
              </AppText>
            </Button>
          </View>).RES
        }
      </View>
    );
  }
}


export default Datepicker;
