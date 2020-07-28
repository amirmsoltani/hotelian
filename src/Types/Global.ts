export interface ServerData {
  ok: boolean;
}

export interface ServerResponse {
  status: number;
  data: ServerData;
}

export interface Action {
  type: string;
}
