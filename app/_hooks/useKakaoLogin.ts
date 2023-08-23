import { authApi } from '@apis/auth';
import { setAccessToken } from '@apis/core';
import { ROUTES } from '@constants/routes';
import { storage } from '@lib/util/storage';
import { useAuthActions } from '@store/auth';
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

      storage.setAccessToken(id_token);
      storage.setRefreshToken(refresh_token);

      setIsLoggedIn(true);
      setIsLoading(false);

      /**
       * 회원정보가 없는 경우, 회원가입 페이지로 리다이렉트
       * 회원정보가 있는 경우, 홈으로 리다이렉트
       * */
      router.push(ROUTES.SIGNUP);
    } catch (e) {
      setIsLoading(false);
    }
  };

  return { isLoading, login };
};

export default useKakaoLogin;
