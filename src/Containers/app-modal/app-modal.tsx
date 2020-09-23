import React, {ReactNode} from 'react';
import {Modal, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import {Style} from '../../Styles'

type propType = {
  visibility?: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const AppModal = (props: propType) => {
  return (
    <Modal
      animationType="slide"
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
          Style.justify__content_center,
          Style.align__items_center,
          Style.p__3,
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
