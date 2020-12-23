export type ConfirmInvoiceType = {
  invoice_number: number;
  currency: string;

  //initial price
  amount: number;

  //discount amount
  off_amount: number;

  //applied discount to amount
  total_amount: number;

  applied_gift_code: string | null;
  is_paid: {value: string, label: string}
}
