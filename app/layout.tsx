import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lottofolio',
  description: 'Lottofolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <p>header layout</p>
        {children}
        <p>footer layout</p>
      </body>
    </html>
  );
}
