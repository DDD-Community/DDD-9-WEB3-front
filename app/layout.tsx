import type { Metadata } from 'next';
import StyledComponentsRegistry from './_lib/registry';
import fonts from './_styles/fonts';
import './_styles/global.css';

export const metadata: Metadata = {
  title: 'Lottofolio',
  description: 'Lottofolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={fonts.className}>
      <body>
        <StyledComponentsRegistry>
          <p>header layout</p>
          {children}
          <p>footer layout</p>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
