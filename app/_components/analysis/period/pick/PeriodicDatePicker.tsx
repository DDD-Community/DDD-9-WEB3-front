'use client';

import React from 'react';
import styled from 'styled-components';

type PeriodicDatePickerProps = {};

const PeriodicDatePicker: React.FC<PeriodicDatePickerProps> = () => {
  return (
    <PeriodicDatePickerBlock>
      <p>날짜 선택</p>
    </PeriodicDatePickerBlock>
  );
};

const PeriodicDatePickerBlock = styled.div``;

export default PeriodicDatePicker;
