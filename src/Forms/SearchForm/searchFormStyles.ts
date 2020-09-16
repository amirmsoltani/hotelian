import {StyleSheet} from 'react-native';
import {COLOR_WHITE, SHADOW_SM} from "../../../native-base-theme/variables/config";

const searchFromStyles = StyleSheet.create({
    container: {
        backgroundColor: COLOR_WHITE,
        ...SHADOW_SM,
        margin: 5,
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 5,
    },
    btnSection: {
        marginVertical: 25,
    }
});

export default searchFromStyles;
