import type { Metadata } from 'next';
import StyledComponentsRegistry from './_lib/registry';
import fonts from './_styles/fonts';
import './_styles/global.css';
import ReactQueryProvider from './_components/providers/ReactQueryProvider';

export const metadata: Metadata = {
  title: 'Lottofolio',
  description: 'Lottofolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={fonts.className}>
      <body>
        <ReactQueryProvider>
          <StyledComponentsRegistry>
            <p>header layout</p>
            {children}
            <p>footer layout</p>
          </StyledComponentsRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
