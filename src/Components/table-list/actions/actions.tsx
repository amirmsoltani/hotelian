import React, {useContext, useState} from "react";
import {Button, Icon, Left, List, ListItem, Right, View} from "native-base";
import {StyleSheet, TouchableNativeFeedback} from "react-native";

import {
  BORDER_RADIUS_SM,
  COLOR_PRIMARY,
  MUTED_LIGHT_XX,
  SHADOW_SM_X,
} from "../../../../native-base-theme/variables/config";
import {Style} from "../../../Styles";
import {AppModal, AppText} from "../../../Containers";
import {translate} from "../../../Lib/Languages";
import {Conditional, If} from "../../index";
import TableList, {context_type} from "../table-list";
import Input from "./input/input";

type modal_type = "filter" | "search" | null;
type state_type<T> = {
  /** show / hide filters modal */
  modal_visibility: boolean;

  /** type of presenting modal */
  modal_type: modal_type;
};

function Actions<T extends object>() {
  const [state, setState] = useState<state_type<T>>({
    modal_visibility: false,
    modal_type: null,
  });
  const {
    status,
    filters,
    activated_filter,
    onSelectFilter,
    onRemoveFilter,
    searched_value,
    input_search,
    onSearchTerm,
    onClearTerm,
  } = useContext(TableList.contextType) as context_type<T>;

  const showModal = (type: modal_type) =>
    setState({...state, modal_visibility: true, modal_type: type});
  const hideModal = () => setState({...state, modal_visibility: false});

  //for prevent re-rendering on input change
  let input_value: string | undefined = searched_value;
  const getValue = (v: string | undefined) => (input_value = v);

  return (
    <View
      style={[
        styles.h,
        SHADOW_SM_X,
        Style.bg__white,
        Style.flex__row,
        Style.justify__content_between,
        Style.align__items_center,
      ]}
    >
      {/*filter*/}
      <TouchableNativeFeedback
        onPress={() => showModal("filter")}
        disabled={status !== "ok" || !filters?.length}
      >
        <View
          style={[
            Style.col__6,
            Style.h__100,
            Style.flex__row,
            Style.justify__content_center,
            Style.align__items_center,
          ]}
        >
          <Icon
            type="AntDesign"
            name="filter"
            style={[Style.f__16, Style.text__info]}
          />
          <AppText style={[Style.ml__2, Style.text__primary]}>
            {translate("filter")}
          </AppText>
          <Conditional>
            <If condition={Boolean(activated_filter)}>
              <View style={[Style.bg__danger, styles.bullet]}/>
            </If>
            <If condition={Boolean(filters?.length)}>
              <AppModal
                backdrop
                visibility={
                  state.modal_visibility && state.modal_type === "filter"
                }
                position={"bottom"}
                onClose={() => hideModal()}
              >
                <View
                  style={[Style.w__100, {borderRadius: BORDER_RADIUS_SM}]}
                >
                  <View style={[Style.bg__white, Style.mt__auto]}>
                    <List>
                      <ListItem
                        style={[Style.px__3, Style.mx__0]}
                        key="all"
                        onPress={() => {
                          onRemoveFilter();
                          hideModal();
                        }}
                      >
                        <Left>
                          <AppText>{translate("all")}</AppText>
                        </Left>
                        <Right>
                          <Icon
                            type={"MaterialIcons"}
                            style={[
                              activated_filter === null
                                ? Style.text__info
                                : null,
                            ]}
                            name={`radio-button-${
                              activated_filter === null ? "" : "un"
                            }checked`}
                          />
                        </Right>
                      </ListItem>
                      {filters!.map((item, index) => (
                        <ListItem
                          style={[Style.px__3, Style.mx__0]}
                          key={`${index}`}
                          onPress={() => {
                            if (onSelectFilter) onSelectFilter(item);
                            hideModal();
                          }}
                        >
                          <Left>
                            <AppText>{item.label}</AppText>
                          </Left>
                          <Right>
                            <Icon
                              type={"MaterialIcons"}
                              style={[
                                activated_filter === item
                                  ? Style.text__info
                                  : null,
                              ]}
                              name={`radio-button-${
                                activated_filter === item ? "" : "un"
                              }checked`}
                            />
                          </Right>
                        </ListItem>
                      ))}
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
      <TouchableNativeFeedback
        onPress={() => showModal("search")}
        disabled={status !== "ok" || !input_search}
      >
        <View
          style={[
            Style.col__6,
            Style.h__100,
            Style.flex__row,
            Style.justify__content_center,
            Style.align__items_center,
          ]}
        >
          <Icon
            type="Ionicons"
            name="search"
            style={[Style.f__16, Style.text__info]}
          />
          <AppText style={[Style.ml__2, Style.text__primary]}>
            {translate("search")}
          </AppText>
          <Conditional>
            <If condition={Boolean(searched_value)}>
              <View style={[Style.bg__danger, styles.bullet]}/>
            </If>
            <If condition={Boolean(input_search)}>
              <AppModal
                backdrop
                visibility={
                  state.modal_visibility && state.modal_type === "search"
                }
                position={"bottom"}
                onClose={() => hideModal()}
              >
                <View
                  style={[Style.w__100, {borderRadius: BORDER_RADIUS_SM}]}
                >
                  <View style={[Style.bg__white]}>
                    <View style={[Style.p__3, Style.mb__3]}>
                      <Input
                        change={getValue}
                        value={searched_value}
                        label={input_search?.label_text}
                      />
                    </View>
                    <View style={[Style.p__3]}>
                      <Button
                        onPress={() => {
                          if (input_value) onSearchTerm(input_value);
                          else onClearTerm();
                          hideModal();
                        }}
                        block
                        style={[Style.bg__primary]}
                      >
                        <AppText firstLetter style={[Style.text__white]}>
                          {translate("search")}
                        </AppText>
                      </Button>
                    </View>
                    <Conditional>
                      <If condition={Boolean(searched_value)}>
                        <View style={[Style.px__3, Style.pb__3]}>
                          <Button
                            bordered
                            onPress={() => {
                              onClearTerm();
                              hideModal();
                            }}
                            block
                            style={[Style.bg__white, {borderColor: COLOR_PRIMARY,}]}
                          >
                            <AppText firstLetter style={[Style.text__primary]}>
                              {translate("reset")}
                            </AppText>
                          </Button>
                        </View>
                      </If>
                    </Conditional>
                  </View>
                </View>
              </AppModal>
            </If>
          </Conditional>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    position: "absolute",
    top: 15,
    right: 15,
  },
  divider: {width: 1, height: "70%", backgroundColor: MUTED_LIGHT_XX},
  h: {height: 50},
});

export default Actions;
