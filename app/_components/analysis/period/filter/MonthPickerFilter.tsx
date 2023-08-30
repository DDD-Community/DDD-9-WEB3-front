import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import palette from '@/_styles/palette';
import { ko } from 'date-fns/locale';
import { format } from 'date-fns';
import ArrowIcon from '@assets/svg/arrow.svg';
import { Button } from '@/_components/common';
import { useRouter, useSearchParams } from 'next/navigation';

type MonthPickerFilterTestProps = {};

const MonthPickerFilterTest: React.FC<MonthPickerFilterTestProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryMode = searchParams.get('category');
  const startDt = searchParams.get('startDt');
  const endDt = searchParams.get('endDt');

  const [selectedStartDate, setSelectedStartDate] = useState<Date>(new Date(`${startDt}`));
  const [selectedEndDate, setSelectedEndDate] = useState<Date>(new Date(`${endDt}`));

  const rangeMonthPicker = [
    {
      title: '시작일',
      value: selectedStartDate,
    },
    {
      title: '종료일',
      value: selectedEndDate,
    },
  ];

  return (
    <MonthPickerFilterTestBlock>
      {rangeMonthPicker.map((monthPicker, i) => (
        <MonthBox key={i}>
          <Title>{monthPicker.title}</Title>
          <DatePicker
            locale={ko}
            selected={monthPicker.value}
            onChange={date => {
              if (!date) return;
              monthPicker.title === '종료일'
                ? setSelectedEndDate(date)
                : setSelectedStartDate(date);
            }}
            selectsStart={!(monthPicker.title === '종료일')}
            selectsEnd={monthPicker.title === '종료일'}
            startDate={selectedStartDate}
            endDate={selectedEndDate}
            dateFormat="yyyy.MM"
            showMonthYearPicker
            inline
            minDate={monthPicker.title === '종료일' ? selectedStartDate : null}
            maxDate={new Date()}
            showFourColumnMonthYearPicker
            renderCustomHeader={({
              date,
              decreaseYear,
              increaseYear,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <MonthHeader>
                <ArrowPrevButton onClick={decreaseYear} disabled={prevMonthButtonDisabled}>
                  <ArrowIcon />
                </ArrowPrevButton>
                <YearText>{date.getFullYear()}</YearText>
                <ArrowNextButton onClick={increaseYear} disabled={nextMonthButtonDisabled}>
                  <ArrowIcon />
                </ArrowNextButton>
              </MonthHeader>
            )}
          />
        </MonthBox>
      ))}
      <Button
        $backgroundColor={palette.blue_15}
        onClick={() =>
          router.push(
            `/analysis/period?category=${categoryMode}&startDt=${format(
              selectedStartDate,
              'yyyy.MM',
            )}&endDt=${format(selectedEndDate, 'yyyy.MM')}`,
          )
        }
      >
        적용하기
      </Button>
    </MonthPickerFilterTestBlock>
  );
};

const MonthPickerFilterTestBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 32px 20px;

  .react-datepicker {
    border: none;
    width: 100%;

    .react-datepicker__header {
      background-color: transparent;
      border: none;
      padding: 0;
    }

    .react-datepicker__month-container {
      width: inherit;

      .react-datepicker__monthPicker {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin: 0;

        .react-datepicker__month-wrapper {
          display: flex;
          gap: 8px;
          width: max-content;
        }

        //? default month
        .react-datepicker__month-text {
          padding: 14px 7px;
          border-radius: 8px;
          background-color: ${palette.grey_70};
          color: ${palette.grey_20};
          margin: 0;
        }

        //? selected range month
        .react-datepicker__month-text--in-range {
          background-color: #c9dbfa; //? test color
          color: ${palette.white};
        }

        //? selected month
        .react-datepicker__month-text--selected {
          background-color: ${palette.blue_30};
          color: ${palette.white};
        }

        //? disabled month
        .react-datepicker__month-text--disabled {
          background-color: transparent;
          color: ${palette.grey_50};
        }
      }
    }
  }
`;

const MonthHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const ArrowNextButton = styled.button`
  display: flex;
  align-items: center;
`;

const ArrowPrevButton = styled(ArrowNextButton)`
  transform: rotate(-180deg);
`;

const YearText = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const MonthBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export default MonthPickerFilterTest;
