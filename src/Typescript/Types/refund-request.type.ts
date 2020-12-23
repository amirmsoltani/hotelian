type RefundRequestServiceType = {
  label: string;
  value: string;
}

type RefundRequestStatusType = {
  label: string;
  value: string;
}


export type RefundRequestType = {
  create_date: string;
  currency: string;
  reference: string | null;
  refund_amount: number;
  service_type: RefundRequestServiceType;
  status: RefundRequestStatusType;
}
