import React from 'react';
import {Alert, View} from "react-native";
import {ErrorModal} from "../../Layout";

const TestPage = () => {
  return (
    <View>
      <ErrorModal config={{
        title: 'title goes here !!!',
        // message: ['error as Array', 'error as Array', 'error as Array', 'error as Array'],
        // message: ['error as Array'],
        // message: 'single string error',
        // message: {'name and last name': 'error message 1', 'vertical alignment': 'error message 2', key3: 'error message 3', key4: 'error message 4',},
        message: {'name and last name': 'error message 1'},
        action: [
          {label: 'btn1', theme: 'success', click: () => Alert.alert('btn1')},
          {label: 'btn2', theme: 'primary', click: () => Alert.alert('btn2')},
          {label: 'btn3', theme: 'important', click: () => Alert.alert('btn3')},
          {label: 'btn4', theme: 'black', click: () => Alert.alert('btn4')},
        ]
      }}/>
    </View>
  );
};

export default TestPage;
