import {StyleSheet} from 'react-native';
import {
  COLOR_BLACK,
  COLOR_DANGER, COLOR_WARNING,
  MUTED_DARK,
  MUTED_LIGHT_XX,
  TEXT_SIZE,
} from '../../../../native-base-theme/variables/config';

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
    color: MUTED_DARK,
    width: 30,
    textAlign: 'left',
  },
  filled: {
    color: COLOR_BLACK,
  },
  error: {
    color: COLOR_DANGER,
  },
  text: {
    color: MUTED_DARK,
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default formRowStyles;
