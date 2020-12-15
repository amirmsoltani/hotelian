import React from 'react';
import {View} from "react-native";
import {column_type} from "../../column";
import {AppText} from "../../../../Containers";

type props_type<T> = {
  data: T;
  columns: column_type<T>[];
}

function Item<T>({data, columns}: props_type<T>) {
  return (
    <View>
      <AppText>item</AppText>
    </View>
  )
}

export default Item;
