'use client';

import palette from '@/_styles/palette';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CalendarFilterIcon from '@assets/svg/calendarFilter.svg';
import DashIcon from '@assets/svg/dash.svg';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import format from 'date-fns/format';
import { subMonths } from 'date-fns';

type DatePickFilterBarProps = {
  setIsVisiblePickerFilter: any;
};

const DatePickFilterBar: React.FC<DatePickFilterBarProps> = ({ setIsVisiblePickerFilter }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = useSearchParams();
  const newParams = new URLSearchParams(params.toString());

  const startDt = searchParams.get('startDt');
  const endDt = searchParams.get('endDt');

  // const [selectedStartDt, setSelectedStartDt] = useState<string | null>(startDt || endDt); //?현재 월의 3개월전

  // useEffect(() => {
  //   //? 3개월 전
  //   if (selectedStartDt) return; //? or startDt
  //   //? 월별인지 연도별인지 체크
  //   if (category === 'month' && endDt) {
  //     const calculateThreeMonthsAgo = (yearMonth: string) => {
  //       const year = parseInt(yearMonth.slice(0, 4));
  //       const month = parseInt(yearMonth.slice(5)) - 1;
  //       const currentDate = new Date(year, month, 1);
  //       const threeMonthsAgoDate = subMonths(currentDate, 3);
  //       return format(threeMonthsAgoDate, 'yyyy.MM');
  //     };

  //     const threeMonthsAgoYearMonth = calculateThreeMonthsAgo(endDt);
  //     setSelectedStartDt(threeMonthsAgoYearMonth);
  //   }
  // }, []);

  return (
    <DatePickFilterBarBlock>
      <div>
        <LabelText>시작일</LabelText>
        <DateBox>
          <PickedDate>{startDt || endDt}</PickedDate>
          <button
            onClick={() => {
              newParams.set('type', 'start');
              if (!searchParams.get('startDt') && startDt) {
                newParams.set('startDt', startDt);
              }
              router.push(`${pathname}?${newParams.toString()}`);
              setIsVisiblePickerFilter(true);
            }}
          >
            <CalendarFilterIcon />
          </button>
        </DateBox>
      </div>
      <DashIconSVG />
      <div>
        <LabelText>종료일</LabelText>
        <DateBox>
          <PickedDate>{endDt}</PickedDate>
          <button
            onClick={() => {
              newParams.set('type', 'end');
              if (!searchParams.get('endDt') && endDt) {
                newParams.set('endDt', endDt);
              }
              router.push(`${pathname}?${newParams.toString()}`);
              setIsVisiblePickerFilter(true);
            }}
          >
            <CalendarFilterIcon />
          </button>
        </DateBox>
      </div>
    </DatePickFilterBarBlock>
  );
};

const DatePickFilterBarBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${palette.blue_ligth};
  padding: 28px 20px;
  position: relative;
`;

const DashIconSVG = styled(DashIcon)`
  position: absolute;
  bottom: 30px;
`;

const LabelText = styled.p`
  font-size: 12px;
  margin-bottom: 4px;
  color: ${palette.grey_30};
`;

const PickedDate = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

const DateBox = styled.div`
  border: 1px solid ${palette.grey_70};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  background-color: ${palette.white};
  border-radius: 5px;
`;

export default DatePickFilterBar;
