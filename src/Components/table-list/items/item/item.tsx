import React from 'react';
import {TouchableNativeFeedback, View} from "react-native";

import {column_type} from "../../column";
import {Style} from "../../../../Styles";
import {AppText} from "../../../../Containers";

type props_type<T> = {
  data: T;
  columns: column_type<T>[];
  click?: (item: T) => void;
}

function Item<T>({data, columns, click}: props_type<T>) {
  return (
    <TouchableNativeFeedback disabled={!click} onPress={() => click ? click(data) : null}>
      <View style={[Style.bg__white, Style.mb__1, Style.p__2]}>
        {columns.map((item, index) => (
          <View key={index + ''} style={[Style.flex__row, Style.justify__content_between,
            Style.align__items_center, Style.py__2,]}>
            <AppText style={[Style.mr__1, Style.f__14, Style.text__bold, Style.text__capitalize]}>
              {item.index}:</AppText>
            {item.render ? item.render(data) : <AppText>{data[item.index]}</AppText>}
          </View>
        ))}
      </View>
    </TouchableNativeFeedback>
  )
}

export default Item;
