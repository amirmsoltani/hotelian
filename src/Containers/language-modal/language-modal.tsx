import React from 'react';
import {View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {Icon, Left, List, ListItem, Right} from 'native-base';

import {Style} from 'Styles';
import {AppText} from 'Containers/index';
import {ChangeLanguage} from 'Store/Actions';
import {RootStateInterface} from 'Typescript';
import {BORDER_RADIUS_SM} from '../../../native-base-theme/variables/config';

const mapStateToProps = (state: RootStateInterface) => ({
  locales: state.appReducer.locales,
  activeLang: state.appReducer.language,
});
const mapDispatchToProps = {ChangeLanguage};
const connector = connect(mapStateToProps, mapDispatchToProps);

type propType = {
  onClose: () => void;
} & ConnectedProps<typeof connector>;

const LanguageModal = (props: propType) => {
  return (
    <View style={[Style.w__100, Style.h__100, {borderRadius: BORDER_RADIUS_SM},]}>
      <View style={[Style.bg__white, Style.mt__auto]}>
        <List>
          {props.locales.map(item =>
            <ListItem
              key={item.lang}
              onPress={() => props.ChangeLanguage({dir: `${item.dir}`, lang: `${item.lang}`})}
              style={[Style.px__3, Style.mx__0]}>
              <Left><AppText>{item.label}</AppText></Left>
              <Right>
                <Icon
                  style={[props.activeLang === item.lang ? Style.text__info : null]} type={'MaterialIcons'}
                  name={props.activeLang === item.lang ? 'radio-button-checked' : 'radio-button-unchecked'}/>
              </Right>
            </ListItem>)}
        </List>
      </View>
    </View>
  );
};

export default connector(LanguageModal);
