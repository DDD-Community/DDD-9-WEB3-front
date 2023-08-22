'use client';

import IconKakao from '@assets/svg/kakao.svg';
import { Button } from '@components/common';
import TopNavigation from '@components/common/TopNavigation';
import LottoBallSlider from '@components/login/LottoBallSlider';
import { KAKAO_LOGIN_URL } from '@constants/auth';
import { ROUTES } from '@constants/routes';
import palette from '@styles/palette';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

export default function LoginPage() {
  const router = useRouter();

  return (
    <Wrapper>
      <TopNavigation version="CLOSE" path={ROUTES.HOME} />
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
        <Button
          color={palette.black}
          $backgroundColor={palette.yellow}
          onClick={() => router.push(KAKAO_LOGIN_URL)}
        >
          <IconKakao />
          <Text>카카오로 로그인</Text>
        </Button>
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

const Intro = styled.h1`
  margin-bottom: 0.87rem;
`;

const Text = styled.p`
  display: inline-block;
  margin-left: 0.5rem;
  font-size: 0.87rem;
`;
