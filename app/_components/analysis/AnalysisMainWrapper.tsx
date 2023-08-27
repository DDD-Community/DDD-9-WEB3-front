'use client';

import palette from '@/_styles/palette';
import React from 'react';
import styled from 'styled-components';
import ResultAmountBannerList from './ResultAmountBannerList';
import AnalyticsDashboardMenu from './AnalyticsDashboardMenu';
import Image from 'next/image';
import PolygonIcon from '@assets/svg/polygon.svg';
import AuthProvider from '../providers/AuthProvider';
import useLatestNumber from '@/_hooks/useLatestNumber';
import { parse } from 'date-fns';

type AnalysisMainWrapperProps = {};

const AnalysisMainWrapper: React.FC<AnalysisMainWrapperProps> = () => {
  const { latestNumbers, isLoading } = useLatestNumber();

  const parsedDate = parse(latestNumbers?.drwt_date, 'yyyy-MM-dd', new Date());
  const monthNumber = parsedDate.getMonth() + 1;
  const weekNumber = Math.ceil(parsedDate.getDate() / 7);

  if (isLoading) return <p>loading</p>;

  return (
    <AuthProvider>
      <AnalysisMainWrapperBlock>
        <AnalysisMainTitle>
          {monthNumber}월 {weekNumber}주차 {latestNumbers?.drwt_no}회
          <br />
          당첨번호를 확인하세요.
        </AnalysisMainTitle>

        <WeekWinningNumberBox>
          {new Array(6).fill('').map((_, i) => (
            <WeekWinningNumber key={i}>{latestNumbers[`drwt_no${i + 1}`]}</WeekWinningNumber>
          ))}
          <WeekWinningBonusNumber>{latestNumbers?.bnus_no}</WeekWinningBonusNumber>
          <PolygonIconSVG />
        </WeekWinningNumberBox>

        <Image src="/assets/images/analysisMain.png" alt="분석페이지" width="120" height="120" />
        <ResultAmountBannerList />
        <AnalyticsDashboardMenu />
      </AnalysisMainWrapperBlock>
    </AuthProvider>
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

const PolygonIconSVG = styled(PolygonIcon)`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
`;

const WeekWinningNumberBox = styled.div`
  padding: 14px 30px;
  background-color: ${palette.white};
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  border-radius: 400px;
  margin-bottom: 21px;
  position: relative;
  display: flex;
  gap: 10px;
`;

const WeekWinningNumber = styled.span`
  color: ${palette.grey_20};
  font-size: 20px;
  font-weight: bold;
`;
const WeekWinningBonusNumber = styled.span`
  color: ${palette.orange_30};
  font-size: 20px;
  font-weight: bold;
`;

export default AnalysisMainWrapper;
