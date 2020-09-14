import {StyleSheet} from 'react-native';
import {GRAY_DARK, GRAY_LIGHT} from "../../../../native-base-theme/variables/config";

const formRowStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderBottomWidth: 1,
        color: GRAY_LIGHT,
        display: 'flex',
        flexDirection: 'row',
        borderBottomColor: GRAY_LIGHT,
        backgroundColor: '#AAA'
    },
    icon: {
        color: GRAY_DARK,
        fontSize: 20,
    },
    text: {
        color: GRAY_DARK,
        fontSize: 16,
    },
});

export default formRowStyles;
