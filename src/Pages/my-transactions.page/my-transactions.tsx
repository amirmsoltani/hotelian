import React, {ReactNode} from 'react';

import TableList from "../../Components/table-list/table-list";
import {TransactionType} from "../../Typescript/Types";
import {translate} from "../../Lib/Languages";
import {Badge} from "../../Components";
import {AppText} from "../../Containers";
import {Style} from "../../Styles";

const MyTransactions = () => {
  const dummy_data: TransactionType[] = [{
    "reference": 315002258,
    "invoice_id": 101140901,
    "amount": 74.99,
    "currency": "USD",
    "usd_amount": 74.99,
    "pay_amount": 275.21,
    "pay_currency": "AED",
    "gateway": "telr",
    "gateway_status": {"value": 0, "label": "Pending"},
    "system_status": {"value": 0, "label": "Pending"},
    "token": null,
    "type": {"value": 2, "label": "Deposit"},
    "date": "19 Dec 2020 08:59",
    "pay_time": null
  }, {
    "reference": 846531923,
    "invoice_id": 108349977,
    "amount": 74.99,
    "currency": "USD",
    "usd_amount": 74.99,
    "pay_amount": 275.21,
    "pay_currency": "AED",
    "gateway": "telr",
    "gateway_status": {"value": 0, "label": "Pending"},
    "system_status": {"value": 0, "label": "Pending"},
    "token": null,
    "type": {"value": 2, "label": "Deposit"},
    "date": "19 Dec 2020 08:48",
    "pay_time": null
  }, {
    "reference": 250497924,
    "invoice_id": 108349977,
    "amount": 74.99,
    "currency": "USD",
    "usd_amount": 74.99,
    "pay_amount": 275.21,
    "pay_currency": "AED",
    "gateway": "telr",
    "gateway_status": {"value": 0, "label": "Pending"},
    "system_status": {"value": 0, "label": "Pending"},
    "token": null,
    "type": {"value": 2, "label": "Deposit"},
    "date": "19 Dec 2020 08:47",
    "pay_time": null
  }, {
    "reference": 391978076,
    "invoice_id": null,
    "amount": 10000000000,
    "currency": "USD",
    "usd_amount": 10000000000,
    "pay_amount": 10000000000,
    "pay_currency": "AED",
    "gateway": "telr",
    "gateway_status": {"value": 0, "label": "Pending"},
    "system_status": {"value": 0, "label": "Pending"},
    "token": null,
    "type": {"value": 2, "label": "Deposit"},
    "date": "31 Oct 2020 07:28",
    "pay_time": null
  }, {
    "reference": 683733122,
    "invoice_id": null,
    "amount": 10000000000,
    "currency": "USD",
    "usd_amount": 10000000000,
    "pay_amount": 10000000000,
    "pay_currency": "AED",
    "gateway": "telr",
    "gateway_status": {"value": 0, "label": "Pending"},
    "system_status": {"value": 0, "label": "Pending"},
    "token": null,
    "type": {"value": 2, "label": "Deposit"},
    "date": "31 Oct 2020 07:27",
    "pay_time": null
  }, {
    "reference": 543397272,
    "invoice_id": null,
    "amount": 2321323,
    "currency": "USD",
    "usd_amount": 2321323,
    "pay_amount": 8519255,
    "pay_currency": "AED",
    "gateway": "telr",
    "gateway_status": {"value": 0, "label": "Pending"},
    "system_status": {"value": 0, "label": "Pending"},
    "token": null,
    "type": {"value": 2, "label": "Deposit"},
    "date": "31 Oct 2020 07:26",
    "pay_time": null
  }, {
    "reference": 601194547,
    "invoice_id": null,
    "amount": 22222222,
    "currency": "USD",
    "usd_amount": 22222222,
    "pay_amount": 81555552,
    "pay_currency": "AED",
    "gateway": "telr",
    "gateway_status": {"value": 0, "label": "Pending"},
    "system_status": {"value": 0, "label": "Pending"},
    "token": null,
    "type": {"value": 2, "label": "Deposit"},
    "date": "31 Oct 2020 07:25",
    "pay_time": null
  }, {
    "reference": 498596884,
    "invoice_id": null,
    "amount": 22222222,
    "currency": "USD",
    "usd_amount": 22222222,
    "pay_amount": 81555552,
    "pay_currency": "AED",
    "gateway": "telr",
    "gateway_status": {"value": 0, "label": "Pending"},
    "system_status": {"value": 0, "label": "Pending"},
    "token": null,
    "type": {"value": 2, "label": "Deposit"},
    "date": "31 Oct 2020 07:24",
    "pay_time": null
  }, {
    "reference": 403318101,
    "invoice_id": null,
    "amount": 2222222336,
    "currency": "USD",
    "usd_amount": 2222222336,
    "pay_amount": 8155555328,
    "pay_currency": "AED",
    "gateway": "telr",
    "gateway_status": {"value": 0, "label": "Pending"},
    "system_status": {"value": 0, "label": "Pending"},
    "token": null,
    "type": {"value": 2, "label": "Deposit"},
    "date": "31 Oct 2020 07:23",
    "pay_time": null
  }, {
    "reference": 772178459,
    "invoice_id": null,
    "amount": 222222,
    "currency": "USD",
    "usd_amount": 222222,
    "pay_amount": 815554.75,
    "pay_currency": "AED",
    "gateway": "telr",
    "gateway_status": {"value": 0, "label": "Pending"},
    "system_status": {"value": 0, "label": "Pending"},
    "token": null,
    "type": {"value": 2, "label": "Deposit"},
    "date": "31 Oct 2020 07:20",
    "pay_time": null
  }, {
    "reference": 840219745,
    "invoice_id": null,
    "amount": 3231332,
    "currency": "USD",
    "usd_amount": 3231332,
    "pay_amount": 11858988,
    "pay_currency": "AED",
    "gateway": "telr",
    "gateway_status": {"value": 0, "label": "Pending"},
    "system_status": {"value": 0, "label": "Pending"},
    "token": null,
    "type": {"value": 2, "label": "Deposit"},
    "date": "31 Oct 2020 05:41",
    "pay_time": null
  }, {
    "reference": 661849358,
    "invoice_id": null,
    "amount": 333333344,
    "currency": "IRR",
    "usd_amount": 1666.67,
    "pay_amount": 6116.68,
    "pay_currency": "AED",
    "gateway": "telr",
    "gateway_status": {"value": 0, "label": "Pending"},
    "system_status": {"value": 0, "label": "Pending"},
    "token": null,
    "type": {"value": 2, "label": "Deposit"},
    "date": "03 Oct 2020 08:35",
    "pay_time": null
  }, {
    "reference": 895176032,
    "invoice_id": 101299704,
    "amount": 10546.11,
    "currency": "AED",
    "usd_amount": 2873.6,
    "pay_amount": 10546.11,
    "pay_currency": "AED",
    "gateway": "telr",
    "gateway_status": {"value": 0, "label": "Pending"},
    "system_status": {"value": 0, "label": "Pending"},
    "token": null,
    "type": {"value": 2, "label": "Deposit"},
    "date": "03 Oct 2020 08:29",
    "pay_time": null
  }, {
    "reference": 262830771,
    "invoice_id": 109840221,
    "amount": 10984.31,
    "currency": "AED",
    "usd_amount": 2993,
    "pay_amount": 10984.31,
    "pay_currency": "AED",
    "gateway": "telr",
    "gateway_status": {"value": 0, "label": "Pending"},
    "system_status": {"value": 0, "label": "Pending"},
    "token": null,
    "type": {"value": 2, "label": "Deposit"},
    "date": "03 Oct 2020 08:26",
    "pay_time": null
  }, {
    "reference": 223412117,
    "invoice_id": 109840221,
    "amount": 10984.31,
    "currency": "AED",
    "usd_amount": 2993,
    "pay_amount": 10984.31,
    "pay_currency": "AED",
    "gateway": "telr",
    "gateway_status": {"value": 0, "label": "Pending"},
    "system_status": {"value": 0, "label": "Pending"},
    "token": null,
    "type": {"value": 2, "label": "Deposit"},
    "date": "03 Oct 2020 08:19",
    "pay_time": null
  }, {
    "reference": 517741993,
    "invoice_id": 108922767,
    "amount": 26.79,
    "currency": "USD",
    "usd_amount": 26.79,
    "pay_amount": 26.79,
    "pay_currency": "USD",
    "gateway": "credit",
    "gateway_status": {"value": 2, "label": "Paid"},
    "system_status": {"value": 2, "label": "Paid"},
    "token": null,
    "type": {"value": 1, "label": "Withdraw"},
    "date": "15 Aug 2020 07:08",
    "pay_time": "15 Aug 2020 07:08"
  }, {
    "reference": 481017384,
    "invoice_id": 105505950,
    "amount": 76.63,
    "currency": "AED",
    "usd_amount": 20.88,
    "pay_amount": 20.88,
    "pay_currency": "USD",
    "gateway": "credit",
    "gateway_status": {"value": 2, "label": "Paid"},
    "system_status": {"value": 2, "label": "Paid"},
    "token": null,
    "type": {"value": 1, "label": "Withdraw"},
    "date": "06 Aug 2020 07:48",
    "pay_time": "06 Aug 2020 07:48"
  }, {
    "reference": 119256926,
    "invoice_id": 101825548,
    "amount": 48.37,
    "currency": "AED",
    "usd_amount": 13.18,
    "pay_amount": 13.18,
    "pay_currency": "USD",
    "gateway": "credit",
    "gateway_status": {"value": 2, "label": "Paid"},
    "system_status": {"value": 2, "label": "Paid"},
    "token": null,
    "type": {"value": 1, "label": "Withdraw"},
    "date": "02 Aug 2020 06:12",
    "pay_time": "02 Aug 2020 06:12"
  }, {
    "reference": 788937267,
    "invoice_id": 102482074,
    "amount": 232.71,
    "currency": "AED",
    "usd_amount": 63.41,
    "pay_amount": 63.41,
    "pay_currency": "USD",
    "gateway": "credit",
    "gateway_status": {"value": 2, "label": "Paid"},
    "system_status": {"value": 2, "label": "Paid"},
    "token": null,
    "type": {"value": 1, "label": "Withdraw"},
    "date": "19 Jul 2020 06:21",
    "pay_time": "19 Jul 2020 06:21"
  }, {
    "reference": 578875730,
    "invoice_id": 102044981,
    "amount": 49.14,
    "currency": "AED",
    "usd_amount": 13.39,
    "pay_amount": 13.39,
    "pay_currency": "USD",
    "gateway": "credit",
    "gateway_status": {"value": 2, "label": "Paid"},
    "system_status": {"value": 2, "label": "Paid"},
    "token": null,
    "type": {"value": 1, "label": "Withdraw"},
    "date": "19 Jul 2020 06:17",
    "pay_time": "19 Jul 2020 06:17"
  },];
  const badgeGenerator = (s: TransactionType): ReactNode => {
    switch (s.gateway_status.value) {
      case 0://pending
        return <Badge type={'warning'} text={s.gateway_status.label}/>

      case 1://on hold
        return <Badge type={'warning'} text={s.gateway_status.label}/>

      case 2://paid
        return <Badge type={'success'} text={s.gateway_status.label}/>

      case 3://expired
        return <Badge type={'danger'} text={s.gateway_status.label}/>

      case 4://cancelled
        return <Badge type={'danger'} text={s.gateway_status.label}/>

      case 5://declined
        return <Badge type={'danger'} text={s.gateway_status.label}/>

      default:
        return <AppText>-</AppText>
    }
  }
  return (
    <>
      <TableList<TransactionType>
        title={'my bookings'}
        status={'ok'}
        data={dummy_data}
        columns={[
          {index: 'invoice_id', label: translate('invoice-no')},
          {
            index: 'gateway_status',
            label: translate('status'),
            render: s => badgeGenerator(s)
          },
          {
            index: 'type',
            label: translate('type'),
            render: s => <AppText>{s.type.label}</AppText>
          },
          {index: 'date', label: translate('create-date'),},
          {index: 'pay_time', label: translate('pay-date'),},
          {
            index: 'amount',
            label: translate('amount'),
            render: s => <AppText style={[Style.text__bold, Style.text__important]}>{s.amount} {s.currency}</AppText>
          },
          {index: 'gateway',},
        ]}
        filters={[
          {label: translate('pending'), handler: item => item.gateway_status.value === 0},
          {label: translate('on-hold'), handler: item => item.gateway_status.value === 1},
          {label: translate('paid'), handler: item => item.gateway_status.value === 2},
          {label: translate('expired'), handler: item => item.gateway_status.value === 3},
          {label: translate('cancelled'), handler: item => item.gateway_status.value === 4},
          {label: translate('declined'), handler: item => item.gateway_status.value === 5},
        ]}
        click={s => console.log(s)}
        input_search={{index: 'invoice_id', label_text: translate('enter-your-invoice-id')}}
      />
    </>
  );
};

export default MyTransactions;

