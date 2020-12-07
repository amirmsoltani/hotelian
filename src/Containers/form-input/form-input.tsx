import React, {FunctionComponent} from 'react';
import {TextInput, TextInputProps, View} from "react-native";
import {AppText} from "../index";
import {Style} from "../../Styles";
import {
  BORDER_RADIUS_SM,
  COLOR_DANGER,
  COLOR_INFO,
  COLOR_SUCCESS,
  GRAY_DARK_XX,
  GRAY_LIGHT,
  GRAY_LIGHT_XXX
} from "../../../native-base-theme/variables/config";
import {Icon} from "native-base";
import {IconType} from "../../Typescript/Types";

type inputState = 'error' | 'loading' | 'success' | 'focused' | 'disabled' | undefined;
type propsType = {
  label: string;
  message?: string;
  input_state?: inputState;
};

const FormInput: FunctionComponent<{ data: propsType } & TextInputProps> = (props) => {
  const config = {
    label_color: GRAY_DARK_XX,
    icon_type: 'FontAwesome',
    icon_name: 'spinner',
    icon_color: GRAY_DARK_XX,
    border_width: 1,
    border_color: GRAY_LIGHT,
    disable_background: 'transparent',
    editable: true,
  };

  //change styles base on input_state
  if (props.data.input_state) {
    switch (props.data.input_state) {
      case "error":
        config.icon_name = 'times';
        config.icon_type = 'FontAwesome5';
        config.label_color = config.border_color = config.icon_color = COLOR_DANGER;
        break;
      case "loading":
        config.icon_name = 'spinner';
        config.icon_type = 'FontAwesome';
        config.border_color = GRAY_LIGHT;
        break;
      case "success":
        config.icon_name = 'check';
        config.icon_type = 'Entypo';
        config.label_color = config.border_color = config.icon_color = COLOR_SUCCESS;
        break;
      case "focused":
        config.border_width = 2;
        config.label_color = config.border_color = config.icon_color = COLOR_INFO;
        break;
      case "disabled":
        config.editable = false;
        config.border_width = 0;
        config.disable_background = GRAY_LIGHT_XXX;
        break;
      default:
    }
  }

  return (
    <>
      <View style={[Style.py__1, {
        borderRadius: BORDER_RADIUS_SM,
        borderBottomWidth: config.border_width,
        borderBottomColor: config.border_color,
        backgroundColor: config.disable_background,
      }]}>

        {/*label*/}
        <AppText style={[Style.f__14, Style.mb__1, {color: config.label_color}]} firstLetter>
          {props.data.label}</AppText>

        {/*input*/}
        <View style={[Style.flex__row]}>
          <TextInput
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            {...props} editable={config.editable}
            style={[Style.flex__grow__1, Style.flex__shrink__1,
              Style.p__0, Style.m__0, Style.f__14,]}/>

          {/*show icon only in special states [error, success, loading*/}
          {props.data.input_state && ['error', 'loading', 'success'].includes(props.data.input_state) ?
            <Icon style={[Style.flex__grow__0, Style.flex__shrink__0, Style.ml__2,
              Style.f__14, Style.align__self_center, {color: config.icon_color}]}
                  type={(config.icon_type as IconType)} name={config.icon_name}/> : null}
        </View>

      </View>

      {/*message*/}
      {
        props.data.input_state === 'error' &&
        props.data.message &&
        props.data.message.length ?
          <AppText firstLetter style={[Style.f__12, Style.text__light, Style.text__danger]}>
            {props.data.message}
          </AppText> : null}
    </>
  );
};

export default FormInput;
