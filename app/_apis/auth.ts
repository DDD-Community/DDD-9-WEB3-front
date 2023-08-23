import { getCookie } from 'cookies-next';

import { AUTH_TOKEN } from '@/_constants/auth';
import { AuthResponse } from '@/_types/auth';

import instance from './core';

export const authApi = {
  /**
   * @param code 카카오 인가 코드
   * @description 회원가입 또는 로그인하여 accessToken 발급
   */
  getToken: (code: string) =>
    instance.get<string, AuthResponse>(`/auth/token`, {
      params: {
        code,
        state: 'kakao',
      },
    }),
  /**
   * @description refreshToken로 accessToken 재발급
   */
  silentRefresh: () =>
    instance.get<unknown, AuthResponse>(`/auth/refresh`, {
      params: {
        refresh_token: getCookie(AUTH_TOKEN.REFRESH),
      },
    }),
};
