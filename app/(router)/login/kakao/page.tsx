'use client';

import useKakaoLogin from '@hooks/useKakaoLogin';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const searchParams = useSearchParams();
  const authorization = searchParams.get('code')!;

  const { isLoading, login } = useKakaoLogin();

  useEffect(() => {
    login(authorization);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{isLoading ? <div>로그인 중</div> : null}</>;
}
