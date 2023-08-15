import palette from '@/_styles/palette';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

type AnalyticsDashboardMenuProps = {};

const AnalyticsDashboardMenu: React.FC<AnalyticsDashboardMenuProps> = () => {
  return (
    <AnalyticsDashboardMenuBlock>
      <MenuTitle>
        <MenuTitlePoint>로또 분석 자료</MenuTitlePoint>를 조회해보세요!
      </MenuTitle>
      <HorizontalMenuBox href="/analysis/peroid">
        {/* <svg /> */}
        <Title>기간별</Title>
        <Description>많이 당첨된 번호를 기간별 조회하기</Description>
      </HorizontalMenuBox>
      <VerticalMenuWrapper>
        <VerticalMenuBox href="/analysis/amount">
          {/* <svg /> */}
          <Title>당첨금액별</Title>
          <Description>금액이 높은 순으로 조회하기</Description>
        </VerticalMenuBox>
        <VerticalMenuBox href="/analysis/rounds">
          {/* <svg /> */}
          <Title>당첨회차별</Title>
          <Description>회차를 직접 선택하여 조회하기</Description>
        </VerticalMenuBox>
      </VerticalMenuWrapper>
    </AnalyticsDashboardMenuBlock>
  );
};

const AnalyticsDashboardMenuBlock = styled.div`
  width: -webkit-fill-available;
  background-color: ${palette.white};
  padding: 35px 20px;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
`;

const MenuTitle = styled.p`
  font-size: 20px;
  margin-bottom: 19px;
`;

const MenuTitlePoint = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const HorizontalMenuBox = styled(Link)`
  display: block;
  padding: 20px 27px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  margin-bottom: 13px;
`;

const VerticalMenuBox = styled(Link)`
  width: -webkit-fill-available;
  display: block;
  padding: 34px 26px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  text-decoration: none;
`;

const VerticalMenuWrapper = styled.div`
  display: flex;
  gap: 14px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 7px;
  color: ${palette.black};
`;

const Description = styled.p`
  color: ${palette.grey_40};
  font-size: 14px;
  line-height: 20px;
`;
export default AnalyticsDashboardMenu;
