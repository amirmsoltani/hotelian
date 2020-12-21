import React, {useEffect} from 'react';
import {Button, TextInput} from 'react-native';
import {translate} from 'Lib/Languages';
import {AppText} from 'Containers';
import {connect, ConnectedProps} from 'react-redux';
import {RootStateInterface} from '../../Typescript/Interfaces';
import {sendEmailVerificationCode} from '../../Store/Actions/user.actions/send-email-verification-code.action';
import {verifyEmailByCode} from '../../Store/Actions/user.actions/verify-email-by-code.action';

const mapStateToProps = (state: RootStateInterface) => ({
  email: state.userReducer.user!.email,
  verified: state.userReducer.user!.is_email_verified,
});
const connector = connect(mapStateToProps,
  {send: sendEmailVerificationCode, verify: verifyEmailByCode});
let first = true;
let code = '';
const email_verify: React.FC<ConnectedProps<typeof connector>> = ({send, verified, email, verify}) => {
  useEffect(() => {
    if (first) {
      first = false;
      send();
    }
  });
  const email_verify = () => {
    if (code && code.length === 8)
    {
      verify(code);
    }
  };

  return (
    <React.Fragment>
      <AppText>
        {translate('email-verify-text')}
        {email}
      </AppText>
      <TextInput placeholder={translate('verify-code')} defaultValue={code} onChangeText={(text) => {
        code = text;
      }}/>
      <Button title={translate('submit')} onPress={email_verify} disabled={verified === 'loading'}/>
      <Button title={translate('resend-email')} onPress={send} disabled={verified === 'loading'}/>
    </React.Fragment>
  );
};

export default connector(email_verify);
