import React from 'react';
import {connect, ConnectedProps} from "react-redux";
import {Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right} from "native-base";

import {Style} from "Styles";
import {AppText} from "Containers/index";
import {translate} from "Lib/Languages";
import {ChangeLanguage} from "Store/Actions";
import {RootStateInterface} from "Typescript";
import {BORDER_RADIUS_SM} from "../../../native-base-theme/variables/config";

const mapStateToProps = (state: RootStateInterface) => ({
  locales: state.appReducer.locales,
  activeLang: state.appReducer.language,
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
          {
            props.locales.map(item =>
              <ListItem
                key={item.lang}
                onPress={() => props.ChangeLanguage({dir: `${item.dir}`, lang: `${item.lang}`})}
                style={[Style.px__3, Style.mx__0,]}>
                <Left><AppText>{item.label}</AppText></Left>
                <Right>
                  <Icon
                    style={[props.activeLang === item.lang ? Style.text__info : null]} type={'MaterialIcons'}
                    name={props.activeLang === item.lang ? 'radio-button-checked' : 'radio-button-unchecked'}/>
                </Right>
              </ListItem>)
          }
        </List>
      </Content>
    </Container>
  );
};

export default connector(LanguageModal);
