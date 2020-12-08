import React from 'react';
import {Alert, View} from "react-native";
import {Body, Button, Content, Footer, Header, Left, Right} from "native-base";

import {Style} from "../../Styles";
import {AppText, AppTitle, BackNavigation} from "../../Containers";
import {translate} from "../../Lib/Languages";
import {Conditional, If} from "../../Components";
import style from "../search.page/search-page.styles";

const SelectRoomFilter = () => {
  return (
    <>
      {/*header*/}
      <Header style={[Style.bg__primary]}>
        <Left>
          <BackNavigation/>
        </Left>
        <Body>
          <AppTitle>{translate('set-your-filters')}</AppTitle>
        </Body>
        <Right>
          <Conditional>
            <If condition={true}>
              <Button transparent>
                <AppText style={[Style.text__white, Style.text__upperCase]}>{translate('reset')}</AppText>
              </Button>
            </If>
          </Conditional>
        </Right>
      </Header>

      {/*content*/}
      <Content>
        <View style={[Style.bg__white]}>
          <View style={[style.wrapper, Style.mb__0]}>
            <AppText>board type filter [list]</AppText>
            <AppText>price filter [list]</AppText>
          </View>
        </View>
      </Content>

      {/*footer*/}
      <Footer>
        <View style={[Style.p__1, Style.w__100, Style.bg__white]}>
          <Button
            block style={[Style.bg__primary, Style.w__100]}
            onPress={() => Alert.alert('clicked')}>
            <AppText style={[Style.text__white, Style.text__bold]}>
              {translate('show-results') + ` (0)`}
            </AppText>
          </Button>
        </View>
      </Footer>
    </>
  );
};

export default SelectRoomFilter;
