import {StyleSheet} from 'react-native';
import {GRAY_DARK, GRAY_LIGHT, GRAY_LIGHT_X} from "../../../../native-base-theme/variables/config";

const formRowStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderBottomWidth: 1,
        color: GRAY_LIGHT_X,
        display: "flex",
        flexDirection: 'row',
        borderBottomColor: GRAY_LIGHT_X,
    },
    icon: {
        color: GRAY_DARK,
        fontSize: 18,
    },
    text: {
        color: GRAY_DARK,
        fontSize: 18,
    },
});

export default formRowStyles;
