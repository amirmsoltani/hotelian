import React, {useContext, useState} from 'react';
import {Icon, Left, List, ListItem, Right, View} from "native-base";
import {StyleSheet, TouchableNativeFeedback} from "react-native";

import {BORDER_RADIUS_SM, MUTED_LIGHT_XX, SHADOW_SM_X} from "../../../../native-base-theme/variables/config";
import {Style} from "../../../Styles";
import {AppModal, AppText} from "../../../Containers";
import {translate} from "../../../Lib/Languages";
import {Conditional, If} from "../../index";
import {context_type, TableContext} from "../table-list";

type state_type<T> = {
  /** show / hide filters modal */
  modal_visibility: boolean;
}

function Actions<T extends object>() {
  const [state, setState] = useState<state_type<T>>({modal_visibility: false,});
  const {status, filters, activated_filter} = useContext<context_type<T>>(TableContext);

  return (
    <View style={[{height: 50}, SHADOW_SM_X, Style.bg__white, Style.flex__row,
      Style.justify__content_between, Style.align__items_center]}>

      {/*filter*/}
      <TouchableNativeFeedback
        onPress={() => setState({...state, modal_visibility: true})}
        disabled={status !== 'ok' || !filters?.length}>
        <View
          style={[Style.col__6, Style.h__100, Style.flex__row, Style.justify__content_center, Style.align__items_center,]}>
          <Icon type="AntDesign" name="filter" style={[Style.f__16, Style.text__info]}/>
          <AppText style={[Style.ml__2, Style.text__primary]}>{translate('filter')}</AppText>
          <Conditional>
            <If condition={Boolean(activated_filter)}>
              <View style={[Style.bg__danger, styles.bullet]}/>
            </If>
            <If condition={Boolean(filters?.length)}>
              <AppModal
                backdrop visibility={state.modal_visibility}
                onClose={() => setState({...state, modal_visibility: false})}>
                <View style={[Style.w__100, Style.h__100, {borderRadius: BORDER_RADIUS_SM},]}>
                  <View style={[Style.bg__white, Style.mt__auto]}>
                    <List>
                      {filters!.map((item, index) =>
                        <ListItem style={[Style.px__3, Style.mx__0]} key={`${index}`}
                                  onPress={() => {
                                    //TODO update activated_filter
                                    setState({...state, modal_visibility: false,});
                                  }}>
                          <Left><AppText>{item.label}</AppText></Left>
                          <Right>
                            <Icon type={'MaterialIcons'}
                                  style={[activated_filter === item ? Style.text__info : null]}
                                  name={`radio-button-${activated_filter === item ? '' : 'un'}checked`}/>
                          </Right>
                        </ListItem>)}
                    </List>
                  </View>
                </View>
              </AppModal>
            </If>
          </Conditional>
        </View>
      </TouchableNativeFeedback>

      {/*divider*/}
      <View style={[styles.divider]}/>

      {/*search*/}
      <TouchableNativeFeedback disabled={status !== 'ok'}>
        <View style={[Style.col__6, Style.h__100, Style.flex__row,
          Style.justify__content_center, Style.align__items_center,]}>
          <Icon type="Ionicons" name="search" style={[Style.f__16, Style.text__info]}/>
          <AppText style={[Style.ml__2, Style.text__primary]}>{translate('search')}</AppText>
          <Conditional>
            <If condition={true}>
              <View style={[Style.bg__danger, styles.bullet]}/>
            </If>
          </Conditional>
        </View>
      </TouchableNativeFeedback>

    </View>
  );

}

const styles = StyleSheet.create({
  bullet: {width: 6, height: 6, borderRadius: 3, position: 'absolute', top: 15, right: 15,},
  divider: {width: 1, height: '70%', backgroundColor: MUTED_LIGHT_XX},
});

export default Actions;
