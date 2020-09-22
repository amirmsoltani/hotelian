import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {globalStore} from '../Store';

export default {
  headers() {
    const {currency, language} = globalStore.getState().appReducer;
    return {'X-Currency': currency, 'X-Language': language};
  },

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    config = {...config, headers: {...(config.headers ? config.headers : {}), ...this.headers()}};
    return axios.request(config);
  },
};
