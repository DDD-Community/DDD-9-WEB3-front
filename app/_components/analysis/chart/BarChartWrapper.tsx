import React, { useEffect, useMemo, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ArrowIcon from '@assets/svg/arrow.svg';
import palette from '@/_styles/palette';
import { Box, CircularProgress } from '@mui/material';
import { useSearchParams } from 'next/navigation';

type BarChartWrapperProps = {
  hasSwitch?: boolean;
  numbers: { no: number; count: number }[];
  isLoading: boolean;
};

const START_NUM = 1;
const END_NUM = 10;
const MAX_NUM = 45;

const BarChartWrapper: React.FC<BarChartWrapperProps> = ({
  hasSwitch = false,
  numbers,
  isLoading,
}) => {
  const searchParams = useSearchParams();
  const [start, setStart] = useState(START_NUM);
  const [end, setEnd] = useState(END_NUM);

  const handleNumbers = (arrow: 'next' | 'prev') => {
    if (arrow === 'next') {
      setStart(end + 1);
      setEnd(end + END_NUM);
      return;
    }

    setStart(start - END_NUM);
    setEnd(start - 1);
  };

  const filterByNumbers = useMemo(() => {
    if (numbers.length && hasSwitch) {
      const sliceNums = numbers.slice(start - 1, end);
      if (sliceNums.length !== END_NUM) {
        setEnd(numbers[numbers.length - 1]?.no);
      }
      return sliceNums;
    }
    return numbers;
  }, [numbers, hasSwitch, start, end]);

  useEffect(() => {
    setStart(START_NUM);
    setEnd(END_NUM);
  }, [searchParams]);

  return (
    <BarChartWrapperBlock className="bar-chart">
      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 200,
            color: palette.grey_60,
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
      ) : (
        <>
          {hasSwitch && (
            <NumberBar>
              <PrevButton disabled={start === START_NUM} onClick={() => handleNumbers('prev')}>
                <ArrowIcon />
              </PrevButton>
              <Text>
                {start} ~ {end}
              </Text>
              <NextButton disabled={end === MAX_NUM} onClick={() => handleNumbers('next')}>
                <ArrowIcon />
              </NextButton>
            </NumberBar>
          )}
          <BarList>
            {filterByNumbers.map(num => (
              <BarItem key={num.no}>
                <Num>{num.no}</Num>
                <StatisticalBar $count={num.count} />
              </BarItem>
            ))}
          </BarList>
        </>
      )}
    </BarChartWrapperBlock>
  );
};

const BarChartWrapperBlock = styled.div`
  margin: 18px 0;
`;

const NumberBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 19px;
`;

const Text = styled.p`
  font-weight: bold;
  margin: 0 8px;
`;

const NextButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;

  &:disabled {
    cursor: default;
    path {
      fill: ${palette.grey_60};
    }
  }
`;

const PrevButton = styled(NextButton)`
  transform: rotate(-180deg);

  &:disabled {
    cursor: default;
    path {
      fill: ${palette.grey_60};
    }
  }
`;

const BarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

const BarItem = styled.li`
  display: flex;
`;

const Num = styled.span`
  color: #979da6;
  font-size: 14px;
  font-weight: 600;
  min-width: 19px;
`;

const barAni = (count: number) => keyframes`
    from {
      width: 0;
    }
    to {
      width: ${count}%;
    }
`;

const StatisticalBar = styled.div<{ $count: number }>`
  width: 100%;
  height: 12px;
  background-color: #eff3f8;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  margin-left: 15px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 0;
    border-radius: 6px;
    background-color: ${palette.blue_15};
    animation: ${props => barAni(props.$count)} 0.8s forwards;
  }
`;

export default BarChartWrapper;
