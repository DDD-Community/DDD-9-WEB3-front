import palette from '@/_styles/palette';
import React, { useState } from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import { endOfMonth, set } from 'date-fns';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type PeriodicAnalysisDateBarProps = {
  type: 'month' | 'year';
};

const PeriodicAnalysisDateBar: React.FC<PeriodicAnalysisDateBarProps> = ({ type }) => {
  const searchParams = useSearchParams();
  const year = 2023; //test
  const month = 8; //test
  const dateInSpecificMonth = set(new Date(), { year, month: month - 1 });

  return (
    <PeriodicAnalysisDateBarBlock>
      <AnalysisDateBarBox>
        <button>이전</button>
        <p>
          {format(dateInSpecificMonth, 'yyyy.MM.01')} ~{' '}
          {format(endOfMonth(dateInSpecificMonth), 'yyyy.MM.dd')}
        </p>
        <button>다음</button>
      </AnalysisDateBarBox>

      <AnalysisDatePickerBox href={`period/pick?category=${searchParams.get('category')}`}>
        {/* svg */}선택
      </AnalysisDatePickerBox>
    </PeriodicAnalysisDateBarBlock>
  );
};

const PeriodicAnalysisDateBarBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 14px 0;
  background-color: ${palette.grey_70};
`;

const AnalysisDateBarBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const AnalysisDatePickerBox = styled(Link)`
  position: absolute;
  right: 22px;
`;

export default PeriodicAnalysisDateBar;
