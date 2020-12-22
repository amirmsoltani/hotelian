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
      "invoice_id": "108922767",
      "amount": "26.79",
      "currency": "USD",
      "total_amount": "26.79",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "15 Aug 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "105505950",
      "amount": "76.63",
      "currency": "AED",
      "total_amount": "76.63",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "06 Aug 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "101825548",
      "amount": "48.37",
      "currency": "AED",
      "total_amount": "48.37",
      "status": {
        "value": "NO",
        "label": "NO"
      },
      "date": "02 Aug 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "102482074",
      "amount": "232.71",
      "currency": "AED",
      "total_amount": "232.71",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "19 Jul 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "102044981",
      "amount": "49.14",
      "currency": "AED",
      "total_amount": "49.14",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "19 Jul 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "105977062",
      "amount": "42.68",
      "currency": "AED",
      "total_amount": "42.68",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "18 Jul 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "103375345",
      "amount": "42.46",
      "currency": "AED",
      "total_amount": "42.46",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "18 Jul 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "109623207",
      "amount": "41.25",
      "currency": "AED",
      "total_amount": "41.25",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "18 Jul 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "105199368",
      "amount": "42.17",
      "currency": "AED",
      "total_amount": "42.17",
      "status": {
        "value": "NO",
        "label": "NO"
      },
      "date": "18 Jul 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "108846538",
      "amount": "12000.00",
      "currency": "IRR",
      "total_amount": "12000.00",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "13 Jul 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "102124311",
      "amount": "12000.00",
      "currency": "IRR",
      "total_amount": "12000.00",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "13 Jul 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "106938392",
      "amount": "12000.00",
      "currency": "IRR",
      "total_amount": "12000.00",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "13 Jul 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "101578898",
      "amount": "12000.00",
      "currency": "IRR",
      "total_amount": "12000.00",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "13 Jul 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "103266649",
      "amount": "81.32",
      "currency": "USD",
      "total_amount": "81.32",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "11 Jul 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "105942251",
      "amount": "88.15",
      "currency": "USD",
      "total_amount": "88.15",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "11 Jul 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "103795253",
      "amount": "48.43",
      "currency": "USD",
      "total_amount": "48.43",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "09 Jul 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "108859506",
      "amount": "726.95",
      "currency": "USD",
      "total_amount": "726.95",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "04 Jul 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "105555050",
      "amount": "145.21",
      "currency": "USD",
      "total_amount": "145.21",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "02 Jul 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "101518320",
      "amount": "126.43",
      "currency": "AED",
      "total_amount": "126.43",
      "status": {
        "value": "No",
        "label": "No"
      },
      "date": "01 Jun 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "101689728",
      "amount": "12.84",
      "currency": "USD",
      "total_amount": "12.84",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "28 May 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "109545377",
      "amount": "85.94",
      "currency": "USD",
      "total_amount": "85.94",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "23 May 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "107009135",
      "amount": "80.52",
      "currency": "USD",
      "total_amount": "80.52",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "23 May 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "106048476",
      "amount": "68.75",
      "currency": "USD",
      "total_amount": "68.75",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "23 May 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "108022949",
      "amount": "215.99",
      "currency": "USD",
      "total_amount": "215.99",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "23 May 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "107237391",
      "amount": "49.36",
      "currency": "USD",
      "total_amount": "49.36",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "23 May 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "105947320",
      "amount": "36.78",
      "currency": "USD",
      "total_amount": "36.78",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "23 May 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "104448954",
      "amount": "36.78",
      "currency": "USD",
      "total_amount": "36.78",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "23 May 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "107221563",
      "amount": "169.66",
      "currency": "USD",
      "total_amount": "169.66",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "23 May 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "103343930",
      "amount": "27.49",
      "currency": "USD",
      "total_amount": "27.49",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "23 May 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "101154355",
      "amount": "12.81",
      "currency": "USD",
      "total_amount": "12.81",
      "status": {
        "value": "Yes",
        "label": "Yes"
      },
      "date": "21 May 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    },
    {
      "invoice_id": "101832450",
      "amount": "16.35",
      "currency": "USD",
      "total_amount": "16.35",
      "status": {
        "value": "NO",
        "label": "NO"
      },
      "date": "18 May 2020",
      "service_type": {
        "value": "Hotel",
        "label": "Hotel"
      }
    }
  ];
  const badgeGenerator = (s: InvoiceType): ReactNode => {
    switch (s.status.value) {
      case 'Yes':
        return <Badge type={'success'} text={s.status.label}/>
      case 'No':
        return <Badge type={'danger'} text={s.status.label}/>
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
            index: 'total_amount',
            label: translate('total'),
            render: s => <AppText style={[Style.text__bold, Style.text__important]}>{s.total_amount} {s.currency}</AppText>
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

