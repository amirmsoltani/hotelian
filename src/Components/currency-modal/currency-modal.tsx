import React from 'react';
import {Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right} from "native-base";

import {Style} from "../../Styles";
import {AppText} from "../../Containers";
import {BORDER_RADIUS_SM, COLOR_GRAY} from "../../../native-base-theme/variables/config";
import {translate} from "../../Lib/Languages";

type propType = {
  onClose: () => void;
};

const CurrencyModal = (props: propType) => {
  return (
    <Container style={[
      Style.w__100,
      Style.bg__white,
      {borderRadius: BORDER_RADIUS_SM},
    ]}>
      <Header style={[Style.bg__white]}>
        <Body>
          <AppText style={[Style.text__bold]}>{translate('change-currency')}</AppText>
        </Body>
        <Right>
          <Button transparent onPress={props.onClose}>
            <Icon type={'AntDesign'} name='close' style={[Style.f__18, Style.text__black,]}/>
          </Button>
        </Right>
      </Header>
      <Content>
        <List>
          <ListItem
            style={[Style.px__3, Style.mx__0]}>
            <Left><AppText>Iranian Rial <AppText
              style={[Style.text__gray]}>(IRR)</AppText></AppText></Left>
            <Right>
              <Icon type={'MaterialIcons'} name="radio-button-unchecked"/>
            </Right>
          </ListItem>
          <ListItem
            style={[Style.px__3, Style.mx__0]}>
            <Left><AppText>US Dollar <AppText
              style={[Style.text__gray]}>(USD)</AppText></AppText></Left>
            <Right>
              <Icon style={[Style.text__info]} type={'MaterialIcons'} name="radio-button-checked"/>
            </Right>
          </ListItem>
          <ListItem
            style={[Style.px__3, Style.mx__0]}>
            <Left><AppText>UAE Dirham <AppText
              style={[Style.text__gray]}>(AED)</AppText></AppText></Left>
            <Right>
              <Icon type={'MaterialIcons'} name="radio-button-unchecked"/>
            </Right>
          </ListItem>
          <ListItem
            style={[Style.px__3, Style.mx__0]}>
            <Left><AppText>Euro <AppText
              style={[Style.text__gray]}>(€)</AppText></AppText></Left>
            <Right>
              <Icon type={'MaterialIcons'} name="radio-button-unchecked"/>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default CurrencyModal;
