'use client';

import React from 'react';
import styled from 'styled-components';
import PeriodicAnalysisTabs from './PeriodicAnalysisTabs';
import DoughnutChartWrapper from '../chart/DoughnutChartWrapper';
import BarChartWrapper from '../chart/BarChartWrapper';
import PeriodicAnalysisDateBar from './PeriodicAnalysisDateBar';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import usePeriodNumber from '@/_hooks/usePeriodNumber';

type PeriodicAnalysisHubProps = {};

const PeriodicAnalysisHub: React.FC<PeriodicAnalysisHubProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const newParams = new URLSearchParams(searchParams.toString());
  const { periodNumbers: periodNumbersByDesc } = usePeriodNumber('desc');
  const { periodNumbers: periodNumbersByAsc } = usePeriodNumber('asc');

  return (
    <PeriodicAnalysisHubBlock>
      <PeriodicAnalysisTabs />
      <PeriodicAnalysisDateBar />
      <ChartWrapper>
        <DoughnutChartWrapper numbers={periodNumbersByDesc} />
        <button
          onClick={() => {
            newParams.set('sortOption', 'asc');
            router.push(`${pathname}?${newParams.toString()}`);
          }}
        >
          번호순
        </button>
        <button
          onClick={() => {
            newParams.set('sortOption', 'desc');
            router.push(`${pathname}?${newParams.toString()}`);
          }}
        >
          당첨횟수순
        </button>
        <BarChartWrapper numbers={periodNumbersByAsc} />
      </ChartWrapper>
    </PeriodicAnalysisHubBlock>
  );
};

const PeriodicAnalysisHubBlock = styled.div``;

const ChartWrapper = styled.div`
  padding: 24px 20px;
`;

export default PeriodicAnalysisHub;
