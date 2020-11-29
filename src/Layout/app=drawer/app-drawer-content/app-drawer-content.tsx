import React, {FunctionComponent} from 'react';
import {DrawerContentComponentProps} from "@react-navigation/drawer";
import {Content, ListItem, Separator, Text} from "native-base";
import {Alert, TouchableNativeFeedback} from "react-native";

const AppDrawerContent: FunctionComponent<DrawerContentComponentProps> = (props) => {
  return (
    <Content>
      <Separator bordered>
        <Text>SUPPORT</Text>
      </Separator>
      <ListItem onPress={() => Alert.alert('pressed')}>
        <TouchableNativeFeedback>
          <Text>Caroline Aaron</Text>
        </TouchableNativeFeedback>
      </ListItem>
      <ListItem last>
        <Text>Lee Allen</Text>
      </ListItem>
      <Separator bordered>
        <Text>MIDFIELD</Text>
      </Separator>
      <ListItem>
        <Text>Caroline Aaron</Text>
      </ListItem>
      <ListItem last>
        <Text>Lee Allen</Text>
      </ListItem>
      <Separator bordered>
        <Text>MIDFIELD</Text>
      </Separator>
      <ListItem>
        <Text>Caroline Aaron</Text>
      </ListItem>
      <ListItem last>
        <Text>Lee Allen</Text>
      </ListItem>
      <Separator bordered>
        <Text>MIDFIELD</Text>
      </Separator>
      <ListItem>
        <Text>Caroline Aaron</Text>
      </ListItem>
      <ListItem last>
        <Text>Lee Allen</Text>
      </ListItem>
      <Separator bordered>
        <Text>MIDFIELD</Text>
      </Separator>
      <ListItem>
        <Text>Caroline Aaron</Text>
      </ListItem>
      <ListItem last>
        <Text>Lee Allen</Text>
      </ListItem>
      <Separator bordered>
        <Text>MIDFIELD</Text>
      </Separator>
      <ListItem>
        <Text>Caroline Aaron</Text>
      </ListItem>
      <ListItem last>
        <Text>Lee Allen</Text>
      </ListItem>
    </Content>
  );
};

export default AppDrawerContent;
