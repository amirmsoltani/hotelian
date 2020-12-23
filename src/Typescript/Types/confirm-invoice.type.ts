export type ConfirmInvoiceType = {
  invoice_number: number;
  currency: string;
  amount: number;
  off_amount: number;
  total_amount: number;
  applied_gift_code: string | null;
  is_paid: {value: string, label: string}
}
