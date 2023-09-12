import Selector from '@/_components/common/Selector';
import useLatestNumber from '@/_hooks/useLatestNumber';
import React, { useState } from 'react';
import styled from 'styled-components';
import BarChartWrapper from '../chart/BarChartWrapper';
import useRankNumber from '@/_hooks/useRankNumber';
import { useSearchParams } from 'next/navigation';

type PrizeRankAnalysisWrapperProps = {};

const PrizeRankAnalysisWrapper: React.FC<PrizeRankAnalysisWrapperProps> = () => {
  const searchParams = useSearchParams();
  const { latestRoundsNumber } = useLatestNumber();

  const [selectedStartRank, setSelectedStartRank] = useState({
    label: '1등',
    value: 1,
  });
  const [selectedEndRank, setSelectedEndRank] = useState({
    label: '10등',
    value: 10,
  });

  const selectOptions = Array.from({ length: latestRoundsNumber }, (_, index) => ({
    label: `${index + 1}등`,
    value: index + 1,
  }));

  const { rankNumbersData } = useRankNumber({
    startRank: selectedStartRank.value,
    size: selectedEndRank.value - selectedStartRank.value + 1,
    rankSortOption: searchParams.get('type'),
  });

  return (
    <PrizeRankAnalysisWrapperBlock>
      <RoundsAnalysisSelectorBlock>
        <Selector
          selectOption={selectedStartRank}
          onChange={event => {
            if (Number(event.target.value) > selectedEndRank.value) {
              console.log('선택된 마지막 회차를 넘기면 안됨');
              //토스트 필요
              return;
            }
            setSelectedStartRank({
              label: `${event.target.value}등`,
              value: Number(event.target.value),
            });
          }}
          options={selectOptions}
        />
        <p>-</p>
        <Selector
          selectOption={selectedEndRank}
          onChange={event => {
            if (Number(event.target.value) < selectedStartRank.value) {
              console.log('선택된 시작 회차보다 적으면 안됨');
              //토스트 필요
              return;
            }
            setSelectedEndRank({
              label: `${event.target.value}등`,
              value: Number(event.target.value),
            });
          }}
          options={selectOptions}
        />
      </RoundsAnalysisSelectorBlock>
      <BarChartWrapper numbers={rankNumbersData} />
    </PrizeRankAnalysisWrapperBlock>
  );
};

const PrizeRankAnalysisWrapperBlock = styled.div`
  padding: 27px 20px 50px;
`;

const RoundsAnalysisSelectorBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 35px;
`;

export default PrizeRankAnalysisWrapper;
