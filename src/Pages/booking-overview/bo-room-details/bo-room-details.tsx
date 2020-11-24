import {TouchableNativeFeedback, View} from "react-native";
import React, {FunctionComponent} from 'react';
import {AppText} from "../../../Containers";
import {Style} from "../../../Styles";
import {Badge, Conditional, If} from "../../../Components";
import {Icon} from "native-base";
import {translate} from "../../../Lib/Languages";

type propsType = {
  room_names: string[];
  cancellation_policies?: string[];
  alerts?: string;
  restrictions?: string;
  boardType?: string
  show_more_policy?: () => void;
};
const BoRoomDetails: FunctionComponent<{ data: propsType }> = (props) => {
  return (
    <View style={[Style.p__3, Style.bg__white]}>

      {/*room name*/}
      <View style={[Style.mb__1, Style.flex__row, Style.flex__wrap]}>
        {props.data.room_names.map((name, index) => (
          <View key={index} style={[Style.mb__1,]}>
            <AppText firstLetter style={[Style.text__bold, Style.f__14]}>
              {name}{index < props.data.room_names.length - 1 ? ', ' : ''}</AppText>
          </View>
        ))}
      </View>

      {/*board type*/}
      <Conditional>
        <If condition={!!props.data.boardType}>
          <View style={[Style.flex__row, Style.align__items_center, Style.mb__3]}>
            <Icon style={[Style.f__14, Style.mr__1]}
                  name={'badge'} type={'SimpleLineIcons'}/>
            <Badge text={props.data.boardType!} size={"sm"}/>
          </View>
        </If>
      </Conditional>

      {/*cancellation policies*/}
      <Conditional>
        <If condition={!!(props.data.cancellation_policies && props.data.cancellation_policies.length)}>
          <View>
            {props.data.cancellation_policies!.map((cp,index) => (
              <View key={index} style={[Style.flex__row, Style.align__items_center, Style.mb__3]}>
                <Icon style={[Style.f__12, Style.mr__1]}
                      name={'alert-triangle'} type={'Feather'}/>
                <AppText firstLetter
                         style={[Style.f__12, Style.text__light,]}>{cp}</AppText>
              </View>
            ))}
          </View>
        </If>
      </Conditional>

      {/*show more*/}
      <Conditional>
        <If condition={!!(props.data.alerts || props.data.restrictions)}>
          <TouchableNativeFeedback onPress={props.data.show_more_policy}>
            <AppText style={[Style.text__capitalize, Style.f__12, Style.text__info, Style.py__1]}>
              {translate('more-policies')}</AppText>
          </TouchableNativeFeedback>
        </If>
      </Conditional>
    </View>
  );
};

export default BoRoomDetails;
