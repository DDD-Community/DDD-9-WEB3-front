import { LOTTOFOLIO_USER } from '@constants/auth';
import { ROUTES } from '@constants/routes';
import SignupPage from '@features/SignupPage';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Page() {
  if (cookies().get(LOTTOFOLIO_USER)) {
    redirect(ROUTES.HOME);
  }

  return <SignupPage />;
}
