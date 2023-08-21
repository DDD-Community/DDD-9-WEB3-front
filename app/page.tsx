import Navigation from './_components/common/Navigation';
import AuthProvider from './_components/providers/AuthProvider';

export default function Home() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
