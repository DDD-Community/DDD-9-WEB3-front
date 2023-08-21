'use client';

import { useIsLoggedIn } from '@store/auth';
import Link from 'next/link';

import { ROUTES } from '@/_constants/routes';

const Navigation = () => {
  const isLoggedIn = useIsLoggedIn();

  return <div>{isLoggedIn ? <div>유저 정보</div> : <Link href={ROUTES.LOGIN}>로그인</Link>}</div>;
};

export default Navigation;
