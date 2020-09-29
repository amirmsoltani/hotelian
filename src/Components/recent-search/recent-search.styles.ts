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
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: MUTED_LIGHT_XXX,
    borderRadius: BORDER_RADIUS,
    marginRight: 8,
    ...SHADOW_SM_X,
    marginVertical: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 5,
    textAlign: "center",
  },
  checking: {
    fontSize: 11,
    marginBottom: 5,
    color: BLACK_LIGHT,
    textAlign: "center",
  },
  passenger: {
    color: COLOR_PRIMARY,
    marginRight: 12,
    fontSize: 11,
    textAlign: "center",
  },
  icon: {
    fontSize: 16,
    color: COLOR_PRIMARY,
    marginRight: 3,
  }
});

export default recentSearchStyles;
