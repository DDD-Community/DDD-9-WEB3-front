'use client';

import { Modal, TopNavigation } from '@components/common';
import MenuButton from '@components/mypage/MenuButton';
import Profile from '@components/mypage/Profile';
import AuthProvider from '@components/providers/AuthProvider';
import { ROUTES } from '@constants/routes';
import { storage } from '@lib/util/storage';
import { useAuthActions } from '@store/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { styled } from 'styled-components';

const MyPage = () => {
  const router = useRouter();
  const { setIsLoggedIn } = useAuthActions();
  const [isOpenLogoutModal, setIsOpenLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    router.push(ROUTES.HOME);

    storage.deleteAccessToken();
    storage.deleteRefreshToken();
    storage.deleteUserId();

    setIsLoggedIn(false);
  };

  return (
    <AuthProvider>
      <Wrapper>
        <TopNavigation version="NONE" title="마이페이지" />
        <Profile />
        <MenuList>
          <MenuButton menuType="SCRAP" onClickMenuButton={() => router.push(ROUTES.SCRAPBOOK)} />
          <MenuButton menuType="LOGOUT" onClickMenuButton={() => setIsOpenLogoutModal(true)} />
          <MenuButton menuType="SIGNOUT" onClickMenuButton={() => router.push(ROUTES.SIGNOUT)} />
        </MenuList>
      </Wrapper>
      <Modal
        isOpen={isOpenLogoutModal}
        content="로그아웃 하시겠어요?"
        buttonContent="로그아웃"
        onClose={() => setIsOpenLogoutModal(false)}
        onClick={handleLogoutClick}
      />
    </AuthProvider>
  );
};

export default MyPage;

const Wrapper = styled.div`
  height: calc(100vh - 2.9rem);
  padding-top: 2.9rem;
`;

const MenuList = styled.div`
  padding: 0.8rem 0;
`;
