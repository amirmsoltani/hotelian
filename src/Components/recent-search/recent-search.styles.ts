import {StyleSheet} from "react-native";
import {
    BLACK_LIGHT,
    BORDER_RADIUS,
    COLOR_PRIMARY,
    MUTED_LIGHT_XXX,
    SHADOW_SM_X
} from "../../../native-base-theme/variables/config";

const recentSearchStyles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: MUTED_LIGHT_XXX,
        borderRadius: BORDER_RADIUS,
        marginRight: 15,
        ...SHADOW_SM_X,
        margin: 5,
    },
    title: {
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 5,
        textAlign: "center",
    },
    checking: {
        fontSize: 13,
        marginBottom: 5,
        color: BLACK_LIGHT,
        textAlign: "center",
    },
    passenger: {
        color: COLOR_PRIMARY,
        marginRight: 20,
        fontSize: 13,
        textAlign: "center",
    },
    icon: {
        fontSize: 16,
        color: COLOR_PRIMARY,
        marginRight: 5,
    }
});

export default recentSearchStyles;
