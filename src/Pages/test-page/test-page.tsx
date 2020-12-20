import React from 'react';

import {Badge} from "../../Components";
import TableList from "../../Components/table-list/table-list";

type DataType = { name: string; age: number; status: boolean; };

const TestPage = () => {
  const dummy_data: DataType[] = [
    {name: 'fix', age: 10, status: true},
    {name: 'me', age: 11, status: false},
    {name: 'plz', age: 12, status: true},
    {name: 'tq', age: 13, status: false},
    {name: 'thx', age: 13, status: false},
  ];

  return (
    <>
      <TableList<DataType>
        title={'my bookings'}
        status={'ok'}
        data={dummy_data}
        columns={[
          {index: 'name', render: row => <Badge text={row.name}/>},
          {index: 'age',},
          {index: 'name', render: row => <Badge bordered type={"muted"} text={row.name}/>},
        ]}
        filters={[
          {label: 'Age', handler: item => item.age <= 11},
          {label: 'Status', handler: item => item.status},
          {label: 'Name', handler: item => item.name.indexOf('t') > -1},
        ]}
        click={s => console.log(s)}
      />
    </>
  );
};

export default TestPage;

