import IconBack from '@assets/svg/back.svg';
import IconClose from '@assets/svg/close.svg';
import { Route } from 'next';
import { useRouter } from 'next/navigation';
import { css, styled } from 'styled-components';

import { ROUTES } from '@/_constants/routes';

const NAVIGATION_VERSION = {
  CLOSE: 'CLOSE',
  BACK: 'BACK',
  BOTH: 'BOTH',
} as const;

interface TopNavigationProps {
  version: keyof typeof NAVIGATION_VERSION;
  path?: (typeof ROUTES)[keyof typeof ROUTES];
}

const TopNavigation = ({ version, path }: TopNavigationProps) => {
  const router = useRouter();

  return (
    <NavigationBar>
      {(version === NAVIGATION_VERSION.BACK || version === NAVIGATION_VERSION.BOTH) && (
        <NavigateButton type="button" version={version} onClick={() => router.back()}>
          <IconBack />
        </NavigateButton>
      )}
      {(version === NAVIGATION_VERSION.CLOSE || version === NAVIGATION_VERSION.BOTH) && (
        <NavigateButton type="button" version={version} onClick={() => router.push(path as Route)}>
          <IconClose />
        </NavigateButton>
      )}
    </NavigationBar>
  );
};

export default TopNavigation;

const NavigationBar = styled.div`
  position: absolute;
  top: 2.8rem;
  left: 0;
  width: calc(100% - 2.5rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.25rem;
`;

const NavigateButton = styled.button<Pick<TopNavigationProps, 'version'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  cursor: pointer;
  ${({ version }) =>
    version === NAVIGATION_VERSION.CLOSE &&
    css`
      margin-left: auto;
    `}
`;
