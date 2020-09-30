import {StyleSheet} from "react-native";
import {BORDER_RADIUS, COLOR_WHITE, SHADOW_LG_XX, SHADOW_SM} from "../../../native-base-theme/variables/config";

export default StyleSheet.create({
    text:{
        fontSize: 12,
        color: COLOR_WHITE,
    },
    textOverlay:{
        backgroundColor: 'rgba(45, 35, 39, 0.8)',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlayContainer:{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        height: 150,
        width: undefined,
        minWidth: 240,
        flex: 1,
        borderRadius: BORDER_RADIUS,
    },
    wrapper:{
        padding: 5,

    }
});
