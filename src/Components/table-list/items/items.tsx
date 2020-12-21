import React, {useContext} from 'react';
import {FlatList, View} from "react-native";

import Item from "./item/item";
import TableList, {context_type} from "../table-list";
import {AppText} from "../../../Containers";
import {Style} from "../../../Styles";

function Items<T>() {
  const {filtered_data, click, columns, data} = useContext(TableList.contextType) as context_type<T>;
  return (
    <>
      <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
        <AppText style={[Style.f__14, Style.text__muted_d_X]}>
          Show : {filtered_data.length} out of {data.length}</AppText>
      </View>
      <FlatList data={filtered_data}
                renderItem={({item}) => <Item click={click} data={item} columns={columns}/>}
                keyExtractor={(_, index) => `k_${index}`}
      />
    </>
  )
}

export default Items;
