import React, {ReactNode} from 'react';
import {Modal, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import {Style} from '../../Styles'

type propType = {
  visibility?: boolean;
  onClose?: () => void;
  children: ReactNode;
  position?: 'left' | 'right' | 'top' | 'bottom' | 'center';
}

const AppModal = (props: propType) => {
  let styles = [];
  const position = props.position || 'center';
  switch (position) {
    case "top":
      styles = [Style.align__items_start,];
      break;
    case "bottom":
      styles = [Style.align__items_end,];
      break;
    case "left":
      styles = [Style.justify__content_start,];
      break;
    case "right":
      styles = [Style.justify__content_end,];
      break;
    default:
      styles = [Style.justify__content_center, Style.align__items_center,]
  }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.visibility || false}
      onRequestClose={props.onClose}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={props.onClose}
        style={[
          Style.w__100,
          Style.h__100,

          {backgroundColor: 'rgba(0,0,0,0.4)'},
        ]}>
        <TouchableWithoutFeedback>
          {props.children}
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );

};

export default AppModal;
