import { AUTH_TOKEN } from '@constants/auth';
import { ROUTES } from '@constants/routes';
import LoginPage from '@features/LoginPage';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Page() {
  if (cookies().get(AUTH_TOKEN.ACCESS)) {
    redirect(ROUTES.HOME);
  }

  return <LoginPage />;
}
