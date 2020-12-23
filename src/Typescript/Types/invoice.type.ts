type InvoiceServiceType = {
  label: string;
  value: string;
}

type InvoiceStatusType = {
  label: string;
  value: string;
}


export type InvoiceType = {
  amount: string;
  currency: string;
  date: string;
  invoice_id: string;
  service_type: InvoiceServiceType;
  status: InvoiceStatusType;
  total_amount: string;
}
