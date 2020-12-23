import React from "react";

import TableList from "../../Components/table-list/table-list";
import {BookingType, ThemeType} from "../../Typescript/Types";
import {translate} from "../../Lib/Languages";
import {Badge} from "../../Components";
import {AppText} from "../../Containers";
import {Style} from "../../Styles";
import {status_type} from "../../Components/table-list/types";

type StateType = {
  status: status_type;
}
const MyBookings = () => {
  const dummy_data: BookingType[] = [
    {
      reserve_id: "417",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H396613012",
      hotel_name: "Motion Gran Via",
      date: "15 Aug 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "26.79",
      currency: "USD",
    },
    {
      reserve_id: "415",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H629498165",
      hotel_name: "Hostel Trustever",
      date: "06 Aug 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "76.63",
      currency: "AED",
    },
    {
      reserve_id: "414",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H659083659",
      hotel_name: "Motion Gran Via",
      date: "02 Aug 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "48.37",
      currency: "AED",
    },
    {
      reserve_id: "411",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H182147842",
      hotel_name: "Motion Gran Via",
      date: "19 Jul 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "232.71",
      currency: "AED",
    },
    {
      reserve_id: "410",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H154286544",
      hotel_name: "Motion Gran Via",
      date: "19 Jul 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "49.14",
      currency: "AED",
    },
    {
      reserve_id: "408",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H693094479",
      hotel_name: "Motion Gran Via",
      date: "18 Jul 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "42.68",
      currency: "AED",
    },
    {
      reserve_id: "407",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H838465752",
      hotel_name: "Motion Gran Via",
      date: "18 Jul 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "42.46",
      currency: "AED",
    },
    {
      reserve_id: "406",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H739293136",
      hotel_name: "Motion Gran Via",
      date: "18 Jul 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "41.25",
      currency: "AED",
    },
    {
      reserve_id: "405",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H577811730",
      hotel_name: "Motion Gran Via",
      date: "18 Jul 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "42.17",
      currency: "AED",
    },
    {
      reserve_id: "402",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H438138040",
      hotel_name: "Bastardo Hostel",
      date: "13 Jul 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "12000.00",
      currency: "IRR",
    },
    {
      reserve_id: "400",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H533243844",
      hotel_name: "Bastardo Hostel",
      date: "13 Jul 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "12000.00",
      currency: "IRR",
    },
    {
      reserve_id: "399",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H856943898",
      hotel_name: "Bastardo Hostel",
      date: "13 Jul 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "12000.00",
      currency: "IRR",
    },
    {
      reserve_id: "397",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H306459512",
      hotel_name: "Bastardo Hostel",
      date: "13 Jul 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "12000.00",
      currency: "IRR",
    },
    {
      reserve_id: "387",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H728545350",
      hotel_name: "Rc Miguel Angel",
      date: "11 Jul 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "81.32",
      currency: "USD",
    },
    {
      reserve_id: "386",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H153073028",
      hotel_name: "Motion Gran Via",
      date: "11 Jul 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "88.15",
      currency: "USD",
    },
    {
      reserve_id: "378",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H629582594",
      hotel_name: "Motion Gran Via",
      date: "09 Jul 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "48.43",
      currency: "USD",
    },
    {
      reserve_id: "288",
      status: {
        value: "Cancelled",
        label: "Cancelled",
      },
      reference: "H291632593",
      hotel_name: "Hotel Santo Domingo",
      date: "04 Jul 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "726.95",
      currency: "USD",
    },
    {
      reserve_id: "273",
      status: {
        value: "Cancelled",
        label: "Cancelled",
      },
      reference: "H749376383",
      hotel_name: "Les Pasteliers",
      date: "04 Jul 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "145.21",
      currency: "USD",
    },
    {
      reserve_id: "270",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H807031861",
      hotel_name: "Motion Gran Via",
      date: "02 Jul 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "13.20",
      currency: "USD",
    },
    {
      reserve_id: "269",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H475222654",
      hotel_name: "Motion Chueca",
      date: "02 Jul 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "12.21",
      currency: "USD",
    },
    {
      reserve_id: "254",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H961227490",
      hotel_name: "Hostal Los Perales",
      date: "23 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "267.13",
      currency: "USD",
    },
    {
      reserve_id: "252",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H542436201",
      hotel_name: "Hostal Los Perales",
      date: "23 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "267.13",
      currency: "USD",
    },
    {
      reserve_id: "245",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H134078277",
      hotel_name: "Motion Gran Via",
      date: "22 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "23.90",
      currency: "USD",
    },
    {
      reserve_id: "235",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H548101480",
      hotel_name: "Motion Gran Via",
      date: "22 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "20.79",
      currency: "EUR",
    },
    {
      reserve_id: "230",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H939918751",
      hotel_name: "Premiere Classe Le Blanc Mesnil",
      date: "22 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "104.40",
      currency: "EUR",
    },
    {
      reserve_id: "224",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H689262670",
      hotel_name: "Hotel Trafalgar",
      date: "22 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "87.42",
      currency: "EUR",
    },
    {
      reserve_id: "222",
      status: {
        value: "Confirmed",
        label: "Confirmed",
      },
      reference: "H174517125",
      hotel_name: "Elba Madrid Alcalá",
      date: "22 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "343.95",
      currency: "AED",
    },
    {
      reserve_id: "221",
      status: {
        value: "Cancellation Pending",
        label: "Cancellation Pending",
      },
      reference: "H277608726",
      hotel_name: "Motion Gran Via",
      date: "22 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "12.95",
      currency: "EUR",
    },
    {
      reserve_id: "209",
      status: {
        value: "Cancellation Pending",
        label: "Cancellation Pending",
      },
      reference: "H953379970",
      hotel_name: "Hôtel Concorde Montparnasse",
      date: "21 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "176.22",
      currency: "USD",
    },
    {
      reserve_id: "208",
      status: {
        value: "Cancelled",
        label: "Cancelled",
      },
      reference: "H115719564",
      hotel_name: "Generator Madrid",
      date: "21 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "29.96",
      currency: "USD",
    },
    {
      reserve_id: "206",
      status: {
        value: "Cancelled",
        label: "Cancelled",
      },
      reference: "H479390590",
      hotel_name: "Hostal Rober",
      date: "21 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "131.15",
      currency: "USD",
    },
    {
      reserve_id: "197",
      status: {
        value: "Cancellation Pending",
        label: "Cancellation Pending",
      },
      reference: "H740927890",
      hotel_name: "Ok Hostel Madrid",
      date: "21 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "72.59",
      currency: "USD",
    },
    {
      reserve_id: "196",
      status: {
        value: "Cancellation Pending",
        label: "Cancellation Pending",
      },
      reference: "H334016765",
      hotel_name: "Motion Gran Via",
      date: "21 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "14.46",
      currency: "USD",
    },
    {
      reserve_id: "194",
      status: {
        value: "Cancelled",
        label: "Cancelled",
      },
      reference: "H862089916",
      hotel_name: "Rc Miguel Angel",
      date: "13 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "86.01",
      currency: "USD",
    },
    {
      reserve_id: "190",
      status: {
        value: "Cancellation Pending",
        label: "Cancellation Pending",
      },
      reference: null,
      hotel_name: "Ok Hostel Madrid",
      date: "09 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "201.93",
      currency: "USD",
    },
    {
      reserve_id: "187",
      status: {
        value: "Cancellation Pending",
        label: "Cancellation Pending",
      },
      reference: null,
      hotel_name: "Motion Chueca",
      date: "13 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "13.83",
      currency: "USD",
    },
    {
      reserve_id: "184",
      status: {
        value: "Cancelled",
        label: "Cancelled",
      },
      reference: null,
      hotel_name: "Motion Chueca",
      date: "08 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "14.18",
      currency: "USD",
    },
    {
      reserve_id: "165",
      status: {
        value: "Cancelled",
        label: "Cancelled",
      },
      reference: null,
      hotel_name: "Royalton Hotel Dubai",
      date: "14 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "126.43",
      currency: "AED",
    },
    {
      reserve_id: "133",
      status: {
        value: "Cancelled",
        label: "Cancelled",
      },
      reference: null,
      hotel_name: "Motion Gran Via",
      date: "28 May 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "12.84",
      currency: "USD",
    },
    {
      reserve_id: "112",
      status: {
        value: "Cancellation Pending",
        label: "Cancellation Pending",
      },
      reference: null,
      hotel_name: "Good Rooms",
      date: "23 May 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "85.94",
      currency: "USD",
    },
    {
      reserve_id: "110",
      status: {
        value: "Cancellation Pending",
        label: "Cancellation Pending",
      },
      reference: null,
      hotel_name: "Good Rooms",
      date: "23 May 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "80.52",
      currency: "USD",
    },
    {
      reserve_id: "109",
      status: {
        value: "Cancellation Pending",
        label: "Cancellation Pending",
      },
      reference: null,
      hotel_name: "Good Rooms",
      date: "23 May 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "68.75",
      currency: "USD",
    },
    {
      reserve_id: "108",
      status: {
        value: "Cancelled",
        label: "Cancelled",
      },
      reference: null,
      hotel_name: "Hostal Tokio",
      date: "29 Nov 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "215.99",
      currency: "USD",
    },
    {
      reserve_id: "106",
      status: {
        value: "Cancellation Pending",
        label: "Cancellation Pending",
      },
      reference: null,
      hotel_name: "Motion Gran Via",
      date: "23 May 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "49.36",
      currency: "USD",
    },
    {
      reserve_id: "104",
      status: {
        value: "Cancelled",
        label: "Cancelled",
      },
      reference: null,
      hotel_name: "Rc Miguel Angel",
      date: "23 May 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "36.78",
      currency: "USD",
    },
    {
      reserve_id: "103",
      status: {
        value: "Cancelled",
        label: "Cancelled",
      },
      reference: null,
      hotel_name: "Rc Miguel Angel",
      date: "23 May 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "36.78",
      currency: "USD",
    },
    {
      reserve_id: "102",
      status: {
        value: "Cancelled",
        label: "Cancelled",
      },
      reference: null,
      hotel_name: "Hostal El Pilar",
      date: "14 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "169.66",
      currency: "USD",
    },
    {
      reserve_id: "101",
      status: {
        value: "Cancellation Pending",
        label: "Cancellation Pending",
      },
      reference: null,
      hotel_name: "Motion Chueca",
      date: "23 May 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "27.49",
      currency: "USD",
    },
    {
      reserve_id: "91",
      status: {
        value: "Cancelled",
        label: "Cancelled",
      },
      reference: null,
      hotel_name: "Motion Gran Via",
      date: "14 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "12.81",
      currency: "USD",
    },
    {
      reserve_id: "78",
      status: {
        value: "Cancelled",
        label: "Cancelled",
      },
      reference: null,
      hotel_name: "Motion Gran Via",
      date: "14 Jun 2020",
      service_type: {
        value: "Hotel",
        label: "Hotel",
      },
      price: "16.35",
      currency: "USD",
    },
  ];

  const badge_color = (status: string): ThemeType => {
    switch (status) {
      case "Confirmed":
        return "success";
      case "Cancelled":
        return "danger";
      case "Cancellation Pending":
        return "warning";
      default:
        return "primary";
    }
  };
  return (
    <>
      <TableList<BookingType>
        title={"my bookings"}
        status={'ok'}
        data={dummy_data}
        columns={[
          {index: "reference", label: translate("reference")},
          {
            index: "status",
            label: translate("status"),
            render: (s) => (
              <Badge type={badge_color(s.status.value)} text={s.status.label}/>
            ),
          },
          {index: "hotel_name", label: translate("hotel-name")},
          {index: "date", label: translate("date")},
          {
            index: "price",
            label: translate("price"),
            render: (s) => (
              <AppText style={[Style.text__bold, Style.text__important]}>
                {s.price} {s.currency}
              </AppText>
            ),
          },
        ]}
        filters={[
          {
            label: translate("confirmed"),
            handler: (item) => item.status.value === "Confirmed",
          },
          {
            label: translate("cancelled"),
            handler: (item) => item.status.value === "Cancelled",
          },
          {
            label: translate("cancellation-pending"),
            handler: (item) => item.status.value === "Cancellation Pending",
          },
        ]}
        click={(s) => console.log(s)}
        input_search={{
          index: "reference",
          label_text: translate("enter-your-booking-reference"),
        }}
      />
    </>
  );
};

export default MyBookings;
