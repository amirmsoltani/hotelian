import React from 'react';
import {View} from "react-native";

import {AppText} from "../../Containers";
import {NsgFacilitiesType} from "../../Typescript/Types";


const HotelFacilities = (props: NsgFacilitiesType) => {
  return (
    <View>
      <AppText>{props.name}</AppText>
      {props.values.map((item, index) => <AppText key={index}>{item}</AppText>)}
    </View>
  );
};

export default HotelFacilities;
