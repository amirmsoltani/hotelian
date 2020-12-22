import React, {ReactNode} from 'react';

import TableList from "../../Components/table-list/table-list";
import {InvoiceType} from "../../Typescript/Types";
import {translate} from "../../Lib/Languages";
import {Badge} from "../../Components";
import {AppText} from "../../Containers";
import {Style} from "../../Styles";

const MyInvoices = () => {
  const dummy_data: InvoiceType[] = [
    {
      amount: '11',
      total: '22',
      currency: "USD",
      date: "15 Aug 2020",
      invoice_id: "100",
      service_type: {value: "Hotel", label: "Hotel"},
      status: {value: "Yes", label: "Yes"},
    },
    {
      amount: '33',
      total: '44',
      currency: "AED",
      date: "22 Aug 2020",
      invoice_id: "200",
      service_type: {value: "Hotel", label: "Hotel"},
      status: {value: "No", label: "No"},
    },
  ];
  const badgeGenerator = (s: InvoiceType): ReactNode => {
    switch (s.status.value) {
      case 'Yes':
        return <Badge type={'success'} text={translate('paid')}/>

      //TODO: ?????
      case 'No':
        return <Badge type={'danger'} text={translate('unpaid')}/>
      default:
        return <AppText>-</AppText>
    }
  }
  return (
    <>
      <TableList<InvoiceType>
        title={'my bookings'}
        status={'ok'}
        data={dummy_data}
        columns={[
          {index: 'invoice_id', label: translate('invoice-no')},
          {
            index: 'status',
            label: translate('status'),
            render: s => badgeGenerator(s)
          },
          {
            index: 'service_type',
            label: translate('service'),
            render: s => <AppText>{s.service_type.label}</AppText>
          },
          {index: 'date', label: translate('date'),},
          {index: 'amount', label: translate('price'),},
          {
            index: 'total',
            label: translate('total'),
            render: s => <AppText style={[Style.text__bold, Style.text__important]}>{s.total} {s.currency}</AppText>
          },
        ]}
        filters={[
          {label: translate('paid'), handler: item => item.status.value === 'Yes'},
          {label: translate('unpaid'), handler: item => item.status.value === 'No'},
        ]}
        click={s => console.log(s)}
        input_search={{index: 'invoice_id', label_text: translate('enter-your-invoice-id')}}
      />
    </>
  );
};

export default MyInvoices;

