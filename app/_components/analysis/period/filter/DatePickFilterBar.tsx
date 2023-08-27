'use client';

import palette from '@/_styles/palette';
import React from 'react';
import styled from 'styled-components';
import CalendarFilterIcon from '@assets/svg/calendarFilter.svg';
import DashIcon from '@assets/svg/dash.svg';

type DatePickFilterBarProps = {
  setIsVisiblePickerFilter: any;
};

const DatePickFilterBar: React.FC<DatePickFilterBarProps> = ({ setIsVisiblePickerFilter }) => {
  return (
    <DatePickFilterBarBlock>
      <div>
        <LabelText>시작일</LabelText>
        <DateBox>
          <PickedDate>2022.05</PickedDate>
          <button onClick={() => setIsVisiblePickerFilter(true)}>
            <CalendarFilterIcon />
          </button>
        </DateBox>
      </div>
      <DashIconSVG />
      <div>
        <LabelText>종료일</LabelText>
        <DateBox>
          <PickedDate>2022.05</PickedDate>
          <button>
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
