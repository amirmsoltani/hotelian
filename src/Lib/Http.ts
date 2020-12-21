import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {globalStore} from '../Store';

export default {
  headers() {
    const {
      appReducer: {
        currency, language, track_code,
      },
      userReducer: {user_token, status},
    } = globalStore.getState();
    const header: any = {'X-Currency': currency, 'X-Language': language, 'X-USER-TRACK-CODE': track_code};
    if (user_token && status === 'ok') {
      header.authorization = 'Bearer ' + user_token;
    }
    return header;
  },

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    config = {...config, headers: {...(config.headers ? config.headers : {}), ...this.headers()}};
    return axios.request(config);
  },
};

