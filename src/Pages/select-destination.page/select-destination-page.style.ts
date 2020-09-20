import {StyleSheet} from 'react-native';

import {BORDER_RADIUS, GRAY_LIGHT_XXX} from "../../../native-base-theme/variables/config";


const selectDestinationPageStyle = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    input: {
        width: '100%',
        height: 55,
        fontSize: 18,
        paddingHorizontal: 10,
        backgroundColor: GRAY_LIGHT_XXX,
        borderRadius: BORDER_RADIUS,
    },

});

export default selectDestinationPageStyle;
