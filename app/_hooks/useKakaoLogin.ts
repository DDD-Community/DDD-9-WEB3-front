import { authApi } from '@apis/auth';
import { setAccessToken } from '@apis/core';
import { AUTH_TOKEN } from '@constants/auth';
import { ROUTES } from '@constants/routes';
import { useAuthActions } from '@store/auth';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const useKakaoLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLoggedIn } = useAuthActions();

  const login = async (code: string) => {
    setIsLoading(true);

    try {
      const { id_token, refresh_token } = await authApi.getToken(code);

      setAccessToken(id_token);
      setCookie(AUTH_TOKEN.ACCESS, id_token);
      setCookie(AUTH_TOKEN.REFRESH, refresh_token);

      setIsLoggedIn(true);
      setIsLoading(false);

      router.push(ROUTES.HOME);
    } catch (e) {
      setIsLoading(false);
    }
  };

  return { isLoading, login };
};

export default useKakaoLogin;
