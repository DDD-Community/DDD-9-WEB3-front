'use client';

import palette from '@/_styles/palette';
import React from 'react';
import styled from 'styled-components';
import ResultAmountBannerList from './ResultAmountBannerList';
import AnalyticsDashboardMenu from './AnalyticsDashboardMenu';

type AnalysisMainWrapperProps = {};

const AnalysisMainWrapper: React.FC<AnalysisMainWrapperProps> = () => {
  // const test = [3, 5, 7, 9, 1, 13, 4]; //? res값 정제

  return (
    <AnalysisMainWrapperBlock>
      <AnalysisMainTitle>
        7월 2주차 1078회
        <br />
        당첨번호를 확인하세요.
      </AnalysisMainTitle>

      <WeekWinningNumberBox>
        <WeekWinningNumber>3 5 7 9 1 13 4</WeekWinningNumber>{' '}
        <WeekWinningBonusNumber>34</WeekWinningBonusNumber>
      </WeekWinningNumberBox>
      {/* svg */}
      {/* svg */}
      <ResultAmountBannerList />
      <AnalyticsDashboardMenu />
    </AnalysisMainWrapperBlock>
  );
};

const AnalysisMainWrapperBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${palette.blue_ligth};
`;

const AnalysisMainTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  line-height: 26px;
  text-align: center;
  padding: 15px 0;
  margin-bottom: 16px;
`;

const WeekWinningNumberBox = styled.div`
  padding: 14px 30px;
  background-color: ${palette.white};
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  border-radius: 400px;
  margin-bottom: 21px;
`;

const WeekWinningNumber = styled.span`
  color: ${palette.grey_20};
  font-size: 20px;
  letter-spacing: 6px;
  font-weight: bold;
`;
const WeekWinningBonusNumber = styled.span`
  color: ${palette.orange_30};
  font-size: 20px;
  font-weight: bold;
`;

export default AnalysisMainWrapper;
