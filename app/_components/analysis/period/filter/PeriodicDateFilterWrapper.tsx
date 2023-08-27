'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import DatePickFilterBar from './DatePickFilterBar';
import MonthPickerFilter from './MonthPickerFilter';

type PeriodicDateFilterProps = {};

const PeriodicDateFilter: React.FC<PeriodicDateFilterProps> = () => {
  const [isVisiblePickerFilter, setIsVisiblePickerFilter] = useState(false);

  return (
    <PeriodicDateFilterBlock>
      <DatePickFilterBar setIsVisiblePickerFilter={setIsVisiblePickerFilter} />

      {isVisiblePickerFilter && <MonthPickerFilter />}
    </PeriodicDateFilterBlock>
  );
};

const PeriodicDateFilterBlock = styled.div``;

export default PeriodicDateFilter;
