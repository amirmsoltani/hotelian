import {StyleSheet} from 'react-native';
import {
    COLOR_BLACK,
    COLOR_DANGER,
    GRAY_DARK,
    GRAY_LIGHT_XX,
    TEXT_SIZE
} from "../../../../native-base-theme/variables/config";

const formRowStyles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: GRAY_LIGHT_XX,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        marginVertical: 10,
    },
    icon: {
        fontSize: TEXT_SIZE,
        color: GRAY_DARK,
        width: 30,
    },
    filled: {
        color: COLOR_BLACK
    },
    error: {
        color: COLOR_DANGER,
    },
    text: {
        color: GRAY_DARK,
        flex: 1,
        flexWrap: 'wrap',
    },
});

export default formRowStyles;
