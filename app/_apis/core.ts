import { HTTP_STATUS_CODE } from '@constants/http';
import { isExpiredAccessToken, storage } from '@lib/util/storage';
import axios, { type AxiosResponse } from 'axios';

import { authApi } from './auth';

export const HTTP_BASE_URL =
  process.env.NODE_ENV === 'production' ? '' : process.env.NEXT_PUBLIC_LOCAL_BASE_URL;

const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create({
  baseURL: HTTP_BASE_URL,
  ...options,
});

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data.data;
  },
  async error => {
    const {
      config: originalRequest,
      response: { status },
    } = error;

    /**
     * [status:401] Access Token이 만료된 경우 Refresh Token으로 재발급 후, api 재요청
     */
    if (status === HTTP_STATUS_CODE.UNAUTHORIZED) {
      const { id_token, refresh_token } = await authApi.silentRefresh();

      setAccessToken(id_token);
      storage.setAccessToken(id_token);

      if (isExpiredAccessToken(refresh_token)) {
        storage.setRefreshToken(refresh_token);
      }

      return axios(originalRequest);
    }

    return Promise.reject(error);
  },
);

export const setAccessToken = (token: string) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeAccessToken = () => {
  instance.defaults.headers.common['Authorization'] = '';
};

export default instance;
