import React from 'react';

import TableList from "../../Components/table-list/table-list";
import {BookingType, ThemeType} from "../../Typescript/Types";
import {translate} from "../../Lib/Languages";
import {Badge} from "../../Components";
import {AppText} from "../../Containers";
import {Style} from "../../Styles";

const MyBookings = () => {
  const dummy_data: BookingType[] = [
    {
      currency: "USD",
      date: "15 Aug 2020",
      hotel_name: "Motion Gran Via 1",
      price: "11",
      reference: "H396613010",
      reserve_id: "410",
      service_type: {value: "Hotel", label: "Hotel"},
      status: {value: "Confirmed", label: "Confirmed"},
    },
    {
      currency: "AED",
      date: "15 Aug 2020",
      hotel_name: "Motion Gran Via 2",
      price: "111",
      reference: "H396613011",
      reserve_id: "411",
      service_type: {value: "Hotel", label: "Hotel"},
      status: {value: "Cancellation Pending", label: "Cancellation Pending"},
    },
    {
      currency: "IRR",
      date: "15 Aug 2020",
      hotel_name: "Motion Gran Via 3",
      price: "1111",
      reference: "H396613012",
      reserve_id: "412",
      service_type: {value: "Hotel", label: "Hotel"},
      status: {value: "Cancelled", label: "Cancelled"},
    }
  ];
  const badge_color = (status: string): ThemeType => {
    switch (status) {
      case 'Confirmed':
        return 'success';
      case 'Cancelled':
        return 'danger';
      case 'Cancellation Pending':
        return 'warning';
      default:
        return 'primary';
    }
  }
  return (
    <>
      <TableList<BookingType>
        title={'my bookings'}
        status={'ok'}
        data={dummy_data}
        columns={[
          {index: 'reference', label: translate('reference')},
          {
            index: 'status',
            label: translate('status'),
            render: s => <Badge type={badge_color(s.status.value)} text={s.status.label}/>
          },
          {index: 'hotel_name', label: translate('hotel-name'),},
          {index: 'date', label: translate('date'),},
          {
            index: 'price',
            label: translate('price'),
            render: s => <AppText style={[Style.text__bold, Style.text__important]}>{s.price} {s.currency}</AppText>
          },
        ]}
        filters={[
          {label: translate('confirmed'), handler: item => item.status.value === 'Confirmed'},
          {label: translate('cancelled'), handler: item => item.status.value === 'Cancelled'},
          {label: translate('cancellation-pending'), handler: item => item.status.value === 'Cancellation Pending'},
        ]}
        click={s => console.log(s)}
        input_search={{index: 'reference', label_text: translate('enter-your-booking-reference')}}
      />
    </>
  );
};

export default MyBookings;

