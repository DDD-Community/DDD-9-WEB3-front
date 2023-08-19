import { AUTH_TOKEN } from '@constants/auth';
import { HTTP_STATUS_CODE } from '@constants/http';
import axios, { type AxiosResponse } from 'axios';
import { getCookie, setCookie } from 'cookies-next';

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
  withCredentials: true,
  ...options,
});

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async error => {
    const { status } = error.response;

    /**
     * @description [status/401] Access Token이 만료된 경우 Refresh Token으로 재발급 후, api 재요청
     */
    if (status === HTTP_STATUS_CODE.UNAUTHORIZED) {
      const refreshToken = getCookie(AUTH_TOKEN.REFRESH) as string;

      const { id_token, refresh_token } = await authApi.getRefresh(refreshToken);

      setAccessToken(id_token);
      setCookie(AUTH_TOKEN.ACCESS, id_token);

      if (refresh_token) {
        setCookie(AUTH_TOKEN.REFRESH, refresh_token);
      }

      return instance.request(error.config);
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
