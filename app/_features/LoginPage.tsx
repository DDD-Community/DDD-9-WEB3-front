'use client';

import IconClose from '@components/icons/IconClose';
import KakaoButton from '@components/login/KakaoButton';
import LottoBallSlider from '@components/login/LottoBallSlider';
import { ROUTES } from '@constants/routes';
import palette from '@styles/palette';
import Link from 'next/link';
import { styled } from 'styled-components';

export default function LoginPage() {
  return (
    <Wrapper>
      <CloseButton href={ROUTES.HOME}>
        <IconClose />
      </CloseButton>
      <div>
        <Intro>안녕하세요 👋</Intro>
        <div>
          <p>내 주변 명당 알림도 제공 받고</p>
          <p>나만의 로또 재테크도</p>
          <p>관리해보세요!</p>
        </div>
      </div>
      <div>
        <LottoBallSlider />
        <KakaoButton />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  position: relative;
  display: flex;
  min-height: calc(100vh - 22rem);
  flex-direction: column;
  justify-content: space-between;
  line-height: 136.3%;
  letter-spacing: -0.01rem;
  padding: 11.4rem 1.8rem 10.6rem;
  overflow: hidden;
  font-size: 1.3rem;
  color: ${palette.grey_0};
  font-weight: 700;
`;

const CloseButton = styled(Link)`
  position: absolute;
  top: 4.2rem;
  right: 1.3rem;
`;

const Intro = styled.h1`
  margin-bottom: 0.87rem;
`;
