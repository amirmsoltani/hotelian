import React from 'react';
import {Body, Header, Left, Right, Tab, Tabs, View} from 'native-base';

import {Style} from '../../Styles';
import {AppText, BackNavigation} from '../../Containers';
import {translate} from '../../Lib/Languages';
import Login from './login/login';
import Register from './register/register';
import {globalStore} from '../../Store';
import { StackScreenProps} from '@react-navigation/stack';

const LoginRegister = ({navigation}: StackScreenProps<any>) => {
  const {userReducer: {status}, navigation: {current}} = globalStore.getState();
  if (status === 'ok' && current.name === 'auth')
    {navigation.goBack();}
  return (
    <>
      <Header style={[Style.bg__primary, Style.flex__row]}>
        <Left><BackNavigation/></Left>
        <Body>
          <View style={[Style.flex__row, Style.justify__content_center, Style.mb__1]}>
            <AppText style={[Style.text__white, Style.f__18, Style.text__bold, {letterSpacing: 1}]}>Hotelian</AppText>
            <AppText style={[Style.text__important, Style.f__18, Style.text__bold, {letterSpacing: 1}]}>.com</AppText>
          </View>
        </Body>
        <Right/>
      </Header>
      <Tabs>
        <Tab heading={(<View style={[Style.bg__primary]}>
          <AppText style={[Style.text__white]}>{translate('login')}</AppText>
        </View>)}>
          <Login/>
        </Tab>
        <Tab heading={(<View style={[Style.bg__primary]}>
          <AppText style={[Style.text__white]}>{translate('register')}</AppText>
        </View>)}>
          <Register/>
        </Tab>
      </Tabs>
    </>
  );
};

export default LoginRegister;
