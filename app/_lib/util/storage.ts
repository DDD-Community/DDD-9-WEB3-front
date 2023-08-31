import { AUTH_TOKEN, COOKIE_CONFIG } from '@constants/auth';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

export const LOTTOFOLIO_USER = 'LOTTOFOLIO_USER';

export const storage = {
  getAccessToken: () => getCookie(AUTH_TOKEN.ACCESS) as string,
  getRefreshToken: () => getCookie(AUTH_TOKEN.REFRESH) as string,
  getUserId: () => getCookie(LOTTOFOLIO_USER) as string,

  setAccessToken: (token: string) => setCookie(AUTH_TOKEN.ACCESS, token, COOKIE_CONFIG.ACCESS),
  setRefreshToken: (token: string) => setCookie(AUTH_TOKEN.REFRESH, token, COOKIE_CONFIG.REFRESH),
  setUserId: (userId: string) => setCookie(LOTTOFOLIO_USER, userId, COOKIE_CONFIG.REFRESH),

  deleteAccessToken: () => deleteCookie(AUTH_TOKEN.ACCESS),
  deleteRefreshToken: () => deleteCookie(AUTH_TOKEN.REFRESH),
  deleteUserId: () => deleteCookie(LOTTOFOLIO_USER),
};
