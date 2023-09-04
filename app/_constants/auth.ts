export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_CLIENT_REDIRECT_URI}&scope=openid`;

export const LOTTOFOLIO_USER = 'LOTTOFOLIO_USER';

export const AUTH_TOKEN = {
  ACCESS: 'accessToken',
  REFRESH: 'refreshToken',
};

export const COOKIE_CONFIG = {
  ACCESS: { maxAge: 60 * 60 * 6 },
  REFRESH: { maxAge: 60 * 60 * 24 * 30 },
};
