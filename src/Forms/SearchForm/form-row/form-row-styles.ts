import {StyleSheet} from 'react-native';
import {COLOR_BLACK, COLOR_DANGER, GRAY_LIGHT, TEXT_SIZE} from "../../../../native-base-theme/variables/config";

const formRowStyles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: GRAY_LIGHT,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        margin: 10,
    },
    icon: {
        fontSize: TEXT_SIZE,
        color: GRAY_LIGHT,
        width: 30,
    },
    filled: {
        color:COLOR_BLACK
    },
    error: {
        color:COLOR_DANGER,
    },
    text: {
        color: GRAY_LIGHT,
        flex: 1,
        flexWrap: 'wrap',
    },
});

export default formRowStyles;
