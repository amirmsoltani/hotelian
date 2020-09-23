import React from 'react';
import {Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Title} from "native-base";

import {Style} from "../../Styles";
import {AppText} from "../../Containers";
import {COLOR_GRAY, GRAY_LIGHT_X} from "../../../native-base-theme/variables/config";

type propType = {
  onClose: () => void;
};

const CurrencyModal = (props: propType) => {
  return (
    <Container style={[
      Style.w__100,
      Style.bg__white,
    ]}>
      <Header style={[Style.bg__primary]}>
        <Body>
          <Title>Currency</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={props.onClose}>
            <Icon
              type={'AntDesign'}
              name='close'
              style={[
                {fontSize: 30},
                Style.text__white,
              ]}/>
          </Button>
        </Right>
      </Header>
      <Content>
        <List>
          <ListItem
            style={[Style.px__3, Style.mx__0]}>
            <Left><AppText>Iranian Rial <AppText
              style={{color: COLOR_GRAY}}>(IRR)</AppText></AppText></Left>
          </ListItem>
          <ListItem
            style={[Style.px__3, Style.mx__0]}>
            <Left><AppText>US Dollar <AppText
              style={{color: COLOR_GRAY}}>(USD)</AppText></AppText></Left>
          </ListItem>
          <ListItem
            style={[Style.px__3, Style.mx__0]}>
            <Left><AppText>UAE Dirham <AppText
              style={{color: COLOR_GRAY}}>(AED)</AppText></AppText></Left>
          </ListItem>
          <ListItem
            style={[Style.px__3, Style.mx__0]}>
            <Left><AppText>Euro <AppText style={{color: COLOR_GRAY}}>(€)</AppText></AppText></Left>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default CurrencyModal;
