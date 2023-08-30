'use client';

import MenuButton from '@components/mypage/MenuButton';
import palette from '@styles/palette';
import { styled } from 'styled-components';

const MyPage = () => {
  return (
    <Wrapper>
      <Section>마이페이지</Section>
      <Profile>
        <Message>
          안녕하세요, <NickName>로또로또</NickName>님!
        </Message>
        <Email>lottopolio@kakao.com</Email>
      </Profile>
      <MenuList>
        <MenuButton menuType="SCRAP" onClickMenuButton={() => console.log('스크랩')} />
        <MenuButton menuType="LOGOUT" onClickMenuButton={() => console.log('로그아웃')} />
        <MenuButton menuType="WITHDRAW" onClickMenuButton={() => console.log('회원탈퇴')} />
      </MenuList>
    </Wrapper>
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

const Profile = styled.header`
  padding: 1.5rem 1.25rem;
  border-bottom: 0.6rem solid ${palette.grey_80};
`;

const Message = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.05rem;
  margin-bottom: 0.25rem;
`;

const NickName = styled.strong`
  font-weight: 700;
`;

const Email = styled.span`
  color: ${palette.grey_30};
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 157%;
  letter-spacing: -0.03rem;
`;

const MenuList = styled.div`
  padding: 0.8rem 0;
`;
