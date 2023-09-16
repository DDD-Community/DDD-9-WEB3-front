import React from 'react';
import styled, { keyframes } from 'styled-components';
import ArrowIcon from '@assets/svg/arrow.svg';
import palette from '@/_styles/palette';
import { useSearchParams } from 'next/navigation';
import { Box, CircularProgress } from '@mui/material';

type BarChartWrapperProps = {
  numbers: { no: number; count: number }[];
  isLoading: boolean;
};

const BarChartWrapper: React.FC<BarChartWrapperProps> = ({ numbers, isLoading }) => {
  const searchParams = useSearchParams();

  /* 당첨횟수순 > 1~10 필터 미완 */
  return (
    <BarChartWrapperBlock className="bar-chart">
      {/* {searchParams.get('sortOption') === 'desc' && (
        <NumberBar>
          <PrevButton>
            <ArrowIcon />
          </PrevButton>
          <Text>1 ~ 10</Text>
          <NextButton>
            <ArrowIcon />
          </NextButton>
        </NumberBar>
      )} */}

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
        <BarList>
          {numbers.map(num => (
            <BarItem key={num.no}>
              <Num>{num.no}</Num>
              <StatisticalBar $count={num.count} />
            </BarItem>
          ))}
        </BarList>
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
