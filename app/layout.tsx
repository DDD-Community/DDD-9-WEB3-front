import type { Metadata } from 'next';
import StyledComponentsRegistry from './_lib/registry';

export const metadata: Metadata = {
  title: 'Lottofolio',
  description: 'Lottofolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
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
