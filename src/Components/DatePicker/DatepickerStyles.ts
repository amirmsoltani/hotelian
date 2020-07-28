import {StyleSheet} from 'react-native';


const DatepickerStyles = StyleSheet.create({
  container:
    {
      width: '100%',
      flex: 1,
      paddingTop: 15,
    },
  monthBox: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    // paddingLeft: 10,

  },
  day: {
    width: '14%',
    // aspectRatio: 1,
    height: 30,
    marginVertical: 2.5,
    // backgroundColor: `rgba(${0xd2},${0xd2},${0xd2},0.2)`,
  },
  firstDay: {
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
    backgroundColor: 'red',

  },
  midDay: {
    backgroundColor: `rgba(${0xff},0,0,.5)`,
  },
  endDay: {
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: 'red',
  },
  disabledDay: {
    backgroundColor: 'blue',
  },
  dayText: {
    width: '100%',
    height: '100%',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  monthName: {
    width: '100%',
    paddingVertical: 7,
    textAlign: 'center',
  },
});

export default DatepickerStyles;
