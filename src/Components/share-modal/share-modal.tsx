import React from 'react';
import {Text, View} from "react-native";
import {Icon, Left, ListItem, Separator} from "native-base";

import {Style} from "Styles";

const ShareModal = () => {
  return (
    <View style={[Style.bg__white, Style.w__100,]}>
      <Separator bordered>
        <Text>Social Notworks</Text>
      </Separator>
      <ListItem>
        <Left>
          <Icon name='logo-facebook' type='Ionicons' style={[{color: '#3b5998'}, Style.mr__2]}/>
          <Text>Facebook</Text>
        </Left>
      </ListItem>
      <ListItem>
        <Left>
          <Icon name='logo-twitter' type='Ionicons' style={[{color: '#1da1f2'}, Style.mr__2]}/>
          <Text>Twitter</Text>
        </Left>
      </ListItem>
      <ListItem>
        <Left>
          <Icon name='telegram' type='FontAwesome' style={[{color: '#0088cc'}, Style.mr__2]}/>
          <Text>Telegram</Text>
        </Left>
      </ListItem>
      <ListItem>
        <Left>
          <Icon name='logo-whatsapp' type='Ionicons' style={[{color: '#25d366'}, Style.mr__2]}/>
          <Text>WhatsApp</Text>
        </Left>
      </ListItem>
      <Separator bordered>
        <Text>Others</Text>
      </Separator>
      <ListItem>
        <Left>
          <Icon name='email' type='Entypo' style={[Style.text__important, Style.mr__2]}/>
          <Text>Email</Text>
        </Left>
      </ListItem>
      <ListItem>
        <Left>
          <Icon name='clipboard' type='Ionicons' style={[Style.mr__2]}/>
          <Text>Copy to clipboard</Text>
        </Left>
      </ListItem>
      <ListItem last>
        <Left>
          <Icon name='sms' type='FontAwesome5' style={[Style.mr__2]}/>
          <Text>SMS</Text>
        </Left>
      </ListItem>
    </View>
  );
};

export default ShareModal;
