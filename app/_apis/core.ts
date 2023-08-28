import { HTTP_STATUS_CODE } from '@constants/http';
import { isExpiredAccessToken, isNotExistAuthHeader, isNotRegisteredMember } from '@lib/util/http';
import { storage } from '@lib/util/storage';
import axios, { type AxiosResponse } from 'axios';

import { authApi } from './auth';

export const HTTP_BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000';

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
    const token = storage.getAccessToken();

    if (token) {
      setAccessToken(token);
    }

    return response.data.data;
  },
  async error => {
    const {
      config: originalRequest,
      response: {
        status,
        data: { message },
      },
    } = error;

    if (originalRequest && status === HTTP_STATUS_CODE.UNAUTHORIZED) {
      if (isNotRegisteredMember(message)) {
        /**
         * [status:401] 등록된 기존 회원이 아닌 경우
         */
        return Promise.reject(error);
      }

      if (isNotExistAuthHeader(message)) {
        /**
         * [status:401] 헤더에 token이 없는 경우
         */
        const { id_token, refresh_token } = await authApi.silentRefresh();

        setAccessToken(id_token);
        storage.setAccessToken(id_token);

        if (isExpiredAccessToken(refresh_token)) {
          storage.setRefreshToken(refresh_token);
        }

        return instance(originalRequest);
      }
    }

    return Promise.reject(error);
  },
);

export const setAccessToken = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeAccessToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export default instance;
