'use client';

import React from 'react';
import styled from 'styled-components';
import DoughnutChartWrapper from '../chart/DoughnutChartWrapper';
import BarChartWrapper from '../chart/BarChartWrapper';
import PeriodicAnalysisDateBar from './PeriodicAnalysisDateBar';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import usePeriodNumber from '@/_hooks/usePeriodNumber';
import NavTabs from '@/_components/common/NavTabs';
import { SortType } from '@/_types/analysis';

type PeriodicAnalysisHubProps = {};

const PeriodicAnalysisHub: React.FC<PeriodicAnalysisHubProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const newParams = new URLSearchParams(searchParams.toString());
  const { periodNumbers: periodNumbersByDesc } = usePeriodNumber({
    sortOption: 'desc',
    sortType: 'COUNT',
  });
  const { periodNumbers: periodNumbersByAsc } = usePeriodNumber({
    sortOption: searchParams.get('sortType') === 'COUNT' ? 'desc' : 'asc',
    sortType: searchParams.get('sortType') as SortType,
  });

  const tabOptions = [
    {
      label: '월별',
      value: '/analysis/period?category=month',
    },
    {
      label: '연도별',
      value: '/analysis/period?category=year',
    },
  ];

  return (
    <PeriodicAnalysisHubBlock>
      <NavTabs tabOptions={tabOptions} />
      <PeriodicAnalysisDateBar />
      <ChartWrapper>
        <DoughnutChartWrapper numbers={periodNumbersByDesc} />
        <button
          onClick={() => {
            newParams.set('sortType', 'NO');
            router.push(`${pathname}?${newParams.toString()}`);
          }}
        >
          번호순
        </button>
        <button
          onClick={() => {
            newParams.set('sortType', 'COUNT');
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
