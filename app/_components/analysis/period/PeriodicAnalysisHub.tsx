'use client';

import React from 'react';
import styled from 'styled-components';
import PeriodicAnalysisTabs from './PeriodicAnalysisTabs';

type PeriodicAnalysisHubProps = {};

const PeriodicAnalysisHub: React.FC<PeriodicAnalysisHubProps> = () => {
  return (
    <PeriodicAnalysisHubBlock>
      <PeriodicAnalysisTabs />
    </PeriodicAnalysisHubBlock>
  );
};

const PeriodicAnalysisHubBlock = styled.div``;

export default PeriodicAnalysisHub;
