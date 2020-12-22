import React, {ReactNode} from 'react';

import TableList from "../../Components/table-list/table-list";
import {SupportType} from "../../Typescript/Types";
import {translate} from "../../Lib/Languages";
import {Badge} from "../../Components";
import {AppText} from "../../Containers";

const Support = () => {
  const dummy_data: SupportType[] = [
    {
      "ticket_id": 10,
      "department": {
        "value": "Technical Department",
        "label": "Technical Department"
      },
      "service": {
        "value": "Hotel",
        "label": "Hotel"
      },
      "priority": {
        "value": "Normal",
        "label": "Normal"
      },
      "summary": "dfhdfhdfh",
      "description": "dfhdfh dfh dfh dfh",
      "status": {
        "value": "New",
        "label": "New"
      },
      "time": "30 Nov 2020 05:44",
      "attach": {
        "link": "http://192.168.100.24:9093/_N5msKmfYwFnA_vWxPuFL8T5jLmmt8PlztR48Lj0Ul4eKbKxNRJuSbTDpVxA3edE.jpg",
        "label": "1427921.jpg"
      }
    },
    {
      "ticket_id": 9,
      "department": {
        "value": "Technical Department",
        "label": "Technical Department"
      },
      "service": {
        "value": "Hotel",
        "label": "Hotel"
      },
      "priority": {
        "value": "Medium",
        "label": "Medium"
      },
      "summary": "\"'/\\",
      "description": "asdsada",
      "status": {
        "value": "New",
        "label": "New"
      },
      "time": "10 Nov 2020 07:03",
      "attach": null
    },
    {
      "ticket_id": 8,
      "department": {
        "value": "Support Department",
        "label": "Support Department"
      },
      "service": {
        "value": "Hotel",
        "label": "Hotel"
      },
      "priority": {
        "value": "Medium",
        "label": "Medium"
      },
      "summary": "sdgsdg",
      "description": "s gsd gsd",
      "status": {
        "value": "Closed",
        "label": "Closed"
      },
      "time": "15 Jun 2020 08:10",
      "attach": {
        "link": "http://192.168.100.24:9093/-yHfG8AaUvEmHWTmZb2Qw1whRuR5P-XHE-DjVnJyA5lRMnEFUyRCTSCqnnJSgeYn.zip",
        "label": "Translates_en-uk.zip"
      }
    },
    {
      "ticket_id": 7,
      "department": {
        "value": "Support Department",
        "label": "Support Department"
      },
      "service": {
        "value": "Hotel",
        "label": "Hotel"
      },
      "priority": {
        "value": "Medium",
        "label": "Medium"
      },
      "summary": "sdgsdg",
      "description": "s gsd gsd",
      "status": {
        "value": "Closed",
        "label": "Closed"
      },
      "time": "15 Jun 2020 08:10",
      "attach": {
        "link": "http://192.168.100.24:9093/8BpAvabuF4StQiclwU3MOCfNAW-HmHHhp6-QKaems6jGYn0PsgMvgL33N22FaFq5.zip",
        "label": "Translates_en-uk.zip"
      }
    },
    {
      "ticket_id": 6,
      "department": {
        "value": "Support Department",
        "label": "Support Department"
      },
      "service": {
        "value": "Hotel",
        "label": "Hotel"
      },
      "priority": {
        "value": "Medium",
        "label": "Medium"
      },
      "summary": "sdgsdg",
      "description": "s gsd gsd",
      "status": {
        "value": "Closed",
        "label": "Closed"
      },
      "time": "15 Jun 2020 08:08",
      "attach": {
        "link": "http://192.168.100.24:9093/-HF1Je9xDgz0PWVrIeblcRXx6SlJGxVk66dBOWDvtsvlX-6nlMhxh38BLZKwRPdj.zip",
        "label": "Translates_en-uk.zip"
      }
    },
    {
      "ticket_id": 5,
      "department": {
        "value": "Support Department",
        "label": "Support Department"
      },
      "service": {
        "value": "Hotel",
        "label": "Hotel"
      },
      "priority": {
        "value": "Medium",
        "label": "Medium"
      },
      "summary": "afsfasf",
      "description": "afasf asf asf a",
      "status": {
        "value": "New",
        "label": "New"
      },
      "time": "15 Jun 2020 08:04",
      "attach": {
        "link": "http://192.168.100.24:9093/oQjccfAXPVP1qB_aV5ZXyICVplSW7AFIjaOHqh1aP2MNTOB26EDL05waHlkPwcXu.zip",
        "label": "Translates_en-uk.zip"
      }
    },
    {
      "ticket_id": 1,
      "department": {
        "value": "Technical Department",
        "label": "Technical Department"
      },
      "service": {
        "value": "Hotel",
        "label": "Hotel"
      },
      "priority": {
        "value": "Normal",
        "label": "Normal"
      },
      "summary": "Salam in ticket test ast",
      "description": "Ok guys we need to talk, and i assure you we need this.",
      "status": {
        "value": "New",
        "label": "New"
      },
      "time": "09 May 2020 13:53",
      "attach": null
    },
    {
      "ticket_id": 4,
      "department": {
        "value": "Support Department",
        "label": "Support Department"
      },
      "service": {
        "value": "Hotel",
        "label": "Hotel"
      },
      "priority": {
        "value": "High",
        "label": "High"
      },
      "summary": "Salam in ticket test ast",
      "description": "Ok guys we need to talk, and i assure you we need this.",
      "status": {
        "value": "New",
        "label": "New"
      },
      "time": "07 May 2020 09:15",
      "attach": null
    },
    {
      "ticket_id": 3,
      "department": {
        "value": "Technical Department",
        "label": "Technical Department"
      },
      "service": {
        "value": "Hotel",
        "label": "Hotel"
      },
      "priority": {
        "value": "Normal",
        "label": "Normal"
      },
      "summary": "Salam in ticket test ast",
      "description": "Ok guys we need to talk, and i assure you we need this.",
      "status": {
        "value": "New",
        "label": "New"
      },
      "time": "07 May 2020 09:14",
      "attach": null
    },
    {
      "ticket_id": 2,
      "department": {
        "value": "Technical Department",
        "label": "Technical Department"
      },
      "service": {
        "value": "Hotel",
        "label": "Hotel"
      },
      "priority": {
        "value": "Normal",
        "label": "Normal"
      },
      "summary": "Salam in ticket test ast",
      "description": "Ok guys we need to talk, and i assure you we need this.",
      "status": {
        "value": "New",
        "label": "New"
      },
      "time": "07 May 2020 09:13",
      "attach": null
    }
  ];

  //status
  const badgeGenerator_1 = (s: SupportType): ReactNode => {
    switch (s.status.value) {
      case 'New':
        return <Badge type={'info'} text={s.status.label}/>
      case 'Closed':
        return <Badge type={'danger'} text={s.status.label}/>
      case 'Assigned':
        return <Badge type={'success'} text={s.status.label}/>
      default:
        return <AppText>-</AppText>
    }
  }

  //priority
  const badgeGenerator_2 = (s: SupportType): ReactNode => {
    switch (s.priority.value) {
      case 'High':
        return <Badge type={'danger'} text={s.status.label}/>
      case 'Medium':
        return <Badge type={'warning'} text={s.status.label}/>
      case 'Normal':
        return <Badge type={'info'} text={s.status.label}/>
      default:
        return <AppText>-</AppText>
    }
  }

  //attachment
  const badgeGenerator_3 = (s: SupportType): ReactNode => {
    if (s.attach) {
      return <AppText>{s.attach.label}</AppText>
    }
    return <AppText>-</AppText>
  }

  return (
    <>
      <TableList<SupportType>
        title={'my bookings'}
        status={'ok'}
        data={dummy_data}
        columns={[
          {
            index: 'priority',
            label: translate('priority'),
            render: s => badgeGenerator_2(s),
          },
          {
            index: 'service',
            label: translate('service'),
            render: s => <AppText>{s.service.label}</AppText>,
          },
          {index: 'time', label: translate('date')},
          {index: 'summary', label: translate('subject')},
          {
            index: 'department',
            label: translate('status'),
            render: s => <AppText>{s.department.label}</AppText>,
          },
          {
            index: 'attach',
            label: translate('status'),
            render: s => badgeGenerator_3(s),
          },
        ]}
        filters={[
          {label: translate('status-assigned'), handler: item => item.status.value === 'Assigned'},
          {label: translate('status-closed'), handler: item => item.status.value === 'Closed'},
          {label: translate('status-new'), handler: item => item.status.value === 'New'},

          {label: translate('Marketing Department'), handler: item => item.department.value === 'Marketing Department'},
          {label: translate('Support Department'), handler: item => item.department.value === 'Support Department'},
          {label: translate('Technical Department'), handler: item => item.department.value === 'Technical Department'},

          {label: translate('approved'), handler: item => item.priority.value === 'High'},
          {label: translate('pending'), handler: item => item.priority.value === 'Normal'},
          {label: translate('rejected'), handler: item => item.priority.value === 'Medium'},
        ]}
        click={s => console.log(s)}
        input_search={{index: 'summary', label_text: translate('enter-ticket-summary')}}
      />
    </>
  );
};

export default Support;

