import React, {ReactNode} from 'react';

import TableList from "../../Components/table-list/table-list";
import {RefundRequestType} from "../../Typescript/Types";
import {translate} from "../../Lib/Languages";
import {Badge} from "../../Components";
import {AppText} from "../../Containers";
import {Style} from "../../Styles";

const MyRefundRequests = () => {
  const dummy_data: RefundRequestType[] = [
    {
      "status": {
        "value": "2",
        "label": "Rejected"
      },
      "create_date": "22 Jun 2020 10:28",
      "refund_amount": 0,
      "currency": "USD",
      "service_type": {
        "value": "1",
        "label": "Hotel"
      },
      "reference": "H548101480"
    },
    {
      "status": {
        "value": "0",
        "label": "Pending"
      },
      "create_date": "22 Jun 2020 06:01",
      "refund_amount": 0,
      "currency": "USD",
      "service_type": {
        "value": "1",
        "label": "Hotel"
      },
      "reference": "H277608726"
    },
    {
      "status": {
        "value": "1",
        "label": "Approved"
      },
      "create_date": "21 Jun 2020 11:30",
      "refund_amount": 0,
      "currency": "USD",
      "service_type": {
        "value": "1",
        "label": "Hotel"
      },
      "reference": "H334016765"
    },
    {
      "status": {
        "value": "0",
        "label": "Pending"
      },
      "create_date": "10 Jun 2020 09:45",
      "refund_amount": 0,
      "currency": "USD",
      "service_type": {
        "value": "1",
        "label": "Hotel"
      },
      "reference": null
    },
    {
      "status": {
        "value": "0",
        "label": "Pending"
      },
      "create_date": "02 Jun 2020 10:53",
      "refund_amount": 0,
      "currency": "USD",
      "service_type": {
        "value": "1",
        "label": "Hotel"
      },
      "reference": null
    },
    {
      "status": {
        "value": "1",
        "label": "Approved"
      },
      "create_date": "01 Jun 2020 05:42",
      "refund_amount": 0,
      "currency": "USD",
      "service_type": {
        "value": "1",
        "label": "Hotel"
      },
      "reference": null
    },
    {
      "status": {
        "value": "2",
        "label": "Rejected"
      },
      "create_date": "01 Jun 2020 05:38",
      "refund_amount": 0,
      "currency": "USD",
      "service_type": {
        "value": "1",
        "label": "Hotel"
      },
      "reference": null
    }
  ];

  const badgeGenerator = (s: RefundRequestType): ReactNode => {
    switch (s.status.value) {
      case '0'://pending
        return <Badge type={'warning'} text={s.status.label}/>
      case '1'://approved
        return <Badge type={'success'} text={s.status.label}/>
      case '2'://rejected
        return <Badge type={'danger'} text={s.status.label}/>
      default:
        return <AppText>-</AppText>
    }
  }
  return (
    <>
      <TableList<RefundRequestType>
        title={'my bookings'}
        status={'ok'}
        data={dummy_data}
        columns={[
          {index: 'reference', label: translate('reference')},
          {
            index: 'status',
            label: translate('status'),
            render: s => badgeGenerator(s),
          },
          {
            index: 'service_type',
            label: translate('service'),
            render: s => <AppText>{s.service_type.label}</AppText>
          },
          {index: 'create_date', label: translate('date'),},
          {
            index: 'refund_amount',
            label: translate('refund-amount'),
            render: s => <AppText style={[Style.text__bold, Style.text__important]}>
              {s.refund_amount} {s.currency}</AppText>
          },
        ]}
        filters={[
          {label: translate('approved'), handler: item => item.status.value === '1'},
          {label: translate('pending'), handler: item => item.status.value === '0'},
          {label: translate('rejected'), handler: item => item.status.value === '2'},
        ]}
        click={s => console.log(s)}
        input_search={{index: 'reference', label_text: translate('enter-your-reference')}}
      />
    </>
  );
};

export default MyRefundRequests;

