import React from 'react';
import {TouchableNativeFeedback, View} from "react-native";

import {column_type} from "../../types";
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
      <View style={[Style.bg__white, Style.mb__1, Style.p__3]}>
        {columns.map((item, index) => (
          <View key={index + ''} style={[Style.flex__row, Style.justify__content_between,
            Style.align__items_center, Style.py__2,]}>
            <AppText style={[Style.mr__1, Style.f__14, Style.text__bold, Style.text__capitalize,
              Style.flex__grow__0, Style.flex__shrink__0,]}>
              {item.label ?? item.index}:</AppText>
            <View style={[Style.flex__grow__1, Style.flex__shrink__1, Style.flex__row, Style.justify__content_end]}>
              {item.render ? item.render(data) : <AppText>{data[item.index]}</AppText>}
            </View>
          </View>
        ))}
      </View>
    </TouchableNativeFeedback>
  )
}

export default Item;
