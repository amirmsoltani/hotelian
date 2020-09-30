import {StyleSheet} from 'react-native';
import {
  COLOR_BLACK,
  COLOR_DANGER,
  MUTED_DARK_X,
  MUTED_LIGHT_XX,
  TEXT_SIZE,
} from '../../../../native-base-theme/variables/config';
import {Style} from "../../../Styles";

const formRowStyles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: MUTED_LIGHT_XX,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginVertical: 10,
  },
  icon: {
    fontSize: TEXT_SIZE,
    color: MUTED_DARK_X,
    width: 30,
    textAlign: 'left',
  },
  filled: {
    color: COLOR_BLACK,
    ...Style.text__normal,
  },
  error: {
    color: COLOR_DANGER,
  },
  text: {
    color: MUTED_DARK_X,
    flex: 1,
    flexWrap: 'wrap',
    ...Style.text__light,
  },
});

export default formRowStyles;
