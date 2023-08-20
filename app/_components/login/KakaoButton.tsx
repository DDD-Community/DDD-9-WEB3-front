import { KAKAO_LOGIN_URL } from '@constants/auth';
import palette from '@styles/palette';
import Link from 'next/link';
import { styled } from 'styled-components';

import IconKakao from '../icons/IconKakao';

const KakaoButton = () => {
  return (
    <Wrapper href={KAKAO_LOGIN_URL}>
      <IconKakao />
      <Text>카카오로 로그인</Text>
    </Wrapper>
  );
};

export default KakaoButton;

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${palette.yellow};
  border-radius: 0.75rem;
  padding: 0.75rem 0;
  font-size: 0.87rem;
  font-weight: 700;
  letter-spacing: -0.008rem;
`;

const Text = styled.p`
  display: inline-block;
  margin-left: 0.5rem;
`;
