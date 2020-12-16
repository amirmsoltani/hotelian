import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {globalStore} from '../Store';

export default {
  headers() {
    const {currency, language, track_code} = globalStore.getState().appReducer;
    return {'X-Currency': currency, 'X-Language': language, 'X-USER-TRACK-CODE': track_code};
  },

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    config = {...config, headers: {...(config.headers ? config.headers : {}), ...this.headers()}};
    return axios.request(config);
  },
};

