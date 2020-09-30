import {StyleSheet} from "react-native";
import {BORDER_RADIUS, COLOR_PRIMARY, SHADOW_SM} from "../../../native-base-theme/variables/config";

export default StyleSheet.create({
    text: {
        marginTop: 10,
        fontSize: 10,
        fontWeight: "bold",
        color: COLOR_PRIMARY,
        textAlign: 'center',
    },
    image: {
        height: 45,
        width: 90,
        flex: 1,
        borderRadius: BORDER_RADIUS,
    },
    container: {
        ...SHADOW_SM,
        marginRight: 10,
    },
    wrapper: {
        padding: 5,
        marginRight: 15,
    }
});
