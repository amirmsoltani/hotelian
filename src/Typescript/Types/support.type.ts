type SupportAttach = {
  label: string;
  link: string;
};

type SupportStatus = {
  value: 'New' | 'Closed' | 'Assigned';
  label: string;
};

type SupportService = {
  value: 'Hotel';
  label: string;
};

type SupportPriority = {
  value: 'Medium' | 'Normal' | 'High';
  label: string;
}

type SupportDepartment = {
  value: 'Marketing Department'|'Technical Department'|'Support Department';
  label: string;
}

export type SupportType = {
  attach: SupportAttach | null;
  department: SupportDepartment;
  description: string;
  priority: SupportPriority;
  service: SupportService;
  status: SupportStatus;
  summary: string;
  ticket_id: number;
  time: string;
}
