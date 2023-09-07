import IconBack from '@assets/svg/back.svg';
import IconClose from '@assets/svg/close.svg';
import { ROUTES } from '@constants/routes';
import { Route } from 'next';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

const NAVIGATION_VERSION = {
  CLOSE: 'CLOSE',
  BACK: 'BACK',
  BOTH: 'BOTH',
  NONE: 'NONE',
} as const;

interface TopNavigationProps {
  version: keyof typeof NAVIGATION_VERSION;
  isXMargin?: boolean;
  title?: string;
  path?: (typeof ROUTES)[keyof typeof ROUTES];
}

const TopNavigation = ({ version, isXMargin = true, title, path }: TopNavigationProps) => {
  const router = useRouter();

  return (
    <NavigationBar isXMargin={isXMargin}>
      {(version === NAVIGATION_VERSION.BACK || version === NAVIGATION_VERSION.BOTH) && (
        <BackButton type="button" onClick={() => router.back()}>
          <IconBack />
        </BackButton>
      )}
      {title && <Title>{title}</Title>}
      {(version === NAVIGATION_VERSION.CLOSE || version === NAVIGATION_VERSION.BOTH) && (
        <CloseButton type="button" onClick={() => router.push(path as Route)}>
          <IconClose />
        </CloseButton>
      )}
    </NavigationBar>
  );
};

export default TopNavigation;

const NavigationBar = styled.div<{ isXMargin: boolean }>`
  position: relative;
  margin: ${({ isXMargin }) => (isXMargin ? '1.25rem' : '1.25rem 0')};
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigateButton = styled.button`
  position: absolute;
  display: flex;
  top: 0;
  justify-content: center;
  align-items: center;
`;

const BackButton = styled(NavigateButton)`
  left: 0;
`;

const CloseButton = styled(NavigateButton)`
  right: 0;
`;

const Title = styled.div`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 133%;
  letter-spacing: -0.01rem;
`;
