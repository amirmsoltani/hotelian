type gateway_status = {
  value: number;
  label: string;
}

type system_status = {
  value: number;
  label: string;
}

type t_type = {
  value: number;
  label: "Deposit" | 'Withdraw';
}


export type TransactionType = {
  amount: number;
  currency: string;
  date: string;
  gateway: string;
  gateway_status: gateway_status;
  invoice_id: number | null;
  pay_amount: number;
  pay_currency: string;
  pay_time: string | null;
  reference: number;
  system_status: system_status;
  token: null
  type: t_type;
  usd_amount: number;
}
