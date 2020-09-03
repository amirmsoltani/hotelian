import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import store from '../Store';

export default {
  headers() {
    const {currency, language} = store.getState().userReducer;
    return {'X-Currency': currency, 'X-Language': language};
  },

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    config = {...config, headers: {...(config.headers ? config.headers : {}), ...this.headers()}};
    return axios.request(config);
  },
};
