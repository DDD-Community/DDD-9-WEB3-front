'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Selector from '@/_components/common/Selector';
import useLatestNumber from '@/_hooks/useLatestNumber';
import useRoundsNumber from '@/_hooks/useRoundsNumber';
import DoughnutChartWrapper from '../chart/DoughnutChartWrapper';
import BarChartWrapper from '../chart/BarChartWrapper';

type RoundsAnalysisWrapperProps = {};

const RoundsAnalysisWrapper: React.FC<RoundsAnalysisWrapperProps> = () => {
  const { latestRoundsNumber } = useLatestNumber();

  //? 1072 최신회차 논의 필요
  const [selectedStartRound, setSelectedStartRound] = useState<{ label: string; value: number }>({
    label: `${latestRoundsNumber || 1072}회`,
    value: latestRoundsNumber || 1072,
  });
  const [selectedEndRound, setSelectedEndRound] = useState({
    label: `${latestRoundsNumber || 1072}회`,
    value: latestRoundsNumber || 1072,
  });

  const selectOptions = Array.from({ length: latestRoundsNumber }, (_, index) => ({
    label: `${latestRoundsNumber - index}회`,
    value: latestRoundsNumber - index,
  }));

  const { roundNumbersData } = useRoundsNumber({
    startNo: selectedStartRound.value,
    endNo: selectedEndRound.value,
    sortType: 'COUNT',
    sortOption: 'desc',
  });

  const { roundNumbersData: descRoundNumbersData } = useRoundsNumber({
    startNo: selectedStartRound.value,
    endNo: selectedEndRound.value,
    sortOption: 'asc',
  });

  return (
    <RoundsAnalysisWrapperBlock>
      <RoundsAnalysisSelectorBlock>
        <Selector
          selectOption={selectedStartRound}
          onChange={event => {
            if (Number(event.target.value) > selectedEndRound.value) {
              console.log('선택된 마지막 회차를 넘기면 안됨');
              //토스트 필요
              return;
            }
            setSelectedStartRound({
              label: `${event.target.value}회`,
              value: Number(event.target.value),
            });
          }}
          options={selectOptions}
        />
        <p>-</p>
        <Selector
          selectOption={selectedEndRound}
          onChange={event => {
            if (Number(event.target.value) < selectedStartRound.value) {
              console.log('선택된 시작 회차보다 적으면 안됨');
              //토스트 필요
              return;
            }
            setSelectedEndRound({
              label: `${event.target.value}회`,
              value: Number(event.target.value),
            });
          }}
          options={selectOptions}
        />
      </RoundsAnalysisSelectorBlock>

      <DoughnutChartWrapper numbers={roundNumbersData} />
      <BarChartWrapper numbers={descRoundNumbersData} />
    </RoundsAnalysisWrapperBlock>
  );
};

const RoundsAnalysisWrapperBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px 20px;
`;

const RoundsAnalysisSelectorBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
`;

export default RoundsAnalysisWrapper;
