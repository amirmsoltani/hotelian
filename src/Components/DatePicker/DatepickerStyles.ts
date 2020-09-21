import {StyleSheet} from 'react-native';
import {COLOR_PRIMARY, COLOR_WARNING, COLOR_WHITE, SHADOW_LG_XX} from "../../../native-base-theme/variables/config";


const DatepickerStyles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    monthBox: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingBottom: 30,
        justifyContent: 'center',
    },
    day: {
        width: '14%',
        height: 40,
        marginVertical: 4,
    },
    firstDay: {
        backgroundColor: '#0064b9',
    },
    midDay: {
        backgroundColor: '#0089ff',
    },
    endDay: {
        backgroundColor: '#0064b9',
    },
    disabledDay: {
        paddingHorizontal: 5,
    },
    monthName: {
        width: '100%',
        paddingVertical: 7,
        textAlign: 'center',
        fontSize: 16,
    },
    dayText: {
        width: '100%',
        height: '100%',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 14,
    },
    dayLabelContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 7,
    },
    dayLabel:{
        color: COLOR_WHITE,
        width: '14%',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    doneContainer: {
        padding: 10,
        ...SHADOW_LG_XX,
        backgroundColor: COLOR_WHITE,
    },
    doneBtn: {
        width: '100%',
        height: 50,
        backgroundColor: COLOR_PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
    },
    doneText: {
        fontWeight: "bold",
        color: COLOR_WHITE,
        marginHorizontal: 15,
    },
    dontNightText: {
        color: COLOR_WHITE,
        fontSize: 14,
    },

});

export default DatepickerStyles;
