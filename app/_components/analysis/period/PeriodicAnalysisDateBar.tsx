import palette from '@/_styles/palette';
import React, { useState } from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import { addMonths, subMonths, parse } from 'date-fns';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import ArrowIcon from '@assets/svg/arrow.svg';
import RefreshIcon from '@assets/svg/refresh.svg';
import DateFilterIcon from '@assets/svg/dateFilter.svg';
import { useRouter } from 'next/navigation';

type PeriodicAnalysisDateBarProps = {
  type: 'month' | 'year';
};

const PeriodicAnalysisDateBar: React.FC<PeriodicAnalysisDateBarProps> = ({ type }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentDate = new Date();
  const pathname = usePathname();
  const newParams = new URLSearchParams(searchParams.toString());

  const categoryMode = searchParams.get('category');
  const startDt = searchParams.get('startDt');
  const endDt = searchParams.get('endDt');

  const targetFormatDate = format(new Date(), 'yyyy.MM');
  const [currenEndDt, setCurrenEndDt] = useState<string>(
    searchParams.get('endDt') || targetFormatDate,
  );

  const handleMonth = ({ type }: { type: 'prev' | 'next' }) => {
    const targetDate = parse(currenEndDt, 'yyyy.MM', new Date());
    const controlDt = type === 'prev' ? subMonths(targetDate, 1) : addMonths(targetDate, 1);
    setCurrenEndDt(format(controlDt, 'yyyy.MM'));

    newParams.set('endDt', format(controlDt, 'yyyy.MM'));
    router.push(`${pathname}?${newParams.toString()}`);
  };

  return (
    <PeriodicAnalysisDateBarBlock>
      <AnalysisDateRefreshBox
        onClick={() => {
          setCurrenEndDt(targetFormatDate);
          router.push(`${pathname}?&category=${categoryMode || 'month'}&endDt=${targetFormatDate}`);
        }}
        isVisible={!!startDt}
      >
        <RefreshIcon />
      </AnalysisDateRefreshBox>
      <AnalysisDateBarBox>
        {!startDt && (
          <PrevButton onClick={() => handleMonth({ type: 'prev' })}>
            <ArrowIcon />
          </PrevButton>
        )}
        {startDt ? (
          <p>
            {startDt} ~ {currenEndDt}
          </p>
        ) : (
          <p>{currenEndDt}</p>
        )}
        {!startDt && (
          <NextButton onClick={() => handleMonth({ type: 'next' })}>
            <ArrowIcon />
          </NextButton>
        )}
      </AnalysisDateBarBox>
      <AnalysisDatePickerBox
        href={`period/filter?category=${categoryMode}&startDt=${
          startDt || currenEndDt
        }&endDt=${currenEndDt}`}
      >
        <DateFilterIcon />
      </AnalysisDatePickerBox>
    </PeriodicAnalysisDateBarBlock>
  );
};

const PeriodicAnalysisDateBarBlock = styled.div`
  display: flex;
  padding: 12px 20px;
  background-color: ${palette.grey_70};
  justify-content: space-between;
  font-size: 14px;
`;

const NextButton = styled.button`
  display: flex;
  align-items: center;
`;

const PrevButton = styled(NextButton)`
  transform: rotate(-180deg);
`;

const AnalysisDateBarBox = styled.div`
  display: flex;
  align-items: center;
`;

const AnalysisDatePickerBox = styled(Link)``;

const AnalysisDateRefreshBox = styled.button<{ isVisible: boolean }>`
  visibility: ${({ isVisible }) => !isVisible && 'hidden'};
`;

export default PeriodicAnalysisDateBar;
