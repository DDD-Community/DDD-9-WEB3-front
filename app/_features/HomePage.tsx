'use client';

import { styled } from 'styled-components';

import KakaoButton from '@/_components/home/KakaoButton';
import LottoBallSlider from '@/_components/home/LottoBallSlider';
import palette from '@/_styles/palette';

export default function HomePage() {
  return (
    <Wrapper>
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

const Intro = styled.h1`
  margin-bottom: 0.87rem;
`;
