import React from 'react';
import {Image, ScrollView, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';

import {AppText, FormInput} from '../../../Containers';
import {SHADOW_SM} from '../../../../native-base-theme/variables/config';
import {Style} from '../../../Styles';
import {Button} from 'native-base';
import {translate} from '../../../Lib/Languages';
import {globalStore} from '../../../Store';
import {userLogin} from '../../../Store/Actions/user.actions';

const google_image = require('Assets/Images/google-logo.png');
const facebook_image = require('Assets/Images/facebook-logo.png');
const Login = () => {
  const logo_dimension = 48;
  let email: string = '';
  let password: string = '';
  const login = () => {
    const not_true = ['', null, undefined];
    if (not_true.includes(email) || not_true.includes(password))
      {return;}
    userLogin(email, password)(globalStore.dispatch);
  };
  return (
    <ScrollView style={[Style.bg__white]}>
      <View style={[Style.p__3, Style.bg__white, SHADOW_SM]}>

        {/*social email*/}
        <AppText style={[Style.text__center, Style.f__14, Style.mt__3]}>
          {translate('login-ins1')}
        </AppText>
        <View style={[Style.flex__row, Style.justify__content_center, Style.p__3]}>
          <TouchableNativeFeedback>
            <View style={[Style.p__1]}>
              <Image style={[{width: logo_dimension, height: logo_dimension}]}
                     resizeMode={'contain'} source={google_image}/>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View style={[Style.p__1]}>
              <Image style={[{width: logo_dimension, height: logo_dimension}]}
                     resizeMode={'contain'} source={facebook_image}/>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={[Style.my__3]}>
          <AppText style={[Style.text__center, Style.f__16]}>or</AppText>
        </View>

        {/*login form*/}
        <View style={[Style.mb__1]}>
          <FormInput data={{label: translate('email')}} onEndEditing={e => {
            email = e.nativeEvent.text;
          }}/>
        </View>
        <View style={{marginBottom: 24}}>
          <FormInput secureTextEntry data={{label: translate('password')}} onEndEditing={e => {
            password = e.nativeEvent.text;
          }}/>
        </View>
        <View style={[Style.mb__2]}>
          <Button style={[Style.bg__primary]} block onPress={login}><AppText style={[Style.text__white]}>
            {translate('login')}</AppText></Button>
        </View>

        {/*forget password*/}
        <View>
          <TouchableOpacity>
            <AppText style={[Style.f__12, Style.text__info]}>
              {translate('forgot-your-password')}</AppText>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};

export default Login;
