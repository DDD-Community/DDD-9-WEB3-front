import './_styles/global.css';

import type { Metadata } from 'next';

import ReactQueryProvider from './_components/providers/ReactQueryProvider';
import StyledComponentsRegistry from './_lib/registry';
import fonts from './_styles/fonts';

export const metadata: Metadata = {
  title: 'Lottofolio',
  description: 'Lottofolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={fonts.className}>
        <ReactQueryProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
