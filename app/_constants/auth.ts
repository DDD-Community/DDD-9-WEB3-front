export const KAKAO_URL = {
  LOGIN: `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_CLIENT_REDIRECT_URI}&response_type=code`,
};

export const AUTH_TOKEN = {
  ACCESS: 'accessToken',
  REFRESH: 'refreshToken',
};
