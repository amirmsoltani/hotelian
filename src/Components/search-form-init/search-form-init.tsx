import React from 'react';
import {Image, View} from 'react-native';
import style from '../search-form-idle/search-form-idle.style';
import {AppText} from 'Containers';
import {If, ElIf, Conditional} from 'Components';

type propsType = {mode: string}
const SearchFormInit = (props: propsType) => {
  const _data = {
    source: (props.mode === 'nationality') ?
      require('../../Assets/Images/earth-globe.png') :
      require('../../Assets/Images/globe-grid.png'),
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
            <AppText style={style.caption}>Access to over 440,000 hotels around a world.</AppText>
            <AppText style={style.caption}>City, hotels, landmarks and other stuff.</AppText>
          </If>
          <ElIf condition={props.mode === 'nationality'}>
            <AppText style={style.caption}>International platform for all nations and all countries around
              world</AppText>
          </ElIf>
        </Conditional>
      </View>
    </View>
  );
};

export default SearchFormInit;
