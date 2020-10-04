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
          type={'SimpleLineIcons'}
          name={I18nManager.isRTL ? 'arrow-right' : 'arrow-left'}
          style={[Style.f__18, Style.text__white,]}/>
      </Button>
    </>
  );
};

export default BackNavigation;
