'use client';

import { ROUTES } from '@constants/routes';
import { useIsLoggedIn } from '@store/auth';
import Link from 'next/link';

const Navigation = () => {
  const isLoggedIn = useIsLoggedIn();

  return <div>{isLoggedIn ? <div>유저 정보</div> : <Link href={ROUTES.LOGIN}>로그인</Link>}</div>;
};

export default Navigation;
