'use client';

import { authApi } from '@apis/auth';
import { setAccessToken } from '@apis/core';
import { ROUTES } from '@constants/routes';
import { isExpiredAccessToken } from '@lib/util/http';
import { storage } from '@lib/util/storage';
import { useAuthActions, useIsLoggedIn } from '@store/auth';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';

export default function AuthProvider({ children }: PropsWithChildren) {
  const router = useRouter();
  const isLoggedIn = useIsLoggedIn();
  const { setIsLoggedIn } = useAuthActions();

  useEffect(() => {
    /** 로그인 상태인 경우 */
    if (isLoggedIn) {
      return;
    }

    /** 로그인 상태는 아니지만 쿠키에 토큰이 남아있는 경우 */
    const accessToken = storage.getAccessToken();

    if (accessToken) {
      setAccessToken(accessToken);
      setIsLoggedIn(true);

      return;
    }

    /** 로그인 상태는 아니지만 쿠키에 리프레시 토큰이 남아있는 경우, 토큰 재발급 */
    const refreshToken = storage.getRefreshToken();

    if (refreshToken) {
      (async () => {
        const { id_token, refresh_token } = await authApi.silentRefresh();

        if (id_token) {
          setIsLoggedIn(true);
          setAccessToken(id_token);

          storage.setAccessToken(id_token);
        }

        if (isExpiredAccessToken(refresh_token)) {
          storage.setRefreshToken(refreshToken);
        }
      })();

      return;
    }

    /** 로그인 상태도 아니며 쿠키에 토큰이 없는 경우, 리다이렉트 */
    setIsLoggedIn(false);
    router.replace(ROUTES.HOME);
  }, [isLoggedIn, setIsLoggedIn, router]);

  return <>{children}</>;
}
