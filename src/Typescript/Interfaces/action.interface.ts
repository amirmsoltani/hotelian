export interface ActionInterface<action extends string = string, payload = any> {
  type: action;
  payload: payload;
}
