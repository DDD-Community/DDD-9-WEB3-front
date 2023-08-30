'use client';

import React from 'react';
import styled from 'styled-components';
import PeriodicAnalysisTabs from './PeriodicAnalysisTabs';
import DoughnutChartWrapper from '../chart/DoughnutChartWrapper';
import BarChartWrapper from '../chart/BarChartWrapper';
import PeriodicAnalysisDateBar from './PeriodicAnalysisDateBar';

type PeriodicAnalysisHubProps = {};

const PeriodicAnalysisHub: React.FC<PeriodicAnalysisHubProps> = () => {
  return (
    <PeriodicAnalysisHubBlock>
      <PeriodicAnalysisTabs />
      <PeriodicAnalysisDateBar />
      <ChartWrapper>
        <DoughnutChartWrapper />
        <BarChartWrapper />
      </ChartWrapper>
    </PeriodicAnalysisHubBlock>
  );
};

const PeriodicAnalysisHubBlock = styled.div``;

const ChartWrapper = styled.div`
  padding: 24px 20px;
`;

export default PeriodicAnalysisHub;
