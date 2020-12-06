import React from 'react';
import {View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {Icon, Left, List, ListItem, Right} from 'native-base';

import {Style} from 'Styles';
import {AppText} from 'Containers/index';
import {BORDER_RADIUS_SM} from '../../../native-base-theme/variables/config';
import {RootStateInterface} from 'Typescript/Interfaces';
import {ChangeCurrency} from 'Store/Actions';

const mapStateToProps = (state: RootStateInterface) => ({
  currencies: state.appReducer.currencies,

  activeCurrency: state.appReducer.currency,
});
const connector = connect(mapStateToProps, {ChangeCurrency});

type propType = {
  onClose: () => void;
} & ConnectedProps<typeof connector>;

const CurrencyModal = (props: propType) => {
  return (
    <View style={[Style.w__100, Style.h__100, {borderRadius: BORDER_RADIUS_SM},]}>
      <View style={[Style.bg__white, Style.mt__auto]}>
        <List>
          {props.currencies.map(item =>
            <ListItem style={[Style.px__3, Style.mx__0]} key={item.code}
                      onPress={() => props.ChangeCurrency(item.code) && props.onClose()}>
              <Left>
                <AppText>{item.label}
                  <AppText style={[Style.text__gray]}>({item.code})</AppText>
                </AppText>
              </Left>
              <Right>
                <Icon type={'MaterialIcons'}
                      style={[props.activeCurrency === item.code ? Style.text__info : null]}
                      name={`radio-button-${props.activeCurrency === item.code ? '' : 'un'}checked`}/>
              </Right>
            </ListItem>)}
        </List>
      </View>
    </View>
  );
};

export default connector(CurrencyModal);
