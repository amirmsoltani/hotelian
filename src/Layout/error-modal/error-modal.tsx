import React, {FunctionComponent} from 'react';
import {Icon} from "native-base";
import {TouchableOpacity, View} from "react-native";

import {Style} from "../../Styles";
import {AppModal, AppText} from "../../Containers";
import {
  COLOR_BLACK,
  COLOR_DANGER,
  COLOR_PRIMARY,
  COLOR_WHITE,
  GRAY_LIGHT_XX,
  SHADOW_SM_X
} from "../../../native-base-theme/variables/config";
import {IconType, ThemeType} from "../../Typescript/Types";
import {Conditional, If} from "../../Components";
import {translate} from "../../Lib/Languages";
import StringError from "./string-error/string-error";
import ArrayError from "./array-error/array-error";
import ObjectError from "./object-error/object-error";
import {colorMap} from '../../Lib/chen'


type propsType = {
  theme?: ThemeType;
  hasDismiss?: boolean;
  icon?: { name: string, type: IconType };
  title: string;
  caption?: string;
  message?: string | string[] | { [key: string]: string } | undefined;
  action?: { label: string, theme: ThemeType, click: () => void }[];
  onClose: () => void;
}
const ErrorModal: FunctionComponent<{ config: propsType, visibility: boolean }> = (props) => {
  const styles = {
    border: {
      borderBottomWidth: .5,
      borderBottomColor: GRAY_LIGHT_XX
    },
    header_bg: {
      backgroundColor: props.config.theme ? COLOR_PRIMARY : COLOR_WHITE,
    },
    text_color: {
      color: props.config.theme ? COLOR_WHITE : COLOR_BLACK,
    },
  }

  return (
    <AppModal
      visibility={props.visibility}
      position={"top"}
      onClose={props.config.onClose}>
      <View style={[SHADOW_SM_X, Style.bg__mint, Style.my__3,
        {width: '90%', backgroundColor: props.config.theme ? colorMap(props.config.theme)! : COLOR_WHITE}]}>

        {/*header*/}
        <View style={[Style.flex__row, Style.align__items_center, styles.border]}>

          {/*title*/}
          <View style={[Style.flex__row, Style.align__items_center, Style.p__3,
            Style.flex__grow__1, Style.flex__shrink__1]}>
            <Icon style={[Style.f__14, Style.mr__1, styles.text_color]}
                  name={props.config.icon?.name || 'alert-triangle'}
                  type={props.config.icon?.type || 'Feather'}/>
            <AppText firstLetter style={[Style.text__bold, Style.f__14, styles.text_color]}>
              {props.config.title}</AppText>
          </View>

          {/*dismiss*/}
          <Conditional>
            <If condition={props.config.hasDismiss ?? true}>
              <View style={[Style.flex__shrink__0, Style.flex__shrink__0,]}>
                <TouchableOpacity
                  onPress={props.config.onClose}
                  style={[{backgroundColor: 'transparent'}, Style.p__3]}>
                  <Icon style={[Style.f__14, styles.text_color]} name={'close'} type={'AntDesign'}/>
                </TouchableOpacity>
              </View>
            </If>
          </Conditional>

        </View>

        {/*content*/}
        <View style={[Style.px__3, Style.py__5, Style.bg__white,]}>
          <AppText style={[Style.f__14, Style.mb__3]} firstLetter>
            {props.config.caption ?? translate('following-errors-are-reported')}:
          </AppText>
          {messages_generator(props.config.message)}
        </View>

        {/*footer*/}
        <Conditional>
          <If condition={!!(props.config.action?.length)}>
            <View style={{borderTopWidth: .5, borderTopColor: GRAY_LIGHT_XX}}>
              <View style={[Style.bg__white, Style.px__3, Style.py__2, Style.flex__row, Style.flex__wrap]}>
                {props.config.action && props.config.action!.map((act, index) => (
                  <TouchableOpacity key={index + ''} onPress={act.click}
                                    style={[{backgroundColor: colorMap(act.theme) || COLOR_DANGER}, Style.mr__1, Style.mb__1, Style.p__2]}>
                    <AppText style={[Style.text__white]}>{act.label}</AppText>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </If>
        </Conditional>

      </View>
    </AppModal>

  );

  function messages_generator(param: any) {

    //error as string
    if (typeof param === "string") {
      return <StringError error={param}/>
    }

    //error as array of strings
    else if (Array.isArray(param) && param.every(p => typeof p === 'string')) {
      return <ArrayError errors={param as string[]}/>;
    }

    //error as {[key : string] : string}
    else if (typeof param === "object" && Object.values(param).every(p => typeof p === 'string')) {
      return <ObjectError errors={param as { [key: string]: string }}/>;
    }

    //invalid formats
    else {
      return <StringError error={translate('something-went-wrong-that-all-we-know')}/>
    }
  }
};

export default ErrorModal;
