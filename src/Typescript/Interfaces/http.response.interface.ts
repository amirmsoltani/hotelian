import {AxiosResponse} from 'axios';

export interface HttpResponseInterface<result> extends AxiosResponse {
  data: {
    ok: boolean;
    result: result
  };
}
