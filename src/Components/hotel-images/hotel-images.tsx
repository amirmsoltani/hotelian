import React from 'react';
import {useNavigation} from "@react-navigation/native";
import {Image, TouchableOpacity, View} from "react-native";
import {Conditional, Else, If, ProgressiveImage} from "../index";

import {Style} from "Styles";
import {AppText} from "Containers";
import {translate} from "Lib/Languages";

//display when there is no image to present
const unavailableImage = require('../../Assets/Images/no-image.png');

const HotelImages = (props: { image: string[] | undefined }) => {


  const navigation = useNavigation();

  const nv = () => navigation.navigate('hotel-image-flat-list');

  //'slider', 'solo', 'unavailable'
  let flag;
  let filteredArray: string[] = [];

  if (!props.image || !props.image.length) flag = 'unavailable';
  else {
    filteredArray = props.image.filter(item => (!!item || item != ''));
    switch (filteredArray.length) {
      case 0:
        flag = 'unavailable';
        break;
      case 1:
      case 2:
      case 3:
      case 4:
        flag = 'solo';
        break;
      default:
        flag = 'slider';
    }
  }

  return <Conditional>
    <If condition={flag === 'solo' || flag === 'unavailable'}>
      <View style={[Style.mb__1, Style.bg__white, Style.p__1]}>
        <View style={{height: 180,}}>
          <Image source={flag === 'solo' ? {uri: filteredArray[0]} : unavailableImage}
                 style={[{width: undefined}, Style.h__100]}/>
        </View>
      </View>
    </If>
    <Else>
      <View style={[Style.mb__1, Style.bg__white, Style.p__1]}>
        <View style={[Style.flex__row]}>
          <TouchableOpacity onPress={nv}
                            activeOpacity={.6} style={[Style.col__6, Style.pb__1, {height: 100,}]}>
            <ProgressiveImage source={{uri: filteredArray[0]}} resizeMode='cover'
                              style={[Style.h__100]}/></TouchableOpacity>
          <TouchableOpacity onPress={nv}
                            activeOpacity={.6} style={[Style.col__6, Style.pl__1, Style.pb__1, {height: 100,}]}>
            <ProgressiveImage source={{uri: filteredArray[1]}} resizeMode='cover'
                              style={[Style.h__100]}/></TouchableOpacity>
        </View>
        <View style={[Style.flex__row]}>
          <TouchableOpacity onPress={nv}
                            activeOpacity={.6} style={[Style.col__4, {height: 100,}]}>
            <ProgressiveImage source={{uri: filteredArray[2]}} resizeMode='cover'
                              style={[Style.h__100]}/></TouchableOpacity>
          <TouchableOpacity onPress={nv}
                            activeOpacity={.6} style={[Style.col__4, Style.pl__1, {height: 100,}]}>
            <ProgressiveImage source={{uri: filteredArray[3]}} resizeMode='cover'
                              style={[Style.h__100,]}/></TouchableOpacity>
          <TouchableOpacity onPress={nv}
                            activeOpacity={.6} style={[Style.col__4, Style.pl__1, {height: 100,}]}>
            <ProgressiveImage source={{uri: filteredArray[4]}} resizeMode='cover' style={[Style.h__100]}/>
            <View style={[{
              backgroundColor: 'rgba(0,0,0,0.4)', position: 'absolute', top: 0, bottom: 0, left: 5, right: 0,
            }, Style.align__items_center, Style.justify__content_center]}>
              <AppText style={[Style.f__20, Style.text__gray_l_XX]}>{translate('more')}</AppText>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Else>
  </Conditional>
};

export default HotelImages;
