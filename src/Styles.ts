import {
  COLOR_BLACK,
  COLOR_DANGER,
  COLOR_GRAY,
  COLOR_IMPORTANT,
  COLOR_INFO,
  COLOR_MUTED,
  COLOR_PRIMARY,
  COLOR_SUCCESS,
  COLOR_WARNING,
  COLOR_WHITE,
  GRAY_DARK,
  GRAY_DARK_X,
  GRAY_DARK_XX,
  GRAY_DARK_XXX,
  GRAY_LIGHT,
  GRAY_LIGHT_X,
  GRAY_LIGHT_XX,
  GRAY_LIGHT_XXX,
  MUTED_DARK,
  MUTED_DARK_X,
  MUTED_LIGHT,
  MUTED_LIGHT_X,
  MUTED_LIGHT_XX,
  MUTED_LIGHT_XXX
} from "../native-base-theme/variables/config";
import {StyleSheet} from "react-native";


const paddingCoefficient = 5;
const marginCoefficient = 5;

export const Style = StyleSheet.create({

//=======================================
// Text
//=======================================
  text__white: {color: COLOR_WHITE,},
  text__primary: {color: COLOR_PRIMARY,},
  text__important: {color: COLOR_IMPORTANT,},
  text__success: {color: COLOR_SUCCESS,},
  text__danger: {color: COLOR_DANGER,},
  text__warning: {color: COLOR_WARNING,},
  text__black: {color: COLOR_BLACK,},
  text__info: {color: COLOR_INFO,},
  text__center: {textAlign: "center",},
//=======================================
  text__gray: {color: COLOR_GRAY,},
  text__gray_l: {color: GRAY_LIGHT,},
  text__gray_l_X: {color: GRAY_LIGHT_X,},
  text__gray_l_XX: {color: GRAY_LIGHT_XX,},
  text__gray_l_XXX: {color: GRAY_LIGHT_XXX,},
  text__gray_d: {color: GRAY_DARK,},
  text__gray_d_X: {color: GRAY_DARK_X,},
  text__gray_d_XX: {color: GRAY_DARK_XX,},
  text__gray_d_XXX: {color: GRAY_DARK_XXX,},
//=======================================
  //=======================================
  text__muted: {color: COLOR_MUTED,},
  text__muted_l: {color: MUTED_LIGHT,},
  text__muted_l_X: {color: MUTED_LIGHT_X,},
  text__muted_l_XX: {color: MUTED_LIGHT_XX,},
  text__muted_l_XXX: {color: MUTED_LIGHT_XXX,},
  text__muted_d: {color: MUTED_DARK,},
  text__muted_d_X: {color: MUTED_DARK_X,},
//=======================================
  text__left: {textAlign: "left",},
  text__right: {textAlign: "right",},
//=======================================
  text__lowerCase: {textTransform: 'lowercase'},
  text__upperCase: {textTransform: 'uppercase'},
  text__capitalize: {textTransform: 'capitalize'},
//=======================================
  text__wrap: {flex: 1, flexWrap: 'wrap'},
  text__underline: {flex: 1, flexWrap: 'wrap'},


//=======================================
// Background
//=======================================
  bg__white: {backgroundColor: COLOR_WHITE,},
  bg__primary: {backgroundColor: COLOR_PRIMARY,},
  bg__important: {backgroundColor: COLOR_IMPORTANT,},
  bg__success: {backgroundColor: COLOR_SUCCESS,},
  bg__danger: {backgroundColor: COLOR_DANGER,},
  bg__warning: {backgroundColor: COLOR_WARNING,},
  bg__info: {backgroundColor: COLOR_INFO,},


//=======================================
// Font
//=======================================
  text__bold: {fontWeight: 'bold',},
  f__10: {fontSize: 10,},
  f__11: {fontSize: 11,},
  f__12: {fontSize: 12,},
  f__13: {fontSize: 13,},
  f__14: {fontSize: 14,},
  f__15: {fontSize: 15,},
  f__16: {fontSize: 16,},
  f__17: {fontSize: 17,},
  f__18: {fontSize: 18,},
  f__19: {fontSize: 19,},
  f__20: {fontSize: 20,},
  f__22: {fontSize: 22,},
  f__24: {fontSize: 24,},
  f__30: {fontSize: 30,},
  f__36: {fontSize: 36,},


//=======================================
// Padding
//=======================================

  p__0: {paddingRight: 0, paddingLeft: 0, paddingTop: 0, paddingBottom: 0,},
  p__1: {padding: paddingCoefficient,},
  p__2: {padding: paddingCoefficient * 2,},
  p__3: {padding: paddingCoefficient * 3,},
  p__4: {padding: paddingCoefficient * 4,},
  p__5: {padding: paddingCoefficient * 5,},
//=======================================
  px__0: {paddingRight: 0, paddingLeft: 0,},
  px__1: {paddingHorizontal: paddingCoefficient,},
  px__2: {paddingHorizontal: paddingCoefficient * 2,},
  px__3: {paddingHorizontal: paddingCoefficient * 3,},
  px__4: {paddingHorizontal: paddingCoefficient * 4,},
  px__5: {paddingHorizontal: paddingCoefficient * 5,},
//=======================================
  py__0: {paddingTop: 0, paddingBottom: 0,},
  py__1: {paddingVertical: paddingCoefficient,},
  py__2: {paddingVertical: paddingCoefficient * 2,},
  py__3: {paddingVertical: paddingCoefficient * 3,},
  py__4: {paddingVertical: paddingCoefficient * 4,},
  py__5: {paddingVertical: paddingCoefficient * 5,},
//=======================================
  pr__0: {paddingRight: 0,},
  pr__1: {paddingRight: paddingCoefficient,},
  pr__2: {paddingRight: paddingCoefficient * 2,},
  pr__3: {paddingRight: paddingCoefficient * 3,},
  pr__4: {paddingRight: paddingCoefficient * 4,},
  pr__5: {paddingRight: paddingCoefficient * 5,},
//=======================================
  pl__0: {paddingLeft: 0,},
  pl__1: {paddingLeft: paddingCoefficient,},
  pl__2: {paddingLeft: paddingCoefficient * 2,},
  pl__3: {paddingLeft: paddingCoefficient * 3,},
  pl__4: {paddingLeft: paddingCoefficient * 4,},
  pl__5: {paddingLeft: paddingCoefficient * 5,},
//=======================================
  pt__0: {paddingTop: 0,},
  pt__1: {paddingTop: paddingCoefficient,},
  pt__2: {paddingTop: paddingCoefficient * 2,},
  pt__3: {paddingTop: paddingCoefficient * 3,},
  pt__4: {paddingTop: paddingCoefficient * 4,},
  pt__5: {paddingTop: paddingCoefficient * 5,},
//=======================================
  pb__0: {paddingBottom: 0,},
  pb__1: {paddingBottom: paddingCoefficient,},
  pb__2: {paddingBottom: paddingCoefficient * 2,},
  pb__3: {paddingBottom: paddingCoefficient * 3,},
  pb__4: {paddingBottom: paddingCoefficient * 4,},
  pb__5: {paddingBottom: paddingCoefficient * 5,},


//=======================================
// Margin
//=======================================
  m__0: {marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 0,},
  m__auto: {marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto',},
  m__1: {margin: marginCoefficient,},
  m__2: {margin: marginCoefficient * 2,},
  m__3: {margin: marginCoefficient * 3,},
  m__4: {margin: marginCoefficient * 4,},
  m__5: {margin: marginCoefficient * 5,},
//=======================================
  mx__auto: {marginLeft: 'auto', marginRight: 'auto',},
  mx__0: {marginLeft: 0, marginRight: 0,},
  mx__1: {marginHorizontal: marginCoefficient,},
  mx__2: {marginHorizontal: marginCoefficient * 2,},
  mx__3: {marginHorizontal: marginCoefficient * 3,},
  mx__4: {marginHorizontal: marginCoefficient * 4,},
  mx__5: {marginHorizontal: marginCoefficient * 5,},
//=======================================
  my__auto: {marginBottom: 'auto', marginTop: 'auto',},
  my__0: {marginTop: 0, marginBottom: 0,},
  my__1: {marginVertical: marginCoefficient,},
  my__2: {marginVertical: marginCoefficient * 2,},
  my__3: {marginVertical: marginCoefficient * 3,},
  my__4: {marginVertical: marginCoefficient * 4,},
  my__5: {marginVertical: marginCoefficient * 5,},
//=======================================
  mr__auto: {marginRight: 'auto',},
  mr__0: {marginRight: 0,},
  mr__1: {marginRight: marginCoefficient,},
  mr__2: {marginRight: marginCoefficient * 2,},
  mr__3: {marginRight: marginCoefficient * 3,},
  mr__4: {marginRight: marginCoefficient * 4,},
  mr__5: {marginRight: marginCoefficient * 5,},
//=======================================
  ml__auto: {marginRight: 'auto',},
  ml__0: {marginLeft: 0,},
  ml__1: {marginLeft: marginCoefficient,},
  ml__2: {marginLeft: marginCoefficient * 2,},
  ml__3: {marginLeft: marginCoefficient * 3,},
  ml__4: {marginLeft: marginCoefficient * 4,},
  ml__5: {marginLeft: marginCoefficient * 5,},
//=======================================
  mt__auto: {marginTop: 'auto',},
  mt__0: {marginTop: 0,},
  mt__1: {marginTop: paddingCoefficient,},
  mt__2: {marginTop: paddingCoefficient * 2,},
  mt__3: {marginTop: paddingCoefficient * 3,},
  mt__4: {marginTop: paddingCoefficient * 4,},
  mt__5: {marginTop: paddingCoefficient * 5,},
//=======================================
  mb__auto: {marginBottom: 'auto',},
  mb__0: {marginBottom: 0,},
  mb__1: {marginBottom: paddingCoefficient,},
  mb__2: {marginBottom: paddingCoefficient * 2,},
  mb__3: {marginBottom: paddingCoefficient * 3,},
  mb__4: {marginBottom: paddingCoefficient * 4,},
  mb__5: {marginBottom: paddingCoefficient * 5,},


//=======================================
// Flex
//=======================================
  flex__row: {flexDirection: 'row',},
  flex__column: {flexDirection: 'column',},
  flex__row__reverse: {flexDirection: 'row-reverse',},
  flex__column__reverse: {flexDirection: 'column-reverse',},
  flex__wrap: {flexWrap: 'wrap',},
  flex__no__wrap: {flexWrap: 'nowrap',},
  flex__grow__1: {flexGrow: 1,},
  flex__grow__0: {flexGrow: 0,},
  flex__shrink__1: {flexShrink: 1,},
  flex__shrink__0: {flexShrink: 0,},
//=======================================
  justify__content_center: {justifyContent: 'center',},
  justify__content_start: {justifyContent: 'flex-start',},
  justify__content_end: {justifyContent: 'flex-end',},
  justify__content_around: {justifyContent: 'space-around',},
  justify__content_between: {justifyContent: 'space-between',},
//=======================================
  align__items_center: {alignItems: 'center',},
  align__items_start: {alignItems: 'flex-start',},
  align__items_end: {alignItems: 'flex-end',},
  align__items_stretch: {alignItems: 'stretch',},
//=======================================
  align__self_center: {alignSelf: 'center',},
  align__self_start: {alignSelf: 'flex-start',},
  align__self_end: {alignSelf: 'flex-end',},
  align__self_stretch: {alignSelf: 'stretch',},


//=======================================
// Layout
//=======================================
  w__100: {width: '100%',},
  w__75: {width: '75%',},
  w__50: {width: '50%',},
  w__25: {width: '25%',},
  h__100: {height: '100%',},


//=======================================
// Grid
//=======================================
  col__1: {width: '8.33%'},
  col__2: {width: '16.66%'},
  col__3: {width: '25%'},
  col__4: {width: '33.33%'},
  col__5: {width: '41.66%'},
  col__6: {width: '50%'},
  col__7: {width: '58.33%'},
  col__8: {width: '66.66%'},
  col__9: {width: '75%'},
  col__10: {width: '83.33%'},
  col__11: {width: '91.66%'},
  col__12: {width: '100%'},

})
