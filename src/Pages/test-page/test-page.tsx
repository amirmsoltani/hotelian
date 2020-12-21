import React from 'react';
import TableList from "../../Components/table-list/table-list";
import {Badge} from "../../Components";
import {AppText} from "../../Containers";
import {Style} from "../../Styles";

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
          {index: 'age'},
          {
            index: 'status',
            render: row => <AppText style={[Style.text__muted_d_X]}>{row.status ? 'true' : 'false'}</AppText>
          },
        ]}
        filters={[
          {label: 'Age <= 11', handler: item => item.age <= 11},
          {label: 'Status === true', handler: item => item.status},
          {label: `Name has 't'`, handler: item => item.name.indexOf('t') > -1},
        ]}
        click={s => console.log(s)}
        input_search={{index: 'name', label_text: 'label goes here!!!'}}
      />
    </>
  );
};

export default TestPage;

