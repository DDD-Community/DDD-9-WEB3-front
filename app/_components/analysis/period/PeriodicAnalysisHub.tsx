'use client';

import React from 'react';
import styled from 'styled-components';
import PeriodicAnalysisTabs from './PeriodicAnalysisTabs';
import PeriodicAnalysisDateBar from './PeriodicAnalysisDateBar';
import { useSearchParams } from 'next/navigation';

type PeriodicAnalysisHubProps = {};

const PeriodicAnalysisHub: React.FC<PeriodicAnalysisHubProps> = () => {
  const searchParams = useSearchParams();

  return (
    <PeriodicAnalysisHubBlock>
      <PeriodicAnalysisTabs />
      <PeriodicAnalysisDateBar type={searchParams.get('category') || 'month'} />
    </PeriodicAnalysisHubBlock>
  );
};

const PeriodicAnalysisHubBlock = styled.div``;

export default PeriodicAnalysisHub;
