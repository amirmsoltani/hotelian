import React from 'react';
import {Button, Icon} from 'native-base';
import {I18nManager, BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {stackActions} from 'Lib/navigation';

import {Style} from 'Styles';

class BackNavigation extends React.Component {
  navigation?: ReturnType<typeof useNavigation> & Partial<typeof stackActions>;
  back = ((): boolean => {
    if (this.navigation && this.navigation!.canGoBack()) {
      this.navigation.goBack();
    }
    return true;
  });

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.back);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.back);
  }


  Button = (() => {
    if (!this.navigation) {
      this.navigation = useNavigation();
    }
    return (
      <Button onPress={this.back} transparent>
        <Icon
          type={'Ionicons'}
          name={I18nManager.isRTL ? 'chevron-forward' : 'chevron-back'}
          style={[Style.f__20, Style.text__white]}/>
      </Button>
    );
  });

  render() {
    return (
      <this.Button/>
    );
  }
}


export default BackNavigation;
