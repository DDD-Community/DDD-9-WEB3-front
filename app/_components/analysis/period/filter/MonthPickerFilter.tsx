import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArrowIcon from '@assets/svg/arrow.svg';
import { Button } from '@/_components/common';
import palette from '@/_styles/palette';
import { usePathname, useRouter } from 'next/navigation';
import format from 'date-fns/format';
import { useSearchParams } from 'next/navigation';

type MonthPickerFilterProps = {};

const MonthPickerFilter: React.FC<MonthPickerFilterProps> = () => {
  const router = useRouter();
  const monthList = Array.from({ length: 12 }, (_, index) => index + 1);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'yyyy.MM');

  const categoryMode = searchParams.get('category');
  const startDt = searchParams.get('startDt');
  const endDt = searchParams.get('endDt');
  const type = searchParams.get('type');

  const [selectedYear, setSelectedYear] = useState<string>(formattedDate.split('.')[0]);

  useEffect(() => {
    if (type === 'start' && startDt) {
      setSelectedYear(startDt.split('.')[0]);
      return;
    }
    if (type === 'end' && endDt) {
      setSelectedYear(endDt.split('.')[0]);
      return;
    }
  }, [type, endDt, startDt]);

  const onClickMonth = (month: number) => {
    const formatMonth = format(new Date(Number(selectedYear), month - 1, 1), 'yyyy.MM');
    newParams.set(type === 'start' ? 'startDt' : 'endDt', formatMonth);
    router.push(`${pathname}?${newParams.toString()}`);
  };

  return (
    <MonthPickerFilterBlock>
      <Box>
        <CurrentYear>
          <PrevButton
            onClick={() => {
              setSelectedYear(`${Number(selectedYear) - 1}`);
            }}
          >
            <ArrowIcon />
          </PrevButton>
          <p>{selectedYear}</p>
          <NextButton
            onClick={() => {
              setSelectedYear(`${Number(selectedYear) + 1}`);
            }}
          >
            <ArrowIcon />
          </NextButton>
        </CurrentYear>
        <MonthWrapper>
          {monthList.map((month, i) => (
            <Button
              key={i}
              size="small"
              $backgroundColor={palette.grey_70}
              color={palette.grey_20}
              onClick={() => onClickMonth(month)}
            >
              {month}월
            </Button>
          ))}
        </MonthWrapper>
      </Box>

      <Button
        $backgroundColor={palette.blue_15}
        onClick={() =>
          router.push(
            `/analysis/period?category=${categoryMode}&startDt=${
              startDt || formattedDate
            }&endDt=${endDt}`,
          )
        }
      >
        적용하기
      </Button>
    </MonthPickerFilterBlock>
  );
};

const MonthPickerFilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 32px 20px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
