import React, {FunctionComponent} from 'react';
import {TouchableNativeFeedback, View} from 'react-native';

import {SHADOW_LG_X} from '../../../native-base-theme/variables/config';
import {AppText} from 'Containers';
import {Style} from 'Styles';
import {translate} from 'Lib/Languages';
import {connect, ConnectedProps} from 'react-redux';
import {RootStateInterface} from 'Typescript/Interfaces';
import {updateSearchToCurrent} from 'Store/Actions/global.actions/update-search-to-current.action';

const excludeRoute = ['hotel'];
const mapStateToProps = (state: RootStateInterface) => ({
  route: state.navigation.current?.name,
  show: state.searchReducer.status === 'expire',
});
const connector = connect(mapStateToProps, {update: updateSearchToCurrent});

type propsType = ConnectedProps<typeof connector>;

const ExpireModal: FunctionComponent<propsType> = (props) => {
  return (
    props.show && !excludeRoute.includes(props.route) ? (
      <View style={[Style.bg__black, SHADOW_LG_X, Style.flex__row, Style.py__2, Style.px__1,
        Style.align__items_center, Style.justify__content_center,
        {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          minHeight: 60,
        }]}>
        <View style={[Style.flex__grow__1, Style.flex__shrink__1, Style.px__1]}>
          <AppText style={[Style.text__white, Style.f__12]}>{translate('expire-modal-text')}</AppText>
        </View>
        <View style={[Style.flex__grow__0, Style.flex__shrink__0, Style.px__1]}>
          <TouchableNativeFeedback onPress={() => props.update()}>
            <AppText style={[Style.text__info, Style.text__bold, Style.text__upperCase, Style.f__16]}>
              {translate('update')}</AppText>
          </TouchableNativeFeedback>
        </View>
      </View>) : null
  );
};

export default connector(ExpireModal);
