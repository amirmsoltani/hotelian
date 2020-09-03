export interface HttpResponseActionInterface<action, type = string> {
  readonly type: type;
  readonly payload: action;
}
