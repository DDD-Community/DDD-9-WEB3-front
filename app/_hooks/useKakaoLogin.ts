import { authApi } from '@apis/auth';
import { setAccessToken } from '@apis/core';
import { memberApi } from '@apis/member';
import { ROUTES } from '@constants/routes';
import { storage } from '@lib/util/storage';
import { useAuthActions } from '@store/auth';
import { useMemberActions } from '@store/member';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const useKakaoLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLoggedIn } = useAuthActions();
  const { setMemberInfo } = useMemberActions();

  const login = async (code: string) => {
    setIsLoading(true);

    try {
      const { id_token, refresh_token, email, nickname } = await authApi.getToken(code);

      setAccessToken(id_token);

      storage.setAccessToken(id_token);
      storage.setRefreshToken(refresh_token);

      setMemberInfo({ email, nickname });

      /**
       * 회원정보가 없는 경우, 회원가입 페이지로 리다이렉트
       * 회원정보가 있는 경우, 홈으로 리다이렉트
       * */
      const { user_id } = await memberApi.getMember();

      storage.setUserId(user_id);

      setIsLoggedIn(true);
      setIsLoading(false);

      router.push(ROUTES.HOME);
    } catch (e) {
      setIsLoading(false);

      router.push(ROUTES.SIGNUP);
    }
  };

  return { isLoading, login };
};

export default useKakaoLogin;
