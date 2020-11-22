import React, {Component} from 'react';
import {Body, Button, Content, Footer, Header, Left, Right} from "native-base";

import {Style} from "../../Styles";
import {AppSubtitle, AppText, AppTitle, BackNavigation} from "../../Containers";
import {ElIf, If} from "../../Components/conditional.component";
import {Conditional, ScreenLoading} from "../../Components";
import {View} from "react-native";
import {translate as t} from "../../Lib/Languages";


//status of receiving data
const status: 'ok' | 'loading' | 'error' = 'ok';

class TestPage extends Component {
  render() {
    return (
      <>
        {/*header*/}
        <Header style={[Style.bg__primary]}>
          <Left><BackNavigation/></Left>
          <Body>
            <AppTitle hasSubtitle>Hotel names go here</AppTitle>
            <AppSubtitle>99 September - 99 December</AppSubtitle>
          </Body>
          <Right/>
        </Header>

        {/*content*/}
        <Content>
          <Conditional>
            <If condition={status === 'loading'}><ScreenLoading/></If>
            <ElIf condition={status === 'ok'}>

              {/*search details*/}


              {/*hotel details*/}


              {/*guest details*/}


              {/*invoice*/}


            </ElIf>
            <ElIf condition={status === 'error'}>
              <AppText>Some thing went wrong</AppText>
            </ElIf>
          </Conditional>
        </Content>

        {/*footer*/}
        <Footer style={[Style.bg__white]}>
          <View style={[Style.w__100, Style.p__1, Style.flex__row]}>
            <View style={[Style.col__6]}>
              <AppText style={[Style.f__14,]}>{t('total')}:</AppText>
              <View style={[Style.flex__row]}>
                <AppText style={[Style.f__14, Style.text__bold]}>999,999,999,999</AppText>
                <AppText style={[Style.f__14, Style.text__bold]}> IRR</AppText>
              </View>
            </View>
            <View style={[Style.col__6, Style.pl__1
            ]}>
              <Button block style={[Style.bg__primary]}>
                <AppText firstLetter style={[Style.text__white, Style.text__bold]}>{t('continue')}</AppText>
              </Button>
            </View>
          </View>
        </Footer>
      </>
    );
  }
}

export default TestPage;
