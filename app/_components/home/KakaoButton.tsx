import { styled } from 'styled-components';

import palette from '@/_styles/palette';

import IconKakao from '../icons/IconKakao';

const KakaoButton = () => {
  return (
    <Wrapper>
      <IconKakao />
      <Text>카카오로 로그인</Text>
    </Wrapper>
  );
};

export default KakaoButton;

const Wrapper = styled.button`
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
