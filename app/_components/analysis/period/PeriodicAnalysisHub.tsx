'use client';

import React from 'react';
import styled from 'styled-components';
import PeriodicAnalysisTabs from './PeriodicAnalysisTabs';
import PeriodicAnalysisDateBar from './PeriodicAnalysisDateBar';
import { useSearchParams } from 'next/navigation';
import DoughnutChartWrapper from '../chart/DoughnutChartWrapper';

type PeriodicAnalysisHubProps = {};

const PeriodicAnalysisHub: React.FC<PeriodicAnalysisHubProps> = () => {
  const searchParams = useSearchParams();

  return (
    <PeriodicAnalysisHubBlock>
      <PeriodicAnalysisTabs />
      <PeriodicAnalysisDateBar
        type={(searchParams.get('category') as 'month' | 'year') || 'month'}
      />
      <ChartWrapper>
        <DoughnutChartWrapper />
      </ChartWrapper>
    </PeriodicAnalysisHubBlock>
  );
};

const PeriodicAnalysisHubBlock = styled.div``;

const ChartWrapper = styled.div`
  padding: 24px 20px;
`;

export default PeriodicAnalysisHub;
