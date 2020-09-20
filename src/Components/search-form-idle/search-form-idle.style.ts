import {StyleSheet} from "react-native";
import {GRAY_DARK, GRAY_LIGHT} from "../../../native-base-theme/variables/config";

export default StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image:{
        width: 120,
        height: 100,
        marginBottom: 10,
    },
    textContainer:{
        width: 300,
    },
    title:{
        fontWeight: "bold",
        textAlign: "center",
        color: GRAY_DARK,
        marginBottom: 5,
    },
    caption:{
        textAlign: "center",
        fontSize: 14,
        color: GRAY_LIGHT,
    },
});
