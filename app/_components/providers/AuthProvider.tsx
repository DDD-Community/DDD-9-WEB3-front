'use client';

import { setAccessToken } from '@apis/core';
import { AUTH_TOKEN } from '@constants/auth';
import { ROUTES } from '@constants/routes';
import { useAuthActions, useIsLoggedIn } from '@store/auth';
import { getCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';

import { authApi } from '@/_apis/auth';

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
    const accessToken = getCookie(AUTH_TOKEN.ACCESS) as string;

    if (accessToken) {
      setAccessToken(accessToken);
      setIsLoggedIn(true);

      return;
    }

    /** 로그인 상태는 아니지만 쿠키에 리프레시 토큰이 남아있는 경우, 토큰 재발급 */
    const refreshToken = getCookie(AUTH_TOKEN.REFRESH) as string;

    if (refreshToken) {
      (async () => {
        const { id_token, refresh_token } = await authApi.silentRefresh();

        if (id_token) {
          setIsLoggedIn(true);
          setAccessToken(id_token);
          setCookie(AUTH_TOKEN.ACCESS, id_token);
        }

        if (refresh_token.length > 0) {
          setCookie(AUTH_TOKEN.REFRESH, refreshToken);
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
