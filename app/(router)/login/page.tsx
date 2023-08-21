import LoginPage from '@features/LoginPage';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { AUTH_TOKEN } from '@/_constants/auth';
import { ROUTES } from '@/_constants/routes';

export default function Page() {
  if (cookies().get(AUTH_TOKEN.ACCESS)) {
    redirect(ROUTES.HOME);
  }

  return <LoginPage />;
}
