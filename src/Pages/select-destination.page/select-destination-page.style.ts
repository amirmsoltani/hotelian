import {Dimensions, StyleSheet} from 'react-native';

import {
    BORDER_RADIUS,
    COLOR_BLACK,
    COLOR_WARNING,
    COLOR_WHITE,
    GRAY_LIGHT_XXX,
    MUTED_LIGHT_XXX
} from "../../../native-base-theme/variables/config";


const selectDestinationPageStyle = StyleSheet.create({
    container: {backgroundColor: MUTED_LIGHT_XXX,},
    contentContainer: {backgroundColor: COLOR_WHITE, paddingHorizontal: 10,},
    inputContainer: {padding: 10, backgroundColor: COLOR_WHITE,},
    input: {
        width: '100%',
        height: 55,
        fontSize: 18,
        paddingHorizontal: 10,
        borderRadius: BORDER_RADIUS,
        backgroundColor: GRAY_LIGHT_XXX,
    },
    focusedInput: {borderWidth: 1, borderColor: COLOR_WARNING,},
    blurredInput: {},
    listItem: {marginLeft: 0, paddingTop: 0, paddingBottom: 0},
    touchableOp: {flex: 1, paddingVertical: 10, marginVertical: 5},
    icon: {
        color: COLOR_BLACK,
        fontSize: 30,
        marginRight: 15,
        marginLeft: 0,
        alignSelf: 'center',
    },
    appText: {fontWeight: 'bold', letterSpacing: 1},
    idleContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('screen').height / 2,
    }

});

export default selectDestinationPageStyle;
