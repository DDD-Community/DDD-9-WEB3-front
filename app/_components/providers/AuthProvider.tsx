'use client';

import { setAccessToken } from '@apis/core';
import { AUTH_TOKEN } from '@constants/auth';
import { ROUTES } from '@constants/routes';
import { useAuthActions, useIsLoggedIn } from '@store/auth';
import { getCookie } from 'cookies-next';
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
    const accessToken = getCookie(AUTH_TOKEN.ACCESS) as string;

    if (accessToken) {
      console.log('토큰 ');
      setAccessToken(accessToken);
      setIsLoggedIn(true);

      return;
    }

    /** 로그인 상태도 아니며 쿠키에 토큰이 없는 경우, 리다이렉트 */
    setIsLoggedIn(false);
    router.replace(ROUTES.HOME);
  }, [isLoggedIn, setIsLoggedIn, router]);

  return <>{children}</>;
}
