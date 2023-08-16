'use client';

import palette from '@/_styles/palette';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'next/navigation';

type PeriodicAnalysisTabsProps = {};

const PeriodicAnalysisTabs: React.FC<PeriodicAnalysisTabsProps> = () => {
  const searchParams = useSearchParams();

  return (
    <PeriodicAnalysisTabsBlock>
      <PeriodicAnalysisTabLink
        href="/analysis/period?category=month"
        isFocused={searchParams.get('category') === 'month'}
      >
        월별
      </PeriodicAnalysisTabLink>
      <PeriodicAnalysisTabLink
        href="/analysis/period?category=year"
        isFocused={searchParams.get('category') === 'year'}
      >
        연도별
      </PeriodicAnalysisTabLink>
    </PeriodicAnalysisTabsBlock>
  );
};

const PeriodicAnalysisTabsBlock = styled.div`
  display: flex;
`;

const PeriodicAnalysisTabLink = styled(Link)<{ isFocused: boolean }>`
  padding: 13px 0;
  color: ${({ isFocused }) => (isFocused ? palette.black : palette.grey_40)};
  font-size: 14px;
  background-color: ${palette.white};
  text-decoration: none;
  flex: 1;
  text-align: center;
  //animation 추후 추가
  border-bottom: 2px solid ${({ isFocused }) => (isFocused ? palette.black : palette.grey_60)};
`;

export default PeriodicAnalysisTabs;
