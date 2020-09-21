import {StyleSheet} from "react-native";
import {BORDER_RADIUS, COLOR_WHITE, SHADOW_SM} from "../../../native-base-theme/variables/config";

export default StyleSheet.create({
    text:{
        fontSize: 16,
        color: COLOR_WHITE,
    },
    textOverlay:{
        backgroundColor: 'rgba(45, 35, 39, 0.8)',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
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
        height: 180,
        width: undefined,
        minWidth: 300,
        flex: 1,
        borderRadius: BORDER_RADIUS,
    },
    container:{
        ...SHADOW_SM,
        marginRight: 10,
    },
    wrapper:{
        padding: 5,

    }
});
