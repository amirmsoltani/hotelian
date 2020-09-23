import React from 'react';
import {Image, View} from 'react-native';

import style from '../search-form-idle/search-form-idle.style';
import {AppText} from 'Containers';
import {Conditional, ElIf, If} from 'Components';
import {translate as t} from "Lib/Languages";

type propsType = { mode: string }
const SearchFormInit = (props: propsType) => {
  const _data = {
    source: (props.mode === 'nationality') ?
      require('Assets/Images/earth-globe.png') :
      require('Assets/Images/globe-grid.png'),
  };
  return (
    <View>
      <View style={style.container}>
        <Image
          style={style.image}
          source={_data.source}
          resizeMode='contain'
        />
      </View>
      <View style={style.textContainer}>
        <Conditional>
          <If condition={props.mode === 'destination'}>
            <AppText style={style.caption}>{t('what-we-offer-p1')}.</AppText>
          </If>
          <ElIf condition={props.mode === 'nationality'}>
            <AppText style={style.caption}>{t('products-hotels-p1')}</AppText>
          </ElIf>
        </Conditional>
      </View>
    </View>
  );
};

export default SearchFormInit;
