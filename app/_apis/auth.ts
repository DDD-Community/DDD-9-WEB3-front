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
   * @param refreshToken 쿠키에 담긴 refreshToken
   * @description refreshToken로 accessToken 재발급
   */
  getRefresh: (refreshToken: string) =>
    instance.get<string, AuthResponse>(`/auth/refresh`, {
      params: {
        refresh_token: refreshToken,
      },
    }),
};
