import React from 'react';
import {Alert, ScrollView, View} from "react-native";

import {AppText, FormInput} from "../../../Containers";
import {SHADOW_SM} from "../../../../native-base-theme/variables/config";
import {Style} from "../../../Styles";
import {translate} from "../../../Lib/Languages";
import {Button} from "native-base";

const Register = () => {
  return (
    <ScrollView style={[Style.bg__white]}>
      <View style={[Style.p__2, Style.bg__white, SHADOW_SM]}>

        {/*register form*/}
        <View style={[Style.mb__1, Style.flex__row]}>
          <View style={[Style.col__6, Style.p__1]}>
            <FormInput data={{label: translate('first-name')}}/>
          </View>
          <View style={[Style.col__6, Style.p__1]}>
            <FormInput data={{label: translate('last-name')}}/>
          </View>
        </View>

        <View style={[Style.mb__1, Style.p__1]}>
          <FormInput data={{label: translate('email')}}/>
        </View>

        <View style={[Style.mb__1, Style.flex__row]}>
          <View style={[Style.col__6, Style.p__1]}>
            <FormInput secureTextEntry data={{label: translate('password')}}/>
          </View>
          <View style={[Style.col__6, Style.p__1]}>
            <FormInput secureTextEntry data={{label: translate('confirm-password')}}/>
          </View>
        </View>
        <View style={[Style.flex__row, Style.py__2, Style.px__1, Style.flex__wrap]}>
          <AppText>
            <AppText style={[Style.f__12, Style.text__light]}>
              {translate('register-ins1')} </AppText>
            <AppText onPress={() => Alert.alert('terms and conditions')}
                     style={[Style.text__info, Style.f__12,]}>
              {translate('terms-and-conditions')} </AppText>
            <AppText style={[Style.f__12, Style.text__light]}>
              {translate('register-ins2')} </AppText>
            <AppText onPress={() => Alert.alert('privacy policies')}
                     style={[Style.text__info, Style.f__12,]}>
              {translate('privacy-policies')}.</AppText>
          </AppText>
        </View>
        <View style={[{marginTop: 30,}]}>
          <Button style={[Style.bg__primary]} block><AppText style={[Style.text__white]}>
            {translate('register')}</AppText></Button>
        </View>

      </View>
    </ScrollView>
  );
};

export default Register;
