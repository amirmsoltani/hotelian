import React from 'react';

import {Badge} from "../../Components";
import TableList from "../../Components/table-list/table-list";

type DataType = { name: string; age: number; bool: boolean; };

const TestPage = () => {
  const dummy_data: DataType[] = [
    {name: 'fix', age: 10, bool: true},
    {name: 'me', age: 11, bool: false},
    {name: 'plz', age: 12, bool: true},
    {name: 'tq', age: 13, bool: false},
  ];

  return (
    <TableList
      title={'my bookings'}
      status={'ok'}
      data={dummy_data}
      columns={[
        {index: 'name', render: row => <Badge text={row.name}/>},
        {index: 'age',},
        {index: 'name', render: row => <Badge bordered type={"muted"} text={row.name}/>},
      ]}
      click={(s) => console.log(s)}
    />
  );
};

export default TestPage;
