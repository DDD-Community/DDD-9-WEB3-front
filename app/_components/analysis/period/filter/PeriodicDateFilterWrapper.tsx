'use client';

import React from 'react';
import styled from 'styled-components';
import MonthPickerFilter from './MonthPickerFilter';
import { useSearchParams } from 'next/navigation';

type PeriodicDateFilterProps = {};

const PeriodicDateFilter: React.FC<PeriodicDateFilterProps> = () => {
  const searchParams = useSearchParams();
  const categoryMode = searchParams.get('category');

  return (
    <PeriodicDateFilterBlock>
      {categoryMode === 'month' ? <MonthPickerFilter /> : <MonthPickerFilter />}
    </PeriodicDateFilterBlock>
  );
};

const PeriodicDateFilterBlock = styled.div`
  min-height: calc(100vh - 10.8rem);
`;

export default PeriodicDateFilter;
