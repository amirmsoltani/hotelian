import React from 'react';
import {connect, ConnectedProps} from "react-redux";
import {Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Title} from "native-base";

import {Style} from "../../Styles";
import {AppText} from "../../Containers";
import {ChangeLanguage} from "../../Store/Actions";
import {RootStateInterface} from "../../Typescript";

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
    ]}>
      <Header style={[Style.bg__primary]}>
        <Body>
          <Title>Language</Title>
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
            onPress={() => props.ChangeLanguage({dir: 'ltr', lang: 'en'})}
            style={[Style.px__3, Style.mx__0,]}
          >
            <Left><AppText>English</AppText></Left>
            <Right><Icon type={'MaterialIcons'} name="arrow-forward"/></Right>
          </ListItem>
          <ListItem
            onPress={() => props.ChangeLanguage({dir: 'rtl', lang: 'fa'})}
            style={[Style.px__3, Style.mx__0]}>
            <Left><AppText>Persian</AppText></Left>
            <Right><Icon type={'MaterialIcons'} name="arrow-forward"/></Right>
          </ListItem>
          <ListItem
            style={[Style.px__3, Style.mx__0]}>
            <Left><AppText>Arabic</AppText></Left>
            <Right><Icon type={'MaterialIcons'} name="arrow-forward"/></Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default connector(LanguageModal);
