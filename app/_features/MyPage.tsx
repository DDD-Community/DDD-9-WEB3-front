'use client';

import MenuButton from '@components/mypage/MenuButton';
import Profile from '@components/mypage/Profile';
import AuthProvider from '@components/providers/AuthProvider';
import { styled } from 'styled-components';

const MyPage = () => {
  return (
    <AuthProvider>
      <Wrapper>
        <Section>마이페이지</Section>
        <Profile />
        <MenuList>
          <MenuButton menuType="SCRAP" onClickMenuButton={() => console.log('스크랩')} />
          <MenuButton menuType="LOGOUT" onClickMenuButton={() => console.log('로그아웃')} />
          <MenuButton menuType="WITHDRAW" onClickMenuButton={() => console.log('회원탈퇴')} />
        </MenuList>
      </Wrapper>
    </AuthProvider>
  );
};

export default MyPage;

const Wrapper = styled.div`
  height: calc(100vh - 2.9rem);
  padding-top: 2.9rem;
`;

const Section = styled.div`
  padding: 0.87rem 0;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 133%;
  letter-spacing: -0.18px;
`;

const MenuList = styled.div`
  padding: 0.8rem 0;
`;
