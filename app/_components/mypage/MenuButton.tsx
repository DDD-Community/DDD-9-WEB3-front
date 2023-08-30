import IconLogout from '@assets/svg/logout.svg';
import IconRightArrow from '@assets/svg/rightArrow.svg';
import IconScrap from '@assets/svg/scrap.svg';
import IconWithdraw from '@assets/svg/withdraw.svg';
import { styled } from 'styled-components';

const MENU = {
  SCRAP: '스크랩북',
  LOGOUT: '로그아웃',
  WITHDRAW: '회원탈퇴',
} as const;

const MENU_ICON = {
  SCRAP: <IconScrap />,
  LOGOUT: <IconLogout />,
  WITHDRAW: <IconWithdraw />,
};

interface MenuButtonType {
  menuType: keyof typeof MENU;
  onClickMenuButton: () => void;
}

const MenuButton = ({ menuType, onClickMenuButton }: MenuButtonType) => {
  return (
    <Button onClick={onClickMenuButton}>
      <LeftItem>
        <Icon>{MENU_ICON[menuType]}</Icon>
        {MENU[menuType]}
      </LeftItem>
      <IconRightArrow />
    </Button>
  );
};

export default MenuButton;

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.62rem 0.8rem 0.62rem 1.25rem;
  cursor: pointer;
`;

const LeftItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 162%;
  letter-spacing: -0.04rem;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.62rem;
  margin-bottom: 0.12rem;
`;
