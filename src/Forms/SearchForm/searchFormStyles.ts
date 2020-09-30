import {StyleSheet} from 'react-native';
import {COLOR_WHITE, SHADOW_SM} from "../../../native-base-theme/variables/config";

const searchFromStyles = StyleSheet.create({
    container: {
        backgroundColor: COLOR_WHITE,
        ...SHADOW_SM,
        margin: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    btnSection: {
        marginVertical: 15,
    }
});

export default searchFromStyles;
