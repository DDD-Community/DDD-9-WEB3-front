import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArrowIcon from '@assets/svg/arrow.svg';
import { Button } from '@/_components/common';
import palette from '@/_styles/palette';
import { useRouter } from 'next/navigation';
import format from 'date-fns/format';
import { useSearchParams } from 'next/navigation';
import { subMonths } from 'date-fns';

type MonthPickerFilterProps = {};

const MonthPickerFilter: React.FC<MonthPickerFilterProps> = () => {
  const router = useRouter();
  const monthList = Array.from({ length: 12 }, (_, index) => index + 1);

  const searchParams = useSearchParams();
  const currentDate = new Date();

  const categoryMode = searchParams.get('category');
  const startDt = searchParams.get('startDt');
  const endDt = searchParams.get('endDt');

  // useEffect(() => {
  //   if (!endDt) {
  //     // 주어진 연월 문자열을 기반으로 3개월 전 날짜를 계산하는 함수
  //     const calculateThreeMonthsAgo = yearMonth => {
  //       const currentDate = new Date(yearMonth.slice(0, 4), parseInt(yearMonth.slice(4)) - 1, 1);
  //       const threeMonthsAgoDate = subMonths(currentDate, 3);
  //       return threeMonthsAgoDate;
  //     };

  //     // 연월 문자열을 'yyyyMM' 형식으로 표시하는 함수
  //     const displayYearMonth = date => {
  //       return format(date, 'yyyyMM');
  //     };

  //     const threeMonthsAgo = calculateThreeMonthsAgo(selectedEndDt);

  //     setSelectedStartDt(displayYearMonth(threeMonthsAgo));
  //   }
  // }, []);

  const [selectedStartDt, setSelectedStartDt] = useState(endDt); //?현재 월의 3개월전))
  const [selectedEndDt, setSelectedEndDt] = useState(startDt || format(currentDate, 'yyyyMM'));

  const onApplyDate = () => {
    router.push(`/analysis/period?startDt=${selectedStartDt}&endDt=${selectedEndDt}`);
  };

  return (
    <MonthPickerFilterBlock>
      <CurrentYear>
        <PrevButton>
          <ArrowIcon />
        </PrevButton>
        <p>2023</p>
        <NextButton>
          <ArrowIcon />
        </NextButton>
      </CurrentYear>

      <MonthWrapper>
        {monthList.map((month, i) => (
          <Button key={i} size="small" $backgroundColor={palette.grey_70} color={palette.grey_20}>
            {month}월
          </Button>
        ))}
      </MonthWrapper>

      <Button $backgroundColor={palette.blue_15} onClick={onApplyDate}>
        적용하기
      </Button>
    </MonthPickerFilterBlock>
  );
};

const MonthPickerFilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
`;

const CurrentYear = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 28px;

  p {
    font-size: 18px;
    font-weight: 700;
  }
`;

const MonthWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  button {
    font-weight: 500;
  }
`;

const NextButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
`;

const PrevButton = styled(NextButton)`
  transform: rotate(-180deg);
`;

export default MonthPickerFilter;
