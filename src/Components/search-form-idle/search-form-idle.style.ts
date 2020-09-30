import {StyleSheet} from "react-native";
import {COLOR_MUTED, MUTED_DARK_X} from "../../../native-base-theme/variables/config";

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 100,
    marginBottom: 10,
  },
  textContainer: {
    width: 300,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    color: MUTED_DARK_X,
    marginBottom: 5,
  },
  caption: {
    textAlign: "center",
    fontSize: 13,
    lineHeight: 16,
    color: COLOR_MUTED,
  },
});
