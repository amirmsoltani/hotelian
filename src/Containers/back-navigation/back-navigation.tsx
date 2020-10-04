import React from 'react';
import {Button, Icon} from 'native-base';
import {I18nManager} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {useHistory} from 'react-router-native';

import {Style} from "Styles";

const BackNavigation = () => {
  const navigation = useNavigation();
  const history = useHistory();

  const back = () => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    }else if (history.location.pathname !== '/'){
      history.goBack();
    }
  }

  return (
    <>
      <Button onPress={back} transparent>
        <Icon
          type={'Ionicons'}
          name={I18nManager.isRTL ? 'chevron-forward' : 'chevron-back'}
          style={[Style.f__20, Style.text__white,]}/>
      </Button>
    </>
  );
};

export default BackNavigation;
