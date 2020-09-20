import {Dimensions, StyleSheet} from 'react-native';
import {COLOR_PRIMARY, SHADOW_SM_X} from "../../../native-base-theme/variables/config";

const searchPageStyles = StyleSheet.create({
    container: {
        padding: 0,
        margin: 0,
    },

    wrapper: {
        paddingHorizontal: 15,
    },

    bg_rect: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: 150,
        backgroundColor: COLOR_PRIMARY,
    },

    header: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom:15,
    },
    bg_triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: Dimensions.get('window').width,
        borderTopWidth: 150,
        borderLeftColor: 'transparent',
        borderTopColor: COLOR_PRIMARY,
        position: "absolute",
        top: 150,
    },
    recent_search: {},

});

export default searchPageStyles;