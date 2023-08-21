import React from 'react';
import styled from 'styled-components';
import ArrowIcon from '@assets/svg/arrow.svg';
import palette from '@/_styles/palette';

type BarChartWrapperProps = {};

const BarChartWrapper: React.FC<BarChartWrapperProps> = () => {
  const numbers = Array.from({ length: 45 }, (_, index) => index + 1);

  return (
    <BarChartWrapperBlock>
      <NumberBar>
        <PrevButton>
          <ArrowIcon />
        </PrevButton>
        <Text>1 ~ 10</Text>
        <NextButton>
          <ArrowIcon />
        </NextButton>
      </NumberBar>

      <BarList>
        {numbers.map(num => (
          <BarItem key={num}>
            <Num>{num}</Num>
            <StatisticalBar test={50} />
          </BarItem>
        ))}
      </BarList>
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
`;

const StatisticalBar = styled.div<{ test: number }>`
  @keyframes barAni {
    from {
      width: 0;
    }
    to {
      width: ${props => props.test && props.test * 3.38}px;
    }
  }

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
    animation: ${({ test }) => test && `barAni 0.8s forwards`};
  }
`;

export default BarChartWrapper;
