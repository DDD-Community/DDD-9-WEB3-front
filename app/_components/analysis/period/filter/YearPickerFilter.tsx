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

type YearPickerFilterProps = {};

const YearPickerFilter: React.FC<YearPickerFilterProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const startDt = searchParams.get('startDt');
  const endDt = searchParams.get('endDt');

  const [selectedStartDate, setSelectedStartDate] = useState<Date>(new Date(`${startDt}`));
  const [selectedEndDate, setSelectedEndDate] = useState<Date>(new Date(`${endDt}`));

  const rangeYearPicker = [
    {
      title: '시작일',
      value: selectedStartDate,
    },
    {
      title: '종료일',
      value: selectedEndDate,
    },
  ];

  //! 타이틀수정
  return (
    <YearPickerFilterBlock>
      {rangeYearPicker.map((yearPicker, i) => (
        <MonthBox key={i}>
          <Title>{yearPicker.title}</Title>
          <DatePicker
            locale={ko}
            selected={yearPicker.value}
            onChange={date => {
              if (!date) return;
              yearPicker.title === '종료일' ? setSelectedEndDate(date) : setSelectedStartDate(date);
            }}
            selectsStart={!(yearPicker.title === '종료일')}
            selectsEnd={yearPicker.title === '종료일'}
            startDate={selectedStartDate}
            endDate={selectedEndDate}
            dateFormat="yyyy"
            showYearPicker
            inline
            minDate={yearPicker.title === '종료일' ? selectedStartDate : null}
            maxDate={new Date()}
            showFourColumnMonthYearPicker
            renderCustomHeader={({
              date,
              decreaseYear,
              increaseYear,
              prevYearButtonDisabled,
              nextYearButtonDisabled,
              customHeaderCount,
            }) => (
              <MonthHeader>
                <ArrowPrevButton onClick={decreaseYear} disabled={prevYearButtonDisabled}>
                  <ArrowIcon />
                </ArrowPrevButton>
                <YearText>
                  {yearPicker.title === '종료일'
                    ? format(selectedEndDate, 'yyyy')
                    : format(selectedStartDate, 'yyyy')}
                </YearText>
                <ArrowNextButton onClick={increaseYear} disabled={nextYearButtonDisabled}>
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
            `/analysis/period?category=year&startDt=${format(
              selectedStartDate,
              'yyyy',
            )}&endDt=${format(selectedEndDate, 'yyyy')}`,
          )
        }
      >
        적용하기
      </Button>
    </YearPickerFilterBlock>
  );
};

const YearPickerFilterBlock = styled.div`
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

    .react-datepicker__year--container {
      width: inherit;

      .react-datepicker__year {
        margin: 0;
      }

      .react-datepicker__year-wrapper {
        display: flex;
        gap: 7px;
        width: max-content;
        flex-wrap: wrap;
        max-width: 100%;
      }

      //? default year
      .react-datepicker__year-text {
        padding: 14px 7px;
        border-radius: 8px;
        background-color: ${palette.grey_70};
        color: ${palette.grey_20};
        margin: 0;
      }

      //? selected range year
      .react-datepicker__year-text--in-range {
        background-color: #c9dbfa; //? test color
        color: ${palette.white};
      }

      //? selected year
      .react-datepicker__year-text--selected {
        background-color: ${palette.blue_30};
        color: ${palette.white};
      }

      //? disabled year
      .react-datepicker__year-text--disabled {
        background-color: transparent;
        color: ${palette.grey_50};
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

export default YearPickerFilter;
