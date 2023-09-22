'use client';

import React from 'react';
import styled from 'styled-components';
import DoughnutChartWrapper from '../chart/DoughnutChartWrapper';
import BarChartWrapper from '../chart/BarChartWrapper';
import PeriodicAnalysisDateBar from './PeriodicAnalysisDateBar';
import { useSearchParams } from 'next/navigation';
import usePeriodNumber from '@/_hooks/usePeriodNumber';
import NavTabs from '@/_components/common/NavTabs';
import { SortType } from '@/_types/analysis';
import ToggleSwitch from '@/_components/common/ToggleSwitch';

type PeriodicAnalysisHubProps = {};

const PeriodicAnalysisHub: React.FC<PeriodicAnalysisHubProps> = () => {
  const searchParams = useSearchParams();
  const { periodNumbers: periodNumbersByDesc, isLoading } = usePeriodNumber({
    sortOption: 'desc',
    sortType: 'COUNT',
  });
  const { periodNumbers: periodNumbersByAsc, isLoading: isLoadingByAsc } = usePeriodNumber({
    sortOption: searchParams.get('sortType') === 'COUNT' ? 'desc' : 'asc',
    sortType: searchParams.get('sortType') as SortType,
  });

  return (
    <PeriodicAnalysisHubBlock>
      <NavTabs
        tabOptions={[
          {
            label: '월별',
            queryParams: 'category',
            value: 'month',
          },
          {
            label: '연도별',
            queryParams: 'category',
            value: 'year',
          },
        ]}
      />
      <PeriodicAnalysisDateBar />
      <ChartWrapper>
        <DoughnutChartWrapper numbers={periodNumbersByDesc} isLoading={isLoading} />
        <ToggleSwitch
          leftOption={{
            label: '번호순',
            queryParams: 'sortType',
            value: 'NO',
          }}
          rightOption={{
            label: '당첨횟수순',
            queryParams: 'sortType',
            value: 'COUNT',
          }}
        />
        <BarChartWrapper
          hasSwitch={searchParams.get('sortType') === 'COUNT'}
          numbers={periodNumbersByAsc}
          isLoading={isLoadingByAsc}
        />
      </ChartWrapper>
    </PeriodicAnalysisHubBlock>
  );
};

const PeriodicAnalysisHubBlock = styled.div`
  .doughnut-chart {
    margin-bottom: 42px;
  }
  .bar-chart {
    margin-top: 30px;
  }
`;

const ChartWrapper = styled.div`
  padding: 24px 20px;
`;

export default PeriodicAnalysisHub;
