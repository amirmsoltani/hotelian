import React from 'react';
import {Button, Icon} from 'native-base';
import {I18nManager, BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useHistory} from 'react-router-native';

import {Style} from 'Styles';

class BackNavigation extends React.Component {
  navigation?: ReturnType<typeof useNavigation>;
  history?: ReturnType<typeof useHistory>;
  back = ((): boolean => {
    if (this.navigation!.canGoBack()) {
      this.navigation!.goBack();
    } else if (this.history!.location.pathname !== '/') {
      this.history!.goBack();
    }
    return true;
  }).bind(this);

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.back);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.back);
  }


  Button = (() => {
    if (!this.navigation) {
      this.navigation = useNavigation();
      this.history = useHistory();
    }
    return (
      <Button onPress={this.back} transparent>
        <Icon
          type={'Ionicons'}
          name={I18nManager.isRTL ? 'chevron-forward' : 'chevron-back'}
          style={[Style.f__20, Style.text__white]}/>
      </Button>
    );
  }).bind(this);

  render() {
    return (
      <this.Button/>
    );
  }
}


export default BackNavigation;
