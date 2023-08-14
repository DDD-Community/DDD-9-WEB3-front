'use client';

import Image from 'next/image';
import Logo from 'public/assets/images/logo.png';
import { styled } from 'styled-components';

import KakaoButton from '@/_components/home/KakaoButton';
import LottoSlider from '@/_components/home/LottoSlider';
import palette from '@/_styles/palette';

export default function HomePage() {
  return (
    <Wrapper>
      <div>
        <Title>이제 찾지말고 알림받자!</Title>
        <Image width={218} src={Logo} alt="LottoFolio 로고" />
        <Description>
          <p>내 주변 명당 알림도 받고</p>
          <p>나만의 로또 재테크도 관리해보세요</p>
        </Description>
      </div>
      <div>
        <LottoSlider />
        <KakaoButton />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  min-height: calc(100vh - 188px);
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  line-height: 150%;
  letter-spacing: -0.01rem;
  padding: 110px 0 78px;
  overflow: hidden;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 700;
  color: ${palette.black};
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
  font-weight: 500;
  color: ${palette.grey_40};
  margin-top: 1.5rem;
`;
