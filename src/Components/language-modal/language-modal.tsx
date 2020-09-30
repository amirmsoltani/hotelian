import React from 'react';
import {connect, ConnectedProps} from "react-redux";
import {Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right} from "native-base";

import {Style} from "../../Styles";
import {translate} from "../../Lib/Languages";
import {AppText} from "../../Containers";
import {ChangeLanguage} from "../../Store/Actions";
import {RootStateInterface} from "../../Typescript";
import {Text} from "react-native";
import {BORDER_RADIUS_SM} from "../../../native-base-theme/variables/config";

const mapStateToProps = (state: RootStateInterface) => ({
  locales: state.appReducer.locales,
});
const mapDispatchToProps = {ChangeLanguage}
const connector = connect(mapStateToProps, mapDispatchToProps);

type propType = {
  onClose: () => void;
} & ConnectedProps<typeof connector>;

const LanguageModal = (props: propType) => {
  return (
    <Container style={[
      Style.w__100,
      Style.bg__white,
      {borderRadius: BORDER_RADIUS_SM},
    ]}>
      <Header style={[Style.bg__white]}>
        <Body>
          <AppText style={[Style.text__bold]}>{translate('change-language')}</AppText>
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
            onPress={() => props.ChangeLanguage({dir: 'ltr', lang: 'en'})}
            style={[Style.px__3, Style.mx__0,]}
          >
            <Left><AppText>English</AppText></Left>
            <Right>
              <Icon style={[Style.text__info]} type={'MaterialIcons'} name="radio-button-checked"/>
            </Right>
          </ListItem>
          <ListItem
            onPress={() => props.ChangeLanguage({dir: 'rtl', lang: 'fa'})}
            style={[Style.px__3, Style.mx__0]}>
            <Left><AppText>Persian</AppText></Left>
            <Right><Icon type={'MaterialIcons'} name="radio-button-unchecked"/></Right>
          </ListItem>
          <ListItem
            style={[Style.px__3, Style.mx__0]}>
            <Left><AppText>Arabic</AppText></Left>
            <Right><Icon type={'MaterialIcons'} name="radio-button-unchecked"/></Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default connector(LanguageModal);
