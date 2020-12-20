import React from 'react';

import {column_type} from "../column.type";
import Item from "./item/item";

type propsType<T> = {
  data: T[],
  columns: column_type<T>[];
  click?: (item: T) => void;
}

function Items<T>({data, columns, click}: propsType<T>) {
  return (
    <>
      {data.map((item, index) =>
        <Item
          click={click}
          data={item}
          columns={columns}
          key={`tr_${index}`}/>
      )}
    </>
  )
}

export default Items;
