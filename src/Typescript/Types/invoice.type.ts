export type InvoiceServiceType = {
  label: string;
  value: string;
}

export type InvoiceStatusType = {
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
  total: string;
}
