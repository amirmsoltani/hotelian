export interface HttpRequestActionInterface<type extends string = string, target extends string = string, method extends string = 'GET' | 'POST', response = any, body = any> {
  readonly type: type;
  readonly url: string;
  readonly method: method;
  response?: response;
  target: target;
  body?: body;
  debounce?: number
}
